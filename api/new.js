const MongoClient = require('mongodb').MongoClient;
const url = process.env.mongo;
var faker = require('faker');

let cachedDb = null

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
let s = ['300/180','300/150','330/200','200/120','400/280']
module.exports = async (req, res) => {
    // .log('runs')
    let d = new Date()
    let iso = d.toISOString()
    const { title, category } = JSON.parse(JSON.stringify(req.body))
    // console.log(title)
    if (title && category) {
        if (title.length > 10 && title.length < 400 && category.length > 1) {
            var randomName = faker.name.findName();
            const myobj = {
                title: title,
                slug: string_to_slug(title),
                category: category,
                author: randomName,
                date: iso,
                image: "https://picsum.photos/"+ s[Math.floor(Math.random() * s.length)]
            }

            var db = await connectToDatabase(url);
        
            var collection = await db.collection('sources')
         
            collection.findOne({"slug": myobj.slug}, function(err, doc) {
                if (err) throw err;

                if (!doc || doc.length === 0) {
                    collection.insertOne(myobj, function(err, sdsdds) {
                        if (err) {
                            res.status(500).send(`Error making page`); 
                        } else {
                            // res.redirect('https://sources.now.sh/thanks');
                            res.send(`<h2>Success! 🥳</h2><h3>This story will be writen when we have done the research.</h3><p>Check back in a few days to read your masterpiece of independent journalism</p><br><br><p>Feel free to close this tab</p>`); 
                        }
                        // db.close();
                    });
                } else {
                    res.status(500).send(`This page already exists. Look for it on the site`); 
                }
               
              });

          
        } else {
            res.status(500).send(`Please send a title and category`);
        }
    } else {
        res.status(500).send(`Please send a title and category`);
    }
}