#!/usr/bin/env python
# coding: utf-8

# # My Sources Generation

# In[5]:


from faker import Faker

fake = Faker(["en_AU", "en_US", "en_UK"])


# In[6]:


import os
from dataclasses import dataclass, field
from typing import List
from pathlib import Path
from datetime import datetime
import random
import json
from pprint import pprint

from transformers import pipeline
from textblob import TextBlob
from dotenv import load_dotenv
import pymongo
import requests
import matplotlib.pyplot as plt
from tqdm import tqdm

load_dotenv()


# ## Text Generation

# In[7]:


generator = pipeline("text-generation", framework="pt")


# In[31]:


def generate_article_from_title(title: str) -> str:
    article = generator(title, max_length=random.randint(500, 1500))[0][
        "generated_text"
    ]
    if "." in article:
        return article[article.index(".") + 1 :]
    return article


# ## Summarisation

# In[9]:


summariser = pipeline("summarization")


# In[15]:


def generate_summary_from_article(article: str) -> str:
    return summariser(article)[0]["summary_text"]


# ## Keyword Finding

# In[21]:


def find_keywords_in_article(article: str) -> List[str]:
    t = TextBlob(article)
    return [word for word, tag in t.tags if tag == "NN"]


# In[22]:


# ## Image Fetching

# In[23]:


def image_url_from_keywords(keywords: List[str]) -> str:
    r = requests.get(f"https://source.unsplash.com/1600x900/?{','.join(keywords)}")
    return r.url


# ## Mongo Connection

# In[26]:


client = pymongo.MongoClient(os.environ.get("mongo"))
db = client.news
collection = db.sources


# ## DataModel

# In[27]:


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


# ## Fill Empties


# In[33]:


for empty in tqdm(collection.find({"description": None})):
    print(empty)
    to_fill = Post(**empty)
    to_fill.fill_nones()
    collection.update_one({"_id": to_fill._id}, {"$set": to_fill.to_dict()})
