
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:uF8pZhQhraHJGu2Q@cluster0.vruoi.mongodb.net/news?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
if (err) console.log(err)
  const collection = client.db("test").collection("sources");
  collection.find({}).toArray(function(err, items) {
      if (err) console.log(err);
      console.log(items)
    });
  // perform actions on the collection object
//   console.log(collection)
  client.close();
});

// Import Dependencies
const MongoClient = require('mongodb').MongoClient;


// Create cached connection variable
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
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db('dates')

  // Cache the database connection and return the connection
  cachedDb = db
  return db
}

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
    
    // Get a database connection, cached or otherwise,
    // using the connection string environment variable as the argument
    var db = await connectToDatabase(process.env.MONGO_URL || url)

    // Select the "users" collection from the database
    var collection = await db.collection('crash')

    console.log(query)

    res.setHeader('Content-Type', 'application/json');
    // Select the users collection from the database
    var item = {}
    if (query && query.id) {
        item = {_id: query.id};
    }
    collection.findOne(item, (err, result) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({'error':true, 'msg':"i'm uncomfortable sharing that info with you"}));
        } else {
            if (result) {
                var d = new Date(result.date); 
                result.days = days_between(new Date(), d);
                // Respond with a JSON string of all users in the collection
                result.error = false;
                res.end(JSON.stringify(result));
            } else {
                res.writeHead(404, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({'error':true, 'msg':"what are you looking for? it's not here"}));
            }
        }
    });
}