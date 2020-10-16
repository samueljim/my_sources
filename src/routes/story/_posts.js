// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
	title: 'What is a meme?',
	category: 'Politics',
	author: 'David Dickson',
	image: "https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/0203417001453934488_filepicker-1170x780.jpg",
	slug: 'what-is-a-meme',
    html: `
			<p>An internet meme, more commonly known simply as a meme (/miːm/ MEEM), is a type of meme that is spread via the Internet, often through social media platforms and especially for humorous purposes. Memes can spread from person to person via social networks, blogs, direct email, or news sources. They may relate to various existing Internet cultures or subcultures, often created or spread on various websites. One hallmark of internet memes is the appropriation of a part of broader culture, for instance by giving words and phrases intentional misspellings (such as lolcats) or using incorrect grammar (such as doge); in particular, many memes utilize popular culture (especially in image macros of other media), although this can lead to issues with copyright. Instant communication on the internet facilitates word of mouth transmission, resulting in fads and sensations that tend to grow rapidly. An example of such a fad is that of planking, the act of posting a photo of people lying down in public places; putting the photo online brings attention to the fad and allows it to reach a high number of people in a short amount of time. “Dank” memes have emerged as a new form of image-macros, and many modern memes take on inclusion of surreal, nonsensical, and non-sequitur themes.			</p>

			<p>Colloquially, the terms meme and internet meme may refer to pieces of media that are designed in the format of true internet memes, but which are not themselves intended to spread or evolve, and which have recently become umbrella terms referring to any piece of quickly-consumed comedic or relatable content. What is considered a meme may vary across different communities on the internet and is subject to change over time: traditionally, memes consisted of a combination of image macros and a concept or catchphrase, but the concept has since become broader and more multi-faceted, evolving to include more elaborate structures such as challenges, GIFs, videos, and viral sensations.

			</p>
		`,
  }
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
