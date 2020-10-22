import os
from dataclasses import dataclass, field
from typing import List
from pathlib import Path
from datetime import datetime
import random
import json
from pprint import pprint
import logging

from transformers import pipeline
from textblob import TextBlob
from dotenv import load_dotenv
import pymongo
import requests

load_dotenv()

from faker import Faker

# some nice constants
fake = Faker(["en_AU", "en_US", "en_UK"])

generator = pipeline("text-generation", framework="pt")
summariser = pipeline("summarization", framework="pt")

client = pymongo.MongoClient(os.environ.get("mongo"))
db = client.news
collection = db.sources

# helpers


def generate_article_from_title(title: str) -> str:
    try:
        article = generator(title, max_length=random.randint(500, 1500))[0][
            "generated_text"
        ]
        if "." in article:
            return article[article.index(".") + 1 :]
        return article
        pass
    except:
        logging.warning('  Error making html')
        return ""
        pass


def generate_summary_from_article(article: str) -> str:
    return summariser(article)[0]["summary_text"]


def find_keywords_in_article(article: str) -> List[str]:
    t = TextBlob(article)
    return [word for word, tag in t.tags if tag == "NN"]


def image_url_from_keywords(keywords: List[str]) -> str:
    r = requests.get(f"https://source.unsplash.com/1600x900/?{','.join(keywords)}")
    return r.url


@dataclass
class Post:
    title: str = None
    category: str = None
    author: str = field(default_factory=lambda: fake.name())
    description: str = None
    image: str = None
    slug: str = None
    html: str = None
    tags: List[str] = None
    date: str = field(default_factory=lambda: fake.date_this_year().isoformat())
    _id: str = None

    def to_dict(self):
        return self.__dict__

    def to_json(self):
        return json.dumps(self.to_dict())

    def fill_nones(self):
        if self.html is None:
            logging.warning('  Starting making html for: ' + self.title)
            self.html = generate_article_from_title(title=self.title)
        if self.description is None:
            self.description = generate_summary_from_article(article=self.html)
        if self.tags is None:
            self.tags = find_keywords_in_article(self.html)
        if self.image is None or "picsum" in self.image:
            self.image = image_url_from_keywords(self.tags)

    def update(self):
        collection.update_one({"slug": self.slug}, {"$set": self.to_dict()})

    def pretty(self):
        pprint(self.to_dict())


def fill_empties():
    for empty in collection.find({"description": None}):
        # print(empty)
        to_fill = Post(**empty)
        to_fill.fill_nones()
        collection.update_one({"_id": to_fill._id}, {"$set": to_fill.to_dict()})
    
    r = requests.get("https://sources.now.sh/api/auto")
    # r = requests.get(os.environ.get("rebuild"))
  
    logging.warning('  Rebuilding site with new content 😀  ')

if __name__ == "__main__":
    fill_empties()