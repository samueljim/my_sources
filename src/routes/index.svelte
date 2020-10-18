<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`index.json`).then(r => r.json()).then(posts => {
			return { featured: posts[0], posts: [posts[1], posts[2], posts[3], posts[4],] };
		});
	}
</script>

<script>
	export let featured;
	export let posts;
</script>
<svelte:head>
	<title>{featured.title}</title>

	<meta name="title" content="{featured.title}">
	<meta name="description" content="{featured.description}">
	<meta name="keywords" content="{featured.tags ? featured.tags.join(',') : 'news'}">
   <meta name="author" content="{featured.author}">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="article">
   <meta property="og:title" content="{featured.title}" />
	<meta property="og:description" content="{featured.description}">
	<meta property="og:image" content="{featured.image}">
	<meta property="og:locale" content="en_AU">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:description" content="{featured.description}">
	<meta property="twitter:image" content="{featured.image}">

</svelte:head>
<div class="site-content container" id="content">
	<aside class="widget widget-featured-posts-block" id="widget-featured-posts-block-2">
		<div class="tm_fpblock__wrapper">
			<div class="tm_fpblock__item tm_fpblock__item-2 post-1818 tm_fpblock__item-small" style="height: 323.5px;     width: 100%;">
				<div class="tm_fpblock__item__preview" style="background-image: url('{featured.image}'); height: 323.5px;     width: 100%;"><img src="{featured.image}" alt="tempfile" style="height: 323.5px;     width: 100%;"></div>
						<div class="tm_fpblock__item__categories"> <a href="/{featured.category.toLowerCase()}" class="tm_fpblock__item__category">{featured.category}</a> </div>	
				<div class="tm_fpblock__item__description">
					<a class="tm_fpblock__item__title" style="font-size: 1.6em;" href="/{featured.category.toLowerCase()}/{featured.slug}">{featured.title}</a>		
					<a class="tm_fpblock__item__date" href="/{featured.category.toLowerCase()}/{featured.slug}"><i class="material-icons dp18">access_time</i> {featured.date}</a>		
				</div>
			</div>
			{#each posts as post}
			<div class="tm_fpblock__item tm_fpblock__item-2 post-1818 tm_fpblock__item-small" style="height: 223.5px;">
				<div class="tm_fpblock__item__preview" style="background-image: url('{post.image}'); height: 223.5px;"><img src="{post.image}" alt="tempfile" style="height: 223.5px;"></div>
						<div class="tm_fpblock__item__categories"> <a href="/{post.category.toLowerCase()}" class="tm_fpblock__item__category">{post.category}</a> </div>	
				<div class="tm_fpblock__item__description">
					<a class="tm_fpblock__item__title" href="/{post.category.toLowerCase()}/{post.slug}">{post.title}</a>		
					<a class="tm_fpblock__item__date" href="/{post.category.toLowerCase()}/{post.slug}"><i class="material-icons dp18">access_time</i> {post.date}</a>		
				</div>
			</div>
			{/each}
		</div>
	</aside>
</div>