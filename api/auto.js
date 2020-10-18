const MongoClient = require('mongodb').MongoClient;
const url = process.env.mongo;
var faker = require('faker');

let cachedDb = null

var request = require("request");

var business = 'https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=' + process.env.newsAPI;
var science = 'https://newsapi.org/v2/top-headlines?country=au&category=science&apiKey='+ process.env.newsAPI;
var cultrue = 'https://newsapi.org/v2/top-headlines?country=au&category=entertainment&apiKey='+ process.env.newsAPI;
var politics = 'https://newsapi.org/v2/top-headlines?country=au&category=general&apiKey='+ process.env.newsAPI;
var tech = 'https://newsapi.org/v2/top-headlines?country=au&category=technology&apiKey='+ process.env.newsAPI;
var world = 'https://newsapi.org/v2/top-headlines?country=us&apiKey='+ process.env.newsAPI;

function combinePromises(){
  return Promise.all(
    [politics, business, science, cultrue, tech, world].map((url, i)=> {
      return new Promise(function(resolve, reject){
        try{
          request.get({
            url: url,
          }, function(err, response, body) {
            if(err){
              reject(err);
            } else {
                let b = JSON.parse(body)
              resolve(b);
            }
          });
        }catch(error){
          reject(error);
        }
      });

    })
  );
}




  //render page

function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}

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

module.exports = async (req, res) => {
    console.log('auto')
    let d = new Date()
    let iso = d.toISOString()
    var db = await connectToDatabase(url);

    var collection = await db.collection('sources')

    combinePromises()
    .then(function(response) {

      let t = ['Politics', 'Business', 'Science', 'Cultrue', 'Tech', 'World']
        for (let index = 0; index < response.length; index++) {
            const element = response[index];
            let c = t[index]

        console.log(element.articles[0].title)
        var randomName = faker.name.findName();
        const myobj = {
            title: element.articles[0].title,
            slug: string_to_slug(element.articles[0].title),
            category: c,
            author: randomName,
            date: iso,
            image: "https://picsum.photos/300/180"
        }

 

        collection.findOne({"slug": myobj.slug}, function(err, doc) {
            if (err) throw err;

            if (!doc || doc.length === 0) {
                collection.insertOne(myobj, function(err, res) {
                });
            } else {
            }
            
            });
        }
        res.send(`Done`)

    }, function(error){
        //do something with error here
        console.log(error)
        res.send(`Error`)

    });
    
}