const moment = require('moment'); 
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://admin:uF8pZhQhraHJGu2Q@cluster0.vruoi.mongodb.net/news?retryWrites=true&w=majority";

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

export async function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;
	console.log(slug)

	var db = await connectToDatabase(url)

	var collection = await db.collection('sources')

	collection.find({ "slug": slug }).toArray((err, result) => {
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
			result[0].date =  result[0].date ? moment(result[0].date).fromNow() : "2 hours ago"
			res.end(JSON.stringify(result[0]));
		}
	})

	// if (lookup.has(slug)) {
	// 	res.writeHead(200, {
	// 		'Content-Type': 'application/json'
	// 	});

	// 	res.end(lookup.get(slug));
	// } else {
	// 	res.writeHead(404, {
	// 		'Content-Type': 'application/json'
	// 	});

	// 	res.end(JSON.stringify({
	// 		message: `Not found`
	// 	}));
	// }
}
