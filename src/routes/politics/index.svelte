<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`politics.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	@media (min-width: 1200px) {
	.post-thumbnail--ultra-small + .post-body-right .entry-title {
		margin-top: 5px;
	}
	}
</style>

<svelte:head>
	<title>Politics news</title>
</svelte:head>


<div id="content" class="site-content container">
	<div class="breadcrumbs">
	   <div class="container--">
		  <div class="breadcrumbs__title"></div>
		  <div class="breadcrumbs__items">
			 <div class="breadcrumbs__content">
				<div class="breadcrumbs__wrap">
				   <div class="breadcrumbs__item"><a href="/" class="breadcrumbs__item-link is-home" rel="home" title="Home">Home</a></div>
				   <div class="breadcrumbs__item">
					  <div class="breadcrumbs__item-sep">/</div>
				   </div>
				   <div class="breadcrumbs__item"><span class="breadcrumbs__item-target">Politics</span></div>
				</div>
			 </div>
		  </div>
		  <div class="clear"></div>
	   </div>
	</div>
	<!-- <div class="container"> -->
	<div class="site-content container">
	   <div class="row">
		  <div id="primary" class="col-xs-12 col-md-8">
			 <main id="main" class="site-main" role="main">
				<header class="page-header">
				   <h1 class="page-title screen-reader-text">Category: Politics</h1>
				</header>
				<!-- .page-header -->
				<h2 class="title-line archive-title">Politics</h2>
				<div class="posts-list posts-list--minimal one-right-sidebar ultra-small">
				   {#each posts as post}
				   <article class="posts-list__item card post-1849 post type-post status-publish format-standard has-post-thumbnail hentry category-politics category-tech tag-tech has-thumb">
					  <div class="post-list__item-content">
						 <figure class="post-thumbnail post-thumbnail--ultra-small ">
							<a href="/politics/{post.slug}" class="post-thumbnail__link post-thumbnail--ultra-small"><img width="150" height="115" src="{post.image}" class="post-thumbnail__img wp-post-image" alt="{post.title}">				
							<div class="post__cats"><a href="/politics" rel="category tag">Politics</a></div>
						 </figure>
						 <!-- .post-thumbnail -->
						 <div class="post-body-right">
							<header class="entry-header">
							   <h5 class="entry-title"><a href="/politics/{post.slug}" rel="bookmark">{post.title}</a></h5>
							</header>
							<!-- .entry-header -->
							<div class="entry-content">
								{post.description}	
							</div>
							<!-- .entry-content -->
							<div class="entry-meta-sharing">
							   <div class="entry-meta">
								  <span class="post-author">by <a class="post-author__link" href="/">{post.author}</a></span>
								  <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="/politics/{post.slug}">{post.date}</a></span><span class="post__comments"><i class="material-icons">chat_bubble_outline</i></span>					
							   </div>
							   <!-- .entry-meta -->
							   <div class="share-btns-main">
								  <i class="material-icons share-main-icon">share</i>
							   </div>
							</div>
							<!-- .entry-meta-sharing -->
							<footer class="entry-footer">
							   <a href="/politics/{post.slug}" class="btn"><span class="btn__text">Read more</span><span class="btn__icon"></span></a>			
							   <div class="share-btns-main">
								  <i class="material-icons share-main-icon">share</i>
							   </div>
							</footer>
							<!-- .entry-footer -->
						 </div>
						 <!-- .post-body-right -->
					  </div>
				   </article>
				   {/each}
				</div>
				<!-- .posts-list -->
			 </main>
			 <!-- #main -->
		  </div>
		  <!-- #primary -->
		  <aside id="sidebar-primary" class="col-xs-12 col-md-4 sidebar-primary widget-area" role="complementary">
			 <aside id="search-4" class="widget widget_search">
				<h4 class="widget-title">News Search</h4>
				<form role="search" method="get" class="search-form" action="https://ld-wp.template-help.com/wordpress_58404_v4/">
				   <label>
				   <span class="screen-reader-text">Search for:</span>
				   <input type="search" class="search-form__field" placeholder="I'm looking for...." value="" name="s" title="Search for:">
				   </label>
				   <button type="submit" class="search-form__submit btn"><span class="search-btn-txt">Search</span><i class="material-icons">search</i></button>
				</form>
			 </aside>
			 <aside id="widget_carousel-2" class="widget king_news widget_carousel">
				<h4 class="widget-title">Carousel</h4>
				<div class="swiper-carousel-container">
				   <div id="swiper-carousel-5f7089efcd7fd" class="king_news-carousel swiper-container swiper-container-horizontal" data-uniq-id="swiper-carousel-5f7089efcd7fd" data-slides-per-view="1" data-slides-per-group="1" data-slides-per-column="1" data-space-between-slides="8" data-duration-speed="500" data-swiper-loop="false" data-free-mode="false" data-grab-cursor="true" data-mouse-wheel="false" style="cursor: grab;">
					  <div class="swiper-wrapper">
						 <article class="swiper-slide post hentry swiper-slide-active" style="width: 410px; margin-right: 8px;">
							<div class="inner">
							   <div class="content-wrapper">
								  <header class="entry-header">
									 <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-18/"><img class="swiper-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/04.10.14_Obama-426x327.jpg" alt=""></a>
									 <div class="post__cats"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/world/">World</a></div>
									 <div class="carousel--inner">
										<div class="entry-content">
										   <h5 class="entry-title"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-18/" rel="bookmark">If Obama Had Ruled Like This in 2009, He’d Be the Reforming...</a></h5>
										</div>
										<footer class="entry-footer">
										   <div class="entry-meta">
											  <span class="post__date">
											  <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-18/">5 years ago</a></span>						</span>
										   </div>
										</footer>
									 </div>
								  </header>
							   </div>
							</div>
						 </article>
						 <article class="swiper-slide post hentry swiper-slide-next" style="width: 410px; margin-right: 8px;">
							<div class="inner">
							   <div class="content-wrapper">
								  <header class="entry-header">
									 <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/"><img class="swiper-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-426x327.jpg" alt=""></a>
									 <div class="post__cats"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/business/">Business</a></div>
									 <div class="carousel--inner">
										<div class="entry-content">
										   <h5 class="entry-title"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/" rel="bookmark">Terrorism concerns get UK tourists opting in to ‘lighter’...</a></h5>
										</div>
										<footer class="entry-footer">
										   <div class="entry-meta">
											  <span class="post__date">
											  <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/">5 years ago</a></span>						</span>
										   </div>
										</footer>
									 </div>
								  </header>
							   </div>
							</div>
						 </article>
						 <article class="swiper-slide post hentry" style="width: 410px; margin-right: 8px;">
							<div class="inner">
							   <div class="content-wrapper">
								  <header class="entry-header">
									 <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/"><img class="swiper-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program-426x327.jpg" alt=""></a>
									 <div class="post__cats"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/business/">Business</a><a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/politics/">Politics</a></div>
									 <div class="carousel--inner">
										<div class="entry-content">
										   <h5 class="entry-title"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/" rel="bookmark">Iran nuclear deal makes country so much richer</a></h5>
										</div>
										<footer class="entry-footer">
										   <div class="entry-meta">
											  <span class="post__date">
											  <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/">5 years ago</a></span>						</span>
										   </div>
										</footer>
									 </div>
								  </header>
							   </div>
							</div>
						 </article>
						 <article class="swiper-slide post hentry" style="width: 410px; margin-right: 8px;">
							<div class="inner">
							   <div class="content-wrapper">
								  <header class="entry-header">
									 <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/"><img class="swiper-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/3312-426x327.jpg" alt=""></a>
									 <div class="post__cats"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/business/">Business</a></div>
									 <div class="carousel--inner">
										<div class="entry-content">
										   <h5 class="entry-title"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/" rel="bookmark">Among 1M refugees, Berlin accepted ISIS terrorists</a></h5>
										</div>
										<footer class="entry-footer">
										   <div class="entry-meta">
											  <span class="post__date">
											  <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/">5 years ago</a></span>						</span>
										   </div>
										</footer>
									 </div>
								  </header>
							   </div>
							</div>
						 </article>
						 <article class="swiper-slide post hentry" style="width: 410px; margin-right: 8px;">
							<div class="inner">
							   <div class="content-wrapper">
								  <header class="entry-header">
									 <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-23/"><img class="swiper-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/IS-flag-426x327.jpg" alt=""></a>
									 <div class="post__cats"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/world/">World</a></div>
									 <div class="carousel--inner">
										<div class="entry-content">
										   <h5 class="entry-title"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-23/" rel="bookmark">Islamic State gets new murders video out</a></h5>
										</div>
										<footer class="entry-footer">
										   <div class="entry-meta">
											  <span class="post__date">
											  <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-23/">5 years ago</a></span>						</span>
										   </div>
										</footer>
									 </div>
								  </header>
							   </div>
							</div>
						 </article>
						 <article class="swiper-slide post hentry" style="width: 410px; margin-right: 8px;">
							<div class="inner">
							   <div class="content-wrapper">
								  <header class="entry-header">
									 <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-24/"><img class="swiper-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/hillary-clinton-has-laid-out-a-sweeping-gun-control-plan-426x327.jpg" alt=""></a>
									 <div class="post__cats"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/world/">World</a></div>
									 <div class="carousel--inner">
										<div class="entry-content">
										   <h5 class="entry-title"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-24/" rel="bookmark">Clinton ‘Loves’ Proposal of Appointing Obama to Supreme Court as POTUS</a></h5>
										</div>
										<footer class="entry-footer">
										   <div class="entry-meta">
											  <span class="post__date">
											  <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-24/">5 years ago</a></span>						</span>
										   </div>
										</footer>
									 </div>
								  </header>
							   </div>
							</div>
						 </article>
						 <article class="swiper-slide post hentry" style="width: 410px; margin-right: 8px;">
							<div class="inner">
							   <div class="content-wrapper">
								  <header class="entry-header">
									 <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-25/"><img class="swiper-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/heatlhcare-penalty-426x327.jpg" alt=""></a>
									 <div class="post__cats"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/world/">World</a></div>
									 <div class="carousel--inner">
										<div class="entry-content">
										   <h5 class="entry-title"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-25/" rel="bookmark">HealthCare.gov closes signups — register or get a penalty</a></h5>
										</div>
										<footer class="entry-footer">
										   <div class="entry-meta">
											  <span class="post__date">
											  <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-25/">5 years ago</a></span>						</span>
										   </div>
										</footer>
									 </div>
								  </header>
							   </div>
							</div>
						 </article>
						 <article class="swiper-slide post hentry" style="width: 410px; margin-right: 8px;">
							<div class="inner">
							   <div class="content-wrapper">
								  <header class="entry-header">
									 <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/"><img class="swiper-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ct-illinois-budget-met-0104-20141231-426x327.jpg" alt=""></a>
									 <div class="post__cats"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/business/">Business</a></div>
									 <div class="carousel--inner">
										<div class="entry-content">
										   <h5 class="entry-title"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/" rel="bookmark">Illinois budget fix: Just leave bills ignored and unpaid</a></h5>
										</div>
										<footer class="entry-footer">
										   <div class="entry-meta">
											  <span class="post__date">
											  <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/">5 years ago</a></span>						</span>
										   </div>
										</footer>
									 </div>
								  </header>
							   </div>
							</div>
						 </article>
					  </div>
					  <div id="swiper-carousel-5f7089efcd7fd-pagination" class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
				   </div>
				   <div id="swiper-carousel-5f7089efcd7fd-next" class="swiper-button-next button-next"><i class="material-icons">navigate_next</i></div>
				   <div id="swiper-carousel-5f7089efcd7fd-prev" class="swiper-button-prev button-prev swiper-button-disabled"><i class="material-icons">navigate_before</i></div>
				</div>
			 </aside>
			 <aside id="king_news_widget_subscribe_follow-2" class="widget king_news widget-subscribe">
				<div class="follow-block">
				   <h4 class="widget-title">Follow us</h4>
				   <div class="follow-block__message">Read our latest news on any of these social networks!</div>
				   <div class="social-list social-list--widget">
					  <ul id="social-list-2" class="social-list__items inline-list">
						 <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-35"><a href="https://twitter.com"><span class="screen-reader-text">Twitter</span></a></li>
						 <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-36"><a href="https://facebook.com"><span class="screen-reader-text">Facebook</span></a></li>
						 <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-37"><a href="https://plus.google.com"><span class="screen-reader-text">Google+</span></a></li>
						 <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-38"><a href="https://www.youtube.com"><span class="screen-reader-text">Youtube</span></a></li>
						 <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-39"><a href="http://rss.com"><span class="screen-reader-text">Rss</span></a></li>
					  </ul>
				   </div>
				</div>
				<div class="subscribe-block">
				   <h4 class="widget-title">Get latest news delivered daily!</h4>
				   <div class="subscribe-block__message">We will send you breaking news right to your inbox</div>
				   <form method="POST" action="" class="subscribe-block__form">
					  <input type="hidden" id="king_news_subscribe" name="king_news_subscribe" value="2f2bd0c13b"><input type="hidden" name="_wp_http_referer" value="/wordpress_58404_v4/category/politics/">
					  <div class="subscribe-block__input-group"><input class="subscribe-block__input" type="email" name="subscribe-mail" value="" placeholder="Your e-mail"><a href="/" class="subscribe-block__submit btn">Subscribe</a></div>
					  <div class="subscribe-block__messages">
						 <div class="subscribe-block__success hidden">You successfully subscribed</div>
						 <div class="subscribe-block__error hidden"></div>
					  </div>
				   </form>
				</div>
			 </aside>
			 <aside id="widget-image-grid-3" class="widget widget-image-grid">
				<h4 class="widget-title">Recent posts</h4>
				<div class="row image_grid_widget-main columns-number-1" style="margin-left:-30px">
				   <div class="widget-image-grid__holder invert col-xs-12 col-md-12 col-lg-12 col-xl-12">
					  <figure class="widget-image-grid__inner" style="margin: 0 0 30px 30px;">
						 <img width="536" height="411" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ap-trump-carson-cruz-536x411.jpg" class="attachment-_tm-thumb-536-411 size-_tm-thumb-536-411 wp-post-image" alt="ap-trump-carson-cruz" srcset="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ap-trump-carson-cruz-536x411.jpg 536w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ap-trump-carson-cruz-238x182.jpg 238w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ap-trump-carson-cruz-150x115.jpg 150w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ap-trump-carson-cruz-337x258.jpg 337w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ap-trump-carson-cruz-426x327.jpg 426w" sizes="(max-width: 536px) 100vw, 536px">		
						 <figcaption class="widget-image-grid__content">
							<div class="post__cats"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/news/" rel="category tag">News</a></div>
							<div></div>
							<div class="widget-image-grid__content-2">
							   <h3 class="widget-image-grid__title">
								  <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-16/">Two Loser Idaho Pot Smugglers Freak ...</a>
							   </h3>
							   <div class="widget-image-grid__footer">
								  <div class="widget-image-grid__footer-meta">
									 <span class="post-author">by <a class="post-author__link" href="/">David Dickson</a></span>            <a class="widget-image-grid__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-16/"><i class="material-icons dp18">access_time</i>5 years ago</a>
								  </div>
								  <div class="share-btns-main">
									 <div class="share-btns__list ">
										<div class="share-btns__item facebook-item"><a class="share-btns__link" href="https://www.facebook.com/sharer/sharer.php?u=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-16/&amp;t=Two Loser Idaho Pot Smugglers Freak Out, Call 911 on Themselves" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><span class="share-btns__label screen-reader-text">Facebook</span></a></div>
										<div class="share-btns__item twitter-item"><a class="share-btns__link" href="https://twitter.com/intent/tweet?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-16/&amp;text=Two Loser Idaho Pot Smugglers Freak Out, Call 911 on Themselves" rel="nofollow" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i><span class="share-btns__label screen-reader-text">Twitter</span></a></div>
										<div class="share-btns__item google-plus-item"><a class="share-btns__link" href="https://plus.google.com/share?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-16/" rel="nofollow" target="_blank" title="Share on Google+"><i class="fa fa-google-plus"></i><span class="share-btns__label screen-reader-text">Google+</span></a></div>
										<div class="share-btns__item linkedin-item"><a class="share-btns__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-16/&amp;title=Two Loser Idaho Pot Smugglers Freak Out, Call 911 on Themselves&amp;summary=When people tell me that our President has delivered his 7th State of the Union speech recently, I always correct their mistake and tell it was eighth, in fact. On February 24, 2009, the start of Barack Obama’s 2nd month in office, he made an extensive speech on then ongoing Great Recession crisis. He tried [&amp;hellip;]&amp;source=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-16/" rel="nofollow" target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i><span class="share-btns__label screen-reader-text">LinkedIn</span></a></div>
										<div class="share-btns__item pinterest-item"><a class="share-btns__link" href="https://www.pinterest.com/pin/create/button/?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-16/&amp;description=Two Loser Idaho Pot Smugglers Freak Out, Call 911 on Themselves&amp;media=https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ap-trump-carson-cruz.jpg" rel="nofollow" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i><span class="share-btns__label screen-reader-text">Pinterest</span></a></div>
									 </div>
									 <i class="material-icons share-main-icon">share</i>
								  </div>
							   </div>
							</div>
						 </figcaption>
					  </figure>
				   </div>
				   <div class="widget-image-grid__holder invert col-xs-12 col-md-12 col-lg-12 col-xl-12">
					  <figure class="widget-image-grid__inner" style="margin: 0 0 30px 30px;">
						 <img width="536" height="411" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/David-Cameron-Getty-v3-536x411.jpg" class="attachment-_tm-thumb-536-411 size-_tm-thumb-536-411 wp-post-image" alt="David-Cameron-Getty-v3" srcset="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/David-Cameron-Getty-v3-536x411.jpg 536w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/David-Cameron-Getty-v3-238x182.jpg 238w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/David-Cameron-Getty-v3-150x115.jpg 150w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/David-Cameron-Getty-v3-337x258.jpg 337w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/David-Cameron-Getty-v3-426x327.jpg 426w" sizes="(max-width: 536px) 100vw, 536px">		
						 <figcaption class="widget-image-grid__content">
							<div class="post__cats"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/news/" rel="category tag">News</a></div>
							<div></div>
							<div class="widget-image-grid__content-2">
							   <h3 class="widget-image-grid__title">
								  <a href="https://ld-wp.template-help.com/wordpress_58404_v4/quote-post/">Quote post</a>
							   </h3>
							   <div class="widget-image-grid__footer">
								  <div class="widget-image-grid__footer-meta">
									 <span class="post-author">by <a class="post-author__link" href="/">admin</a></span>            <a class="widget-image-grid__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/quote-post/"><i class="material-icons dp18">access_time</i>1 day ago</a>
								  </div>
								  <div class="share-btns-main">
									 <div class="share-btns__list ">
										<div class="share-btns__item facebook-item"><a class="share-btns__link" href="https://www.facebook.com/sharer/sharer.php?u=https://ld-wp.template-help.com/wordpress_58404_v4/quote-post/&amp;t=Quote post" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><span class="share-btns__label screen-reader-text">Facebook</span></a></div>
										<div class="share-btns__item twitter-item"><a class="share-btns__link" href="https://twitter.com/intent/tweet?url=https://ld-wp.template-help.com/wordpress_58404_v4/quote-post/&amp;text=Quote post" rel="nofollow" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i><span class="share-btns__label screen-reader-text">Twitter</span></a></div>
										<div class="share-btns__item google-plus-item"><a class="share-btns__link" href="https://plus.google.com/share?url=https://ld-wp.template-help.com/wordpress_58404_v4/quote-post/" rel="nofollow" target="_blank" title="Share on Google+"><i class="fa fa-google-plus"></i><span class="share-btns__label screen-reader-text">Google+</span></a></div>
										<div class="share-btns__item linkedin-item"><a class="share-btns__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ld-wp.template-help.com/wordpress_58404_v4/quote-post/&amp;title=Quote post&amp;summary=If Obama Had Ruled Like This in 2009, He&amp;#8217;d Be the Reforming President We All Hoped For Brian Williamson When people tell me that our President has delivered his 7th State of the Union speech recently, I always correct their mistake and tell it was eighth, in fact. On February 24, 2009, the start of [&amp;hellip;]&amp;source=https://ld-wp.template-help.com/wordpress_58404_v4/quote-post/" rel="nofollow" target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i><span class="share-btns__label screen-reader-text">LinkedIn</span></a></div>
										<div class="share-btns__item pinterest-item"><a class="share-btns__link" href="https://www.pinterest.com/pin/create/button/?url=https://ld-wp.template-help.com/wordpress_58404_v4/quote-post/&amp;description=Quote post&amp;media=https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/David-Cameron-Getty-v3.jpg" rel="nofollow" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i><span class="share-btns__label screen-reader-text">Pinterest</span></a></div>
									 </div>
									 <i class="material-icons share-main-icon">share</i>
								  </div>
							   </div>
							</div>
						 </figcaption>
					  </figure>
				   </div>
				   <div class="widget-image-grid__holder invert col-xs-12 col-md-12 col-lg-12 col-xl-12">
					  <figure class="widget-image-grid__inner" style="margin: 0 0 30px 30px;">
						 <img width="536" height="411" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-536x411.jpg" class="attachment-_tm-thumb-536-411 size-_tm-thumb-536-411 wp-post-image" alt="london22" srcset="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-536x411.jpg 536w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-238x182.jpg 238w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-150x115.jpg 150w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-337x258.jpg 337w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-426x327.jpg 426w" sizes="(max-width: 536px) 100vw, 536px">		
						 <figcaption class="widget-image-grid__content">
							<div class="post__cats"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/business/" rel="category tag">Business</a></div>
							<div></div>
							<div class="widget-image-grid__content-2">
							   <h3 class="widget-image-grid__title">
								  <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/">Terrorism concerns get UK tourists opting ...</a>
							   </h3>
							   <div class="widget-image-grid__footer">
								  <div class="widget-image-grid__footer-meta">
									 <span class="post-author">by <a class="post-author__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/author/admin/">admin</a></span>            <a class="widget-image-grid__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/"><i class="material-icons dp18">access_time</i>5 years ago</a>
								  </div>
								  <div class="share-btns-main">
									 <div class="share-btns__list ">
										<div class="share-btns__item facebook-item"><a class="share-btns__link" href="https://www.facebook.com/sharer/sharer.php?u=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/&amp;t=Terrorism concerns get UK tourists opting in to &amp;#8216;lighter&amp;#8217; holiday spots" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><span class="share-btns__label screen-reader-text">Facebook</span></a></div>
										<div class="share-btns__item twitter-item"><a class="share-btns__link" href="https://twitter.com/intent/tweet?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/&amp;text=Terrorism concerns get UK tourists opting in to &amp;#8216;lighter&amp;#8217; holiday spots" rel="nofollow" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i><span class="share-btns__label screen-reader-text">Twitter</span></a></div>
										<div class="share-btns__item google-plus-item"><a class="share-btns__link" href="https://plus.google.com/share?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/" rel="nofollow" target="_blank" title="Share on Google+"><i class="fa fa-google-plus"></i><span class="share-btns__label screen-reader-text">Google+</span></a></div>
										<div class="share-btns__item linkedin-item"><a class="share-btns__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/&amp;title=Terrorism concerns get UK tourists opting in to &amp;#8216;lighter&amp;#8217; holiday spots&amp;summary=When people tell me that our President has delivered his 7th State of the Union speech recently, I always correct their mistake and tell it was eighth, in fact. On February 24, 2009, the start of Barack Obama’s 2nd month in office, he made an extensive speech on then ongoing Great Recession crisis. He tried [&amp;hellip;]&amp;source=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/" rel="nofollow" target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i><span class="share-btns__label screen-reader-text">LinkedIn</span></a></div>
										<div class="share-btns__item pinterest-item"><a class="share-btns__link" href="https://www.pinterest.com/pin/create/button/?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/&amp;description=Terrorism concerns get UK tourists opting in to &amp;#8216;lighter&amp;#8217; holiday spots&amp;media=https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22.jpg" rel="nofollow" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i><span class="share-btns__label screen-reader-text">Pinterest</span></a></div>
									 </div>
									 <i class="material-icons share-main-icon">share</i>
								  </div>
							   </div>
							</div>
						 </figcaption>
					  </figure>
				   </div>
				   <div class="widget-image-grid__holder invert col-xs-12 col-md-12 col-lg-12 col-xl-12">
					  <figure class="widget-image-grid__inner" style="margin: 0 0 30px 30px;">
						 <img width="536" height="411" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program-536x411.jpg" class="attachment-_tm-thumb-536-411 size-_tm-thumb-536-411 wp-post-image" alt="Negotiations_about_Iranian_Nuclear_Program" srcset="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program-536x411.jpg 536w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program-238x182.jpg 238w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program-150x115.jpg 150w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program-337x258.jpg 337w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program-426x327.jpg 426w" sizes="(max-width: 536px) 100vw, 536px">		
						 <figcaption class="widget-image-grid__content">
							<div class="post__cats"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/business/" rel="category tag">Business</a> <a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/politics/" rel="category tag">Politics</a></div>
							<div></div>
							<div class="widget-image-grid__content-2">
							   <h3 class="widget-image-grid__title">
								  <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/">Iran nuclear deal makes country so ...</a>
							   </h3>
							   <div class="widget-image-grid__footer">
								  <div class="widget-image-grid__footer-meta">
									 <span class="post-author">by <a class="post-author__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/author/admin/">admin</a></span>            <a class="widget-image-grid__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/"><i class="material-icons dp18">access_time</i>5 years ago</a>
								  </div>
								  <div class="share-btns-main">
									 <div class="share-btns__list ">
										<div class="share-btns__item facebook-item"><a class="share-btns__link" href="https://www.facebook.com/sharer/sharer.php?u=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/&amp;t=Iran nuclear deal makes country so much richer" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><span class="share-btns__label screen-reader-text">Facebook</span></a></div>
										<div class="share-btns__item twitter-item"><a class="share-btns__link" href="https://twitter.com/intent/tweet?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/&amp;text=Iran nuclear deal makes country so much richer" rel="nofollow" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i><span class="share-btns__label screen-reader-text">Twitter</span></a></div>
										<div class="share-btns__item google-plus-item"><a class="share-btns__link" href="https://plus.google.com/share?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/" rel="nofollow" target="_blank" title="Share on Google+"><i class="fa fa-google-plus"></i><span class="share-btns__label screen-reader-text">Google+</span></a></div>
										<div class="share-btns__item linkedin-item"><a class="share-btns__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/&amp;title=Iran nuclear deal makes country so much richer&amp;summary=When people tell me that our President has delivered his 7th State of the Union speech recently, I always correct their mistake and tell it was eighth, in fact. On February 24, 2009, the start of Barack Obama’s 2nd month in office, he made an extensive speech on then ongoing Great Recession crisis. He tried [&amp;hellip;]&amp;source=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/" rel="nofollow" target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i><span class="share-btns__label screen-reader-text">LinkedIn</span></a></div>
										<div class="share-btns__item pinterest-item"><a class="share-btns__link" href="https://www.pinterest.com/pin/create/button/?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/&amp;description=Iran nuclear deal makes country so much richer&amp;media=https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program.jpg" rel="nofollow" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i><span class="share-btns__label screen-reader-text">Pinterest</span></a></div>
									 </div>
									 <i class="material-icons share-main-icon">share</i>
								  </div>
							   </div>
							</div>
						 </figcaption>
					  </figure>
				   </div>
				</div>
			 </aside>
			 <aside id="recent-comments-2" class="widget widget_recent_comments">
				<h4 class="widget-title">Recent comments</h4>
				<ul id="recentcomments">
				   <li class="recentcomments"><span class="comment-author-link">admin</span> on <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/#comment-69">Among 1M refugees, Berlin accepted ISIS terrorists</a></li>
				   <li class="recentcomments"><span class="comment-author-link">admin</span> on <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/#comment-68">Terrorism concerns get UK tourists opting in to ‘lighter’ holiday spots</a></li>
				   <li class="recentcomments"><span class="comment-author-link">admin</span> on <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-18/#comment-67">If Obama Had Ruled Like This in 2009, He’d Be the Reforming President We All Hoped For</a></li>
				</ul>
			 </aside>
			 <aside id="widget-easy-twitter-feed-widget-kamn-2" class="widget widget-easy-twitter-feed-widget-kamn">
				<div class="widget-easy-twitter-feed-widget-global-wrapper">
				   <div class="widget-easy-twitter-feed-widget-container">
					  <div class="row">
						 <div class="col-lg-12">
							<h4 class="widget-title"><span>Twitter Widget</span></h4>
						 </div>
					  </div>
					  <div class="widget-easy-twitter-feed-widget-row">
						 <div class="widget-easy-twitter-feed-widget-col">
							<div class="twitterwidget widget-easy-twitter-feed-widget-kamn-2">
							   <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="twitter-timeline twitter-timeline-rendered" style="position: static; visibility: visible; display: inline-block; width: 520px; height: 250px; padding: 0px; border: none; max-width: 100%; min-width: 180px; margin-top: 0px; margin-bottom: 0px; min-height: 200px;" data-widget-id="profile:twitterdev" title="Twitter Timeline"></iframe>
							</div>
						 </div>
					  </div>
				   </div>
				   <!-- End .widget-global-wrapper -->
				</div>
			 </aside>
			 <aside id="calendar-2" class="widget widget_calendar">
				<h4 class="widget-title">Calendar</h4>
				<div id="calendar_wrap" class="calendar_wrap">
				   <table id="wp-calendar">
					  <caption>September 2020</caption>
					  <thead>
						 <tr>
							<th scope="col" title="Monday">M</th>
							<th scope="col" title="Tuesday">T</th>
							<th scope="col" title="Wednesday">W</th>
							<th scope="col" title="Thursday">T</th>
							<th scope="col" title="Friday">F</th>
							<th scope="col" title="Saturday">S</th>
							<th scope="col" title="Sunday">S</th>
						 </tr>
					  </thead>
					  <tfoot>
						 <tr>
							<td colspan="3" id="prev"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/2016/02/">« Feb</a></td>
							<td class="pad">&nbsp;</td>
							<td colspan="3" id="next" class="pad">&nbsp;</td>
						 </tr>
					  </tfoot>
					  <tbody>
						 <tr>
							<td colspan="1" class="pad">&nbsp;</td>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
							<td>6</td>
						 </tr>
						 <tr>
							<td>7</td>
							<td>8</td>
							<td>9</td>
							<td>10</td>
							<td>11</td>
							<td>12</td>
							<td>13</td>
						 </tr>
						 <tr>
							<td>14</td>
							<td>15</td>
							<td>16</td>
							<td>17</td>
							<td>18</td>
							<td>19</td>
							<td>20</td>
						 </tr>
						 <tr>
							<td>21</td>
							<td>22</td>
							<td>23</td>
							<td>24</td>
							<td>25</td>
							<td>26</td>
							<td id="today">27</td>
						 </tr>
						 <tr>
							<td>28</td>
							<td>29</td>
							<td>30</td>
							<td class="pad" colspan="4">&nbsp;</td>
						 </tr>
					  </tbody>
				   </table>
				</div>
			 </aside>
			 <aside id="widget_news_smart_box-7" class="widget king_news widget_news_smart_box">
				<h4 class="widget-title">News Smart Box</h4>
				<div class="news-smart-box">
				   <div id="news-smart-box-5f7089efdedca" class="news-smart-box__instance layout_type_1" data-uniq-id="news-smart-box-5f7089efdedca">
					  <div class="news-smart-box__navigation">
						 <div class="current-term">
							<span>Business</span>
							<div class="nsb-spinner">
							   <div class="double-bounce-1"></div>
							   <div class="double-bounce-2"></div>
							</div>
						 </div>
						 <div class="clear"></div>
					  </div>
					  <div class="news-smart-box__wrapper">
						 <div class="news-smart-box__listing">
							<div class="row">
							   <article class="post col-xs-12 col-sm-6 col-md-6 full-type post-item-0">
								  <div class="inner widget-new-smart-inner-big-before-content">
									 <figure class="widget-new-smart-main">
										<a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/"><img class="smart-box-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-536x411.jpg" alt=""></a>
										<figcaption>
										   <div class="post__cats"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/category/business/">Business</a></div>
										   <div></div>
										   <div class="widget-new-smart__footer">
											  <h3 class="widget-new-smart__title">
												 <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/">Terrorism concerns get UK tourists…</a>				
											  </h3>
											  <div class="widget-new-smart__footer-2">
												 <span class="widget-new-smart__post__date">
												 <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/">5 years ago</a></span>					</span>
												 <div class="share-btns-main">
													<div class="share-btns__list ">
													   <div class="share-btns__item facebook-item"><a class="share-btns__link" href="https://www.facebook.com/sharer/sharer.php?u=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/&amp;t=Terrorism concerns get UK tourists opting in to &amp;#8216;lighter&amp;#8217; holiday spots" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><span class="share-btns__label screen-reader-text">Facebook</span></a></div>
													   <div class="share-btns__item twitter-item"><a class="share-btns__link" href="https://twitter.com/intent/tweet?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/&amp;text=Terrorism concerns get UK tourists opting in to &amp;#8216;lighter&amp;#8217; holiday spots" rel="nofollow" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i><span class="share-btns__label screen-reader-text">Twitter</span></a></div>
													   <div class="share-btns__item google-plus-item"><a class="share-btns__link" href="https://plus.google.com/share?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/" rel="nofollow" target="_blank" title="Share on Google+"><i class="fa fa-google-plus"></i><span class="share-btns__label screen-reader-text">Google+</span></a></div>
													   <div class="share-btns__item linkedin-item"><a class="share-btns__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/&amp;title=Terrorism concerns get UK tourists opting in to &amp;#8216;lighter&amp;#8217; holiday spots&amp;summary=When people tell me that our President has delivered his 7th State of the Union speech recently, I always correct their mistake and tell it was eighth, in fact. On February 24, 2009, the start of Barack Obama’s 2nd month in office, he made an extensive speech on then ongoing Great Recession crisis. He tried [&amp;hellip;]&amp;source=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/" rel="nofollow" target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i><span class="share-btns__label screen-reader-text">LinkedIn</span></a></div>
													   <div class="share-btns__item pinterest-item"><a class="share-btns__link" href="https://www.pinterest.com/pin/create/button/?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/&amp;description=Terrorism concerns get UK tourists opting in to &amp;#8216;lighter&amp;#8217; holiday spots&amp;media=https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22.jpg" rel="nofollow" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i><span class="share-btns__label screen-reader-text">Pinterest</span></a></div>
													</div>
													<i class="material-icons share-main-icon">share</i>
												 </div>
											  </div>
										   </div>
										</figcaption>
									 </figure>
								  </div>
								  <div class="inner widget-new-smart-inner-big-after-content">
									 <div class="inner">
										<header class="entry-header">
										   <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/"><img class="smart-box-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-536x411.jpg" alt=""></a>		
										</header>
										<div class="entry-content">
										   <h3 class="widget-new-smart__title widget-new-smart__title-small">
											  <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/">Terrorism concerns get UK tourists…</a>			
										   </h3>
										   <div class="entry-meta-sharing">
											  <div class="entry-meta">
												 <span class="post-author">by <a class="post-author__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/author/admin/">admin</a></span>
												 <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/">5 years ago</a></span><span class="post__comments"><i class="material-icons">chat_bubble_outline</i><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/#comments" class="post-comments__link">3 comments</a></span>					
											  </div>
											  <!-- .entry-meta -->
										   </div>
										   <!-- .entry-meta-sharing -->
										   <p>When people tell me that our President has delivered his 7th State of the Union speech recently, I always correct their mistake and tell it was eighth, in fact. On February 24, 2009, the start of Barack Obama’s 2nd month in office, he made an extensive speech on then ongoing Great Recession crisis. He tried to show what his personal vision for a path out was and why it was aligned with a $787 billion stimulus law that was passed that same day. Also, Mr. President talked foreign politics on that same occasion. He explained how well he will succeed…</p>
										</div>
										<footer class="entry-footer">
										   <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/" class="btn"><span class="btn__text">Read more</span><span class="btn__icon"></span></a>				
										   <div class="share-btns-main">
											  <div class="share-btns__list ">
												 <div class="share-btns__item facebook-item"><a class="share-btns__link" href="https://www.facebook.com/sharer/sharer.php?u=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/&amp;t=Terrorism concerns get UK tourists opting in to &amp;#8216;lighter&amp;#8217; holiday spots" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><span class="share-btns__label screen-reader-text">Facebook</span></a></div>
												 <div class="share-btns__item twitter-item"><a class="share-btns__link" href="https://twitter.com/intent/tweet?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/&amp;text=Terrorism concerns get UK tourists opting in to &amp;#8216;lighter&amp;#8217; holiday spots" rel="nofollow" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i><span class="share-btns__label screen-reader-text">Twitter</span></a></div>
												 <div class="share-btns__item google-plus-item"><a class="share-btns__link" href="https://plus.google.com/share?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/" rel="nofollow" target="_blank" title="Share on Google+"><i class="fa fa-google-plus"></i><span class="share-btns__label screen-reader-text">Google+</span></a></div>
												 <div class="share-btns__item linkedin-item"><a class="share-btns__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/&amp;title=Terrorism concerns get UK tourists opting in to &amp;#8216;lighter&amp;#8217; holiday spots&amp;summary=When people tell me that our President has delivered his 7th State of the Union speech recently, I always correct their mistake and tell it was eighth, in fact. On February 24, 2009, the start of Barack Obama’s 2nd month in office, he made an extensive speech on then ongoing Great Recession crisis. He tried [&amp;hellip;]&amp;source=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/" rel="nofollow" target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i><span class="share-btns__label screen-reader-text">LinkedIn</span></a></div>
												 <div class="share-btns__item pinterest-item"><a class="share-btns__link" href="https://www.pinterest.com/pin/create/button/?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/&amp;description=Terrorism concerns get UK tourists opting in to &amp;#8216;lighter&amp;#8217; holiday spots&amp;media=https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22.jpg" rel="nofollow" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i><span class="share-btns__label screen-reader-text">Pinterest</span></a></div>
											  </div>
											  <i class="material-icons share-main-icon">share</i>
										   </div>
										</footer>
										<!-- .entry-footer -->
									 </div>
								  </div>
							   </article>
							   <article class="post col-xs-12 col-sm-6 col-md-6 mini-type post-item-1">
								  <div class="inner">
									 <header class="entry-header">
										<a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/"><img class="smart-box-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program-536x411.jpg" alt=""></a>	
									 </header>
									 <div class="entry-content">
										<h5 class="widget-new-smart__title widget-new-smart__title-small">
										   <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/">Iran nuclear deal makes country…</a>		
										</h5>
										<p class="post__excerpt">When people tell me that our President has delivered his 7th State of the Union…</p>
										<div class="entry-meta">
										   <div class="meta-inner">
											  <span class="post__date">
											  <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/">5 years ago</a></span>				</span>
											  <span class="post__comments"><i class="material-icons">chat_bubble_outline</i><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/#respond" class="post-comments__link">Leave a comment</a></span>
										   </div>
										   <div class="share-btns-main">
											  <div class="share-btns__list ">
												 <div class="share-btns__item facebook-item"><a class="share-btns__link" href="https://www.facebook.com/sharer/sharer.php?u=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/&amp;t=Iran nuclear deal makes country so much richer" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><span class="share-btns__label screen-reader-text">Facebook</span></a></div>
												 <div class="share-btns__item twitter-item"><a class="share-btns__link" href="https://twitter.com/intent/tweet?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/&amp;text=Iran nuclear deal makes country so much richer" rel="nofollow" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i><span class="share-btns__label screen-reader-text">Twitter</span></a></div>
												 <div class="share-btns__item google-plus-item"><a class="share-btns__link" href="https://plus.google.com/share?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/" rel="nofollow" target="_blank" title="Share on Google+"><i class="fa fa-google-plus"></i><span class="share-btns__label screen-reader-text">Google+</span></a></div>
												 <div class="share-btns__item linkedin-item"><a class="share-btns__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/&amp;title=Iran nuclear deal makes country so much richer&amp;summary=When people tell me that our President has delivered his 7th State of the Union speech recently, I always correct their mistake and tell it was eighth, in fact. On February 24, 2009, the start of Barack Obama’s 2nd month in office, he made an extensive speech on then ongoing Great Recession crisis. He tried [&amp;hellip;]&amp;source=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/" rel="nofollow" target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i><span class="share-btns__label screen-reader-text">LinkedIn</span></a></div>
												 <div class="share-btns__item pinterest-item"><a class="share-btns__link" href="https://www.pinterest.com/pin/create/button/?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/&amp;description=Iran nuclear deal makes country so much richer&amp;media=https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program.jpg" rel="nofollow" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i><span class="share-btns__label screen-reader-text">Pinterest</span></a></div>
											  </div>
											  <i class="material-icons share-main-icon">share</i>
										   </div>
										</div>
									 </div>
									 <footer class="entry-footer"></footer>
								  </div>
							   </article>
							   <article class="post col-xs-12 col-sm-6 col-md-6 mini-type post-item-2">
								  <div class="inner">
									 <header class="entry-header">
										<a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/"><img class="smart-box-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/3312-536x411.jpg" alt=""></a>	
									 </header>
									 <div class="entry-content">
										<h5 class="widget-new-smart__title widget-new-smart__title-small">
										   <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/">Among 1M refugees, Berlin accepted…</a>		
										</h5>
										<p class="post__excerpt">When people tell me that our President has delivered his 7th State of the Union…</p>
										<div class="entry-meta">
										   <div class="meta-inner">
											  <span class="post__date">
											  <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/">5 years ago</a></span>				</span>
											  <span class="post__comments"><i class="material-icons">chat_bubble_outline</i><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/#comments" class="post-comments__link">1 comment</a></span>
										   </div>
										   <div class="share-btns-main">
											  <div class="share-btns__list ">
												 <div class="share-btns__item facebook-item"><a class="share-btns__link" href="https://www.facebook.com/sharer/sharer.php?u=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/&amp;t=Among 1M refugees, Berlin accepted ISIS terrorists" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><span class="share-btns__label screen-reader-text">Facebook</span></a></div>
												 <div class="share-btns__item twitter-item"><a class="share-btns__link" href="https://twitter.com/intent/tweet?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/&amp;text=Among 1M refugees, Berlin accepted ISIS terrorists" rel="nofollow" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i><span class="share-btns__label screen-reader-text">Twitter</span></a></div>
												 <div class="share-btns__item google-plus-item"><a class="share-btns__link" href="https://plus.google.com/share?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/" rel="nofollow" target="_blank" title="Share on Google+"><i class="fa fa-google-plus"></i><span class="share-btns__label screen-reader-text">Google+</span></a></div>
												 <div class="share-btns__item linkedin-item"><a class="share-btns__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/&amp;title=Among 1M refugees, Berlin accepted ISIS terrorists&amp;summary=When people tell me that our President has delivered his 7th State of the Union speech recently, I always correct their mistake and tell it was eighth, in fact. On February 24, 2009, the start of Barack Obama’s 2nd month in office, he made an extensive speech on then ongoing Great Recession crisis. He tried [&amp;hellip;]&amp;source=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/" rel="nofollow" target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i><span class="share-btns__label screen-reader-text">LinkedIn</span></a></div>
												 <div class="share-btns__item pinterest-item"><a class="share-btns__link" href="https://www.pinterest.com/pin/create/button/?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/&amp;description=Among 1M refugees, Berlin accepted ISIS terrorists&amp;media=https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/3312.jpg" rel="nofollow" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i><span class="share-btns__label screen-reader-text">Pinterest</span></a></div>
											  </div>
											  <i class="material-icons share-main-icon">share</i>
										   </div>
										</div>
									 </div>
									 <footer class="entry-footer"></footer>
								  </div>
							   </article>
							   <article class="post col-xs-12 col-sm-6 col-md-6 mini-type post-item-3">
								  <div class="inner">
									 <header class="entry-header">
										<a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/"><img class="smart-box-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ct-illinois-budget-met-0104-20141231-536x411.jpg" alt=""></a>	
									 </header>
									 <div class="entry-content">
										<h5 class="widget-new-smart__title widget-new-smart__title-small">
										   <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/">Illinois budget fix: Just leave…</a>		
										</h5>
										<p class="post__excerpt">The state of Illinois has found a workaround for a multibillion-dollar budget gap: Just don’t…</p>
										<div class="entry-meta">
										   <div class="meta-inner">
											  <span class="post__date">
											  <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/">5 years ago</a></span>				</span>
											  <span class="post__comments"><i class="material-icons">chat_bubble_outline</i><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/#respond" class="post-comments__link">Leave a comment</a></span>
										   </div>
										   <div class="share-btns-main">
											  <div class="share-btns__list ">
												 <div class="share-btns__item facebook-item"><a class="share-btns__link" href="https://www.facebook.com/sharer/sharer.php?u=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/&amp;t=Illinois budget fix: Just leave bills ignored and unpaid" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><span class="share-btns__label screen-reader-text">Facebook</span></a></div>
												 <div class="share-btns__item twitter-item"><a class="share-btns__link" href="https://twitter.com/intent/tweet?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/&amp;text=Illinois budget fix: Just leave bills ignored and unpaid" rel="nofollow" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i><span class="share-btns__label screen-reader-text">Twitter</span></a></div>
												 <div class="share-btns__item google-plus-item"><a class="share-btns__link" href="https://plus.google.com/share?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/" rel="nofollow" target="_blank" title="Share on Google+"><i class="fa fa-google-plus"></i><span class="share-btns__label screen-reader-text">Google+</span></a></div>
												 <div class="share-btns__item linkedin-item"><a class="share-btns__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/&amp;title=Illinois budget fix: Just leave bills ignored and unpaid&amp;summary=The state of Illinois has found a workaround for a multibillion-dollar budget gap: Just don&amp;#8217;t pay $6 billion of your bills. When people tell me that our President has delivered his 7th State of the Union speech recently, I always correct their mistake and tell it was eighth, in fact. On February 24, 2009, the [&amp;hellip;]&amp;source=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/" rel="nofollow" target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i><span class="share-btns__label screen-reader-text">LinkedIn</span></a></div>
												 <div class="share-btns__item pinterest-item"><a class="share-btns__link" href="https://www.pinterest.com/pin/create/button/?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/&amp;description=Illinois budget fix: Just leave bills ignored and unpaid&amp;media=https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ct-illinois-budget-met-0104-20141231.jpg" rel="nofollow" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i><span class="share-btns__label screen-reader-text">Pinterest</span></a></div>
											  </div>
											  <i class="material-icons share-main-icon">share</i>
										   </div>
										</div>
									 </div>
									 <footer class="entry-footer"></footer>
								  </div>
							   </article>
							   <article class="post col-xs-12 col-sm-6 col-md-6 mini-type post-item-4">
								  <div class="inner">
									 <header class="entry-header">
										<a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-26/"><img class="smart-box-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Luftsana-Airline-Germany-536x411.jpg" alt=""></a>	
									 </header>
									 <div class="entry-content">
										<h5 class="widget-new-smart__title widget-new-smart__title-small">
										   <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-26/">LA flight emergently lands as…</a>		
										</h5>
										<p class="post__excerpt">People who don’t sign up for insurance by Sunday face a potential penalty of at…</p>
										<div class="entry-meta">
										   <div class="meta-inner">
											  <span class="post__date">
											  <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-26/">5 years ago</a></span>				</span>
											  <span class="post__comments"><i class="material-icons">chat_bubble_outline</i><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-26/#respond" class="post-comments__link">Leave a comment</a></span>
										   </div>
										   <div class="share-btns-main">
											  <div class="share-btns__list ">
												 <div class="share-btns__item facebook-item"><a class="share-btns__link" href="https://www.facebook.com/sharer/sharer.php?u=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-26/&amp;t=LA flight emergently lands as 6 onboard fall ill" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><span class="share-btns__label screen-reader-text">Facebook</span></a></div>
												 <div class="share-btns__item twitter-item"><a class="share-btns__link" href="https://twitter.com/intent/tweet?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-26/&amp;text=LA flight emergently lands as 6 onboard fall ill" rel="nofollow" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i><span class="share-btns__label screen-reader-text">Twitter</span></a></div>
												 <div class="share-btns__item google-plus-item"><a class="share-btns__link" href="https://plus.google.com/share?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-26/" rel="nofollow" target="_blank" title="Share on Google+"><i class="fa fa-google-plus"></i><span class="share-btns__label screen-reader-text">Google+</span></a></div>
												 <div class="share-btns__item linkedin-item"><a class="share-btns__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-26/&amp;title=LA flight emergently lands as 6 onboard fall ill&amp;summary=People who don&amp;#8217;t sign up for insurance by Sunday face a potential penalty of at least $695 When people tell me that our President has delivered his 7th State of the Union speech recently, I always correct their mistake and tell it was eighth, in fact. On February 24, 2009, the start of Barack Obama’s [&amp;hellip;]&amp;source=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-26/" rel="nofollow" target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i><span class="share-btns__label screen-reader-text">LinkedIn</span></a></div>
												 <div class="share-btns__item pinterest-item"><a class="share-btns__link" href="https://www.pinterest.com/pin/create/button/?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-26/&amp;description=LA flight emergently lands as 6 onboard fall ill&amp;media=https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Luftsana-Airline-Germany.jpg" rel="nofollow" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i><span class="share-btns__label screen-reader-text">Pinterest</span></a></div>
											  </div>
											  <i class="material-icons share-main-icon">share</i>
										   </div>
										</div>
									 </div>
									 <footer class="entry-footer"></footer>
								  </div>
							   </article>
							   <article class="post col-xs-12 col-sm-6 col-md-6 mini-type post-item-5">
								  <div class="inner">
									 <header class="entry-header">
										<a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/post-twitter-format/"><img class="smart-box-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/spt-16x9-vince-young-100121-536x411.jpg" alt=""></a>	
									 </header>
									 <div class="entry-content">
										<h5 class="widget-new-smart__title widget-new-smart__title-small">
										   <a href="https://ld-wp.template-help.com/wordpress_58404_v4/post-twitter-format/">Twitter Status Post</a>		
										</h5>
										<p class="post__excerpt">#webdesign 200+ Free Vintage Resources to Replensish your Design Toolbox: Check out the massi… https://t.co/623mlyeHM4…</p>
										<div class="entry-meta">
										   <div class="meta-inner">
											  <span class="post__date">
											  <span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/post-twitter-format/">5 years ago</a></span>				</span>
											  <span class="post__comments"><i class="material-icons">chat_bubble_outline</i><a href="https://ld-wp.template-help.com/wordpress_58404_v4/post-twitter-format/#respond" class="post-comments__link">Leave a comment</a></span>
										   </div>
										   <div class="share-btns-main">
											  <div class="share-btns__list ">
												 <div class="share-btns__item facebook-item"><a class="share-btns__link" href="https://www.facebook.com/sharer/sharer.php?u=https://ld-wp.template-help.com/wordpress_58404_v4/post-twitter-format/&amp;t=Twitter Status Post" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><span class="share-btns__label screen-reader-text">Facebook</span></a></div>
												 <div class="share-btns__item twitter-item"><a class="share-btns__link" href="https://twitter.com/intent/tweet?url=https://ld-wp.template-help.com/wordpress_58404_v4/post-twitter-format/&amp;text=Twitter Status Post" rel="nofollow" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i><span class="share-btns__label screen-reader-text">Twitter</span></a></div>
												 <div class="share-btns__item google-plus-item"><a class="share-btns__link" href="https://plus.google.com/share?url=https://ld-wp.template-help.com/wordpress_58404_v4/post-twitter-format/" rel="nofollow" target="_blank" title="Share on Google+"><i class="fa fa-google-plus"></i><span class="share-btns__label screen-reader-text">Google+</span></a></div>
												 <div class="share-btns__item linkedin-item"><a class="share-btns__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ld-wp.template-help.com/wordpress_58404_v4/post-twitter-format/&amp;title=Twitter Status Post&amp;summary=#webdesign 200+ Free Vintage Resources to Replensish your Design Toolbox: Check out the massi&amp;#8230; https://t.co/623mlyeHM4 #templatemonster &amp;mdash; templatesmonster (@templatemonstar) February 12, 2016 When people tell me that our President has delivered his 7th State of the Union speech recently, I always correct their mistake and tell it was eighth, in fact. On February 24, 2009, [&amp;hellip;]&amp;source=https://ld-wp.template-help.com/wordpress_58404_v4/post-twitter-format/" rel="nofollow" target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i><span class="share-btns__label screen-reader-text">LinkedIn</span></a></div>
												 <div class="share-btns__item pinterest-item"><a class="share-btns__link" href="https://www.pinterest.com/pin/create/button/?url=https://ld-wp.template-help.com/wordpress_58404_v4/post-twitter-format/&amp;description=Twitter Status Post&amp;media=https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/spt-16x9-vince-young-100121.jpg" rel="nofollow" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i><span class="share-btns__label screen-reader-text">Pinterest</span></a></div>
											  </div>
											  <i class="material-icons share-main-icon">share</i>
										   </div>
										</div>
									 </div>
									 <footer class="entry-footer"></footer>
								  </div>
							   </article>
							   <div class="clear"></div>
							</div>
						 </div>
					  </div>
				   </div>
				</div>
			 </aside>
		  </aside>
	   </div>
	   <!-- .row -->
	</div>
	<!-- .container -->
 </div>