const moment = require('moment'); 
const MongoClient = require('mongodb').MongoClient;
const url = process.env.mongo;

let cachedDb = null

// A function for connecting to MongoDB,
// taking a single paramater of the connection string
async function connectToDatabase(uri) {
	// If the database connection is cached,
	// use it instead of creating a new connection
	if (cachedDb) {
	  return cachedDb
	}
	// If no connection is cached, create a new one
	const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  })
  
	// Select the database through the connection,
	// using the database path of the connection string
	const db = await client.db('news')
  
	// Cache the database connection and return the connection
	cachedDb = db
	return db
}

export async function get(req, res) {
  var db = await connectToDatabase(url)

  var collection = await db.collection('sources')
  
  collection.find({ "category": "Culture" }).toArray((err, result) => {
    // result = result.sort(function(a, b) {
    //   return (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
    // });
    result = result.sort((a,b) => {
      return moment.utc(b.date).diff(moment.utc(a.date))
    })
    if (err) {
      console.log(err)
      res.writeHead(404, {
        'Content-Type': 'application/json'
      });
  
      res.end(JSON.stringify({
        message: `Not found`
      }));
    } else {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      result = result.map(el => {
        el.date = el.date ? moment(el.date).fromNow() : "2 hours ago"
        return el;
      })
      res.end(JSON.stringify(result))
    }
  })
}
