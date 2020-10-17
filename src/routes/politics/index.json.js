import posts from './_posts.js';
var moment = require('moment'); 

const contents = JSON.stringify(
  posts.map(post => {
    return {
      title: post.title,
      slug: post.slug,
      author: post.author,
      description: post.description,
      image: post.image,
      date: moment(post.date).fromNow() || "2 hours ago"
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
