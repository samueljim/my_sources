from http.server import BaseHTTPRequestHandler
from datetime import datetime
import requests
import os

import transformers
from gen.genlib import fill_empties, Post


class handler(BaseHTTPRequestHandler):
    def do_GET(self):

        fill_empties()
        requests.get(os.environ.get("rebuild"))

        content = "done"

        # post = Post(title="fake news is good. here are 10 reasons why.")
        # post.fill_nones()
        # content = post.to_dict()

        self.send_response(200)
        self.send_header("Content-type", "text/plain")
        self.end_headers()
        self.wfile.write(str(content).encode())
        return
