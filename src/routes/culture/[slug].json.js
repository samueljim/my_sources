const moment = require('moment'); 
const MongoClient = require('mongodb').MongoClient;
const url = process.env.mongo;
const Autolinker = require( 'autolinker' );

let cachedDb = null
function text2HTML(text) {
    // 1: Plain Text Search
    var text = text.replace(/&/g, "&amp;").
    replace(/</g, "&lt;").
    replace(/>/g, "&gt;");

    // 2: Line Breaks
    text = text.replace(/\r\n?|\n/g, "<br>");

    // 3: Paragraphs
    text = text.replace(/<br>\s*<br>/g, "</p><p>");

    // 4: Wrap in Paragraph Tags
    text = "<p>" + text + "</p>";

    return text;
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
			if (result[0].html) {
								result[0].html = text2HTML(result[0].html).replace('<br>','</p><p>');

			} else {
				result[0].html = `<h2>There's more to this story </h2><h3>But it's a member-only story. Subscribe today to unlock it and more...</h3><div class="hero-offer-details style-scope caas-hero-offer-details-base">
				<br>
				<p class="hero-offer-title style-scope caas-hero-offer-details-base">FULL DIGITAL ACCESS, <em>$1 PER WEEK FOR THE FIRST 12 WEEKS </em></p>
			<template is="dom-if" class="style-scope caas-hero-offer-details-base"></template>
				<span class="hero-offer-conditions style-scope caas-hero-offer-details-base">Min. Cost $4. Conditions apply</span>
			<template is="dom-if" class="style-scope caas-hero-offer-details-base"></template>
			<div class="hero-offer-features-content style-scope caas-hero-offer-details-base">
				<template is="dom-if" class="style-scope caas-hero-offer-details-base"></template>
				<div class="hero-offer-features-item hero-offer-features-item-details style-scope caas-hero-offer-details-base">
						<ul class="style-scope caas-hero-offer-details-base">
								<li class="style-scope caas-hero-offer-details-base">Unlimited Digital Access</li>
								<li class="style-scope caas-hero-offer-details-base">Exclusive Rewards</li>
						</ul>
					<template is="dom-if" class="style-scope caas-hero-offer-details-base"></template>
					<br><br>
					<div class="hero-button-container style-scope caas-hero-offer-details-base">
						<button class="subscribe button style-scope caas-hero-offer-details-base">Subscribe Now</button>
						<button type="button" class="other button style-scope caas-hero-offer-details-base">View Other Offers</button>
					</div>
				</div>
			</div>
		</div>`
			}

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
