<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`world/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	p { margin: 9px 0 18px; }
</style>

<svelte:head>
	<title>{post.title}</title>
	<meta name="title" content="{post.title}">
	<meta name="description" content="{post.description}">
	<meta name="keywords" content="{post.tags ? post.tags.join(',') : 'news'}">
   <meta name="author" content="{post.author}">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="article">
   <meta property="og:title" content="{post.title}" />
	<meta property="og:description" content="{post.description}">
	<meta property="og:image" content="{post.image}">
	<meta property="og:locale" content="en_AU">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:description" content="{post.description}">
	<meta property="twitter:image" content="{post.image}">
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
                  <div class="breadcrumbs__item-sep">&#47;</div>
               </div>
               <div class="breadcrumbs__item"><a href="/{post.category ? post.category.toLowerCase() : '' }" class="breadcrumbs__item-link" rel="tag" title="{post.category}">{post.category}</a></div>
               <div class="breadcrumbs__item">
                  <div class="breadcrumbs__item-sep">&#47;</div>
               </div>
               <div class="breadcrumbs__item"><span class="breadcrumbs__item-target">{post.title}</span></div>
            </div>
         </div>
      </div>
      <div class="clear"></div>
   </div>
</div>
<!-- <div class="container"> -->
<div class="site-content container" >
   <div class="row">
      <div id="primary" class="col-xs-12 col-md-8">
         <main id="main" class="site-main" role="main">
            <div class="post-left-column">
               <div class="share-btns__list share-btns__list-single-page ">
				  <div class="share-btns__item facebook-item"><a class="share-btns__link" href="https://www.facebook.com/sharer/sharer.php?t={post.title}" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><span class="share-btns__label screen-reader-text">Facebook</span></a></div>
                  <div class="share-btns__item twitter-item"><a class="share-btns__link" href="https://twitter.com/intent/tweet" rel="nofollow" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i><span class="share-btns__label screen-reader-text">Twitter</span></a></div>
                  <div class="share-btns__item google-plus-item"><a class="share-btns__link" href="https://plus.google.com/share?" rel="nofollow" target="_blank" title="Share on Google+"><i class="fa fa-google-plus"></i><span class="share-btns__label screen-reader-text">Google+</span></a></div>
                  <div class="share-btns__item linkedin-item"><a class="share-btns__link" href="https://www.linkedin.com/shareArticle" rel="nofollow" target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i><span class="share-btns__label screen-reader-text">LinkedIn</span></a></div>
                  <div class="share-btns__item pinterest-item"><a class="share-btns__link" href="https://www.pinterest.com/pin/create/button/" rel="nofollow" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i><span class="share-btns__label screen-reader-text">Pinterest</span></a></div>
               </div>
            </div>
            <div class="post-right-column">
               <article id="post-1818" class="post-1818 post type-post status-publish format-standard has-post-thumbnail hentry category-sports tag-sports has-thumb">
                  <header class="entry-header">
                     <div class="post__cats"><a href="/{post.category ? post.category.toLowerCase() : '' }" rel="category tag">{post.category}</a></div>
                     <h1 class="entry-title">{post.title}</h1>
                     <div class="entry-meta">
                        <span class="post-author">By <a class="post-author__link" href="/">{post.author || 'David'}</a></span><span class="post__date"><i class="material-icons">access_time</i><a class="post-date__link" href="/">{post.date}</a></span><span class="post__comments"><i class="material-icons">chat_bubble_outline</i><a href="#comments" class="post-comments__link" >3</a></span>
                     </div>
                     <!-- .entry-meta -->
                  </header>
                  <!-- .entry-header -->
                  <figure class="post-thumbnail">
                     <img width="1170" height="780" src="{post.image}" class="post-thumbnail__img wp-post-image" alt="hero" />	
                  </figure>
                  <!-- .post-thumbnail -->
                  <div class="entry-content">
                        {@html post.html}
                  </div >
                                   <!-- .entry-content -->
                  <footer class="entry-footer"> 
                     <div class="post__tags"><i class="material-icons">folder_open</i>Tagged in: <a href="/{post.category ? post.category.toLowerCase() : '' }" rel="tag">{post.category}</a></div>
                  </footer>
                  <!-- .entry-footer -->
               </article>
               <!-- #post-## -->
               <div class="post-author-bio invert">
                  <div class="post-author__holder clear">
                     <div class="post-author__avatar"><img alt='{post.author}' src='https://secure.gravatar.com/avatar/265f1e197614170f408cd8c14faa3302?s=140&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/265f1e197614170f408cd8c14faa3302?s=280&amp;d=mm&amp;r=g 2x' class='avatar avatar-140 photo' height='140' width='140' /></div>
                     <h4 class="post-author__title">Written by <a href="/" title="Posts by {post.author}" rel="author">{post.author}</a></h4>
                     <div class="post-author__content"></div>
                  </div>
               </div>
            </div>
            <nav class="navigation post-navigation" role="navigation">
               <h2 class="screen-reader-text">Post navigation</h2>
               <div class="nav-links">
                  <div class="nav-next"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/post-twitter-format/" rel="next"><span class="meta-nav" aria-hidden="true">Next Post</span> <span class="screen-reader-text">Next Post</span> <span class="post-title">Twitter Status Post</span></a></div>
               </div>
            </nav>
            <div id="comments" class="comments-area">
               <h4 class="comments-title title-line">
                  3 Responses		
               </h4>
               <ol class="comment-list">
                  <li class="comment byuser comment-author-admin bypostauthor even thread-even depth-1 parent" id="comment-32">
                     <article id="div-comment-32" class="comment-body">
                        <div class="comment-body__holder">
                           <footer class="comment-meta">
                              <div class="comment-author vcard">
                                 <img alt='' src='https://secure.gravatar.com/avatar/265f1e197614170f408cd8c14faa3302?s=100&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/265f1e197614170f408cd8c14faa3302?s=200&amp;d=mm&amp;r=g 2x' class='avatar avatar-100 photo' height='100' width='100' />	
                              </div>
                              <div class="comment-metadata">
                                 <span class="posted-by">By</span> <span class="fn">val</span>		<a href="<script>document.write(window.location.href)</script>#comment-32" class="comment-date"><time datetime="2016-02-11T10:44:18+00:00" class="comment-date__time">Feb 11, 2016</time></a>	
                              </div>
                           </footer>
                           <div class="comment-content">
                              <p>How much longer can we keep up this lefty bullsh*t we need to stay strong to our values.</p>
                           </div>
                           <div class="reply">
                              <a rel='nofollow' class='comment-reply-link' href='<script>document.write(window.location.href)</script>?replytocom=32#respond' onclick='return addComment.moveForm( "div-comment-32", "32", "respond", "1818" )' aria-label='Reply to val'><i class="material-icons">reply</i></a>
                           </div>
                        </div>
                     </article>
                     <!-- .comment-body -->
                     <ol class="children">
                        <li class="comment byuser comment-author-admin bypostauthor odd alt depth-2" id="comment-33">
                           <article id="div-comment-33" class="comment-body">
                              <div class="comment-body__holder">
                                 <footer class="comment-meta">
                                    <div class="comment-author vcard">
                                       <img alt='' src='https://secure.gravatar.com/avatar/265f1e197614170f408cd8c14faa3302?s=100&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/265f1e197614170f408cd8c14faa3302?s=200&amp;d=mm&amp;r=g 2x' class='avatar avatar-100 photo' height='100' width='100' />	
                                    </div>
                                    <div class="comment-metadata">
                                       <span class="posted-by">By</span> <span class="fn">val</span>		<a href="<script>document.write(window.location.href)</script>#comment-33" class="comment-date"><time datetime="2016-02-11T10:45:12+00:00" class="comment-date__time">Feb 11, 2016</time></a>	
                                    </div>
                                 </footer>
                                 <div class="comment-content">
                                    <p>This is exactly what conservatives always says</p>
                                 </div>
                                 <div class="reply">
                                    <a rel='nofollow' class='comment-reply-link' href='<script>document.write(window.location.href)</script>?replytocom=33#respond' onclick='return addComment.moveForm( "div-comment-33", "33", "respond", "1818" )' aria-label='Reply to val'><i class="material-icons">reply</i></a>
                                 </div>
                              </div>
                           </article>
                           <!-- .comment-body -->
                        </li>
                        <!-- #comment-## -->
                     </ol>
                     <!-- .children -->
                  </li>
                  <!-- #comment-## -->
                  <li class="comment byuser comment-author-admin bypostauthor even thread-odd thread-alt depth-1" id="comment-34">
                     <article id="div-comment-34" class="comment-body">
                        <div class="comment-body__holder">
                           <footer class="comment-meta">
                              <div class="comment-author vcard">
                                 <img alt='' src='https://secure.gravatar.com/avatar/265f1e197614170f408cd8c14faa3302?s=100&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/265f1e197614170f408cd8c14faa3302?s=200&amp;d=mm&amp;r=g 2x' class='avatar avatar-100 photo' height='100' width='100' />	
                              </div>
                              <div class="comment-metadata">
                                 <span class="posted-by">By</span> <span class="fn">val</span>		<a href="<script>document.write(window.location.href)</script>#comment-34" class="comment-date"><time datetime="2016-02-11T10:45:22+00:00" class="comment-date__time">Feb 11, 2016</time></a>	
                              </div>
                           </footer>
                           <div class="comment-content">
                              <p>I can&#8217;t agree more, as my brother went on to become a volunteer in Syria, fighting alongside Syrian moderate opposition versus Assad &#8211; and died. All because US did not stop Assad in 2011-2012.</p>
                           </div>
                           <div class="reply">
                              <a rel='nofollow' class='comment-reply-link' href='<script>document.write(window.location.href)</script>?replytocom=34#respond' onclick='return addComment.moveForm( "div-comment-34", "34", "respond", "1818" )' aria-label='Reply to val'><i class="material-icons">reply</i></a>
                           </div>
                        </div>
                     </article>
                     <!-- .comment-body -->
                  </li>
                  <!-- #comment-## -->
               </ol>
               <!-- .comment-list -->
               <div id="respond" class="comment-respond">
                  <h3 id="reply-title" class="comment-reply-title">Leave a Reply <small><a rel="nofollow" id="cancel-comment-reply-link" href="/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for/#respond" style="display:none;">Cancel reply</a></small></h3>
                  <form action="https://ld-wp.template-help.com/wordpress_58404_v4/wp-comments-post.php" method="post" id="commentform" class="comment-form" novalidate>
                     <p class="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span class="required">*</span></p>
                     <p class="comment-form-author"><input id="author" class="comment-form__field" name="author" type="text" placeholder="Your name *" value="" size="30" aria-required='true' required='required' /></p>
                     <p class="comment-form-email"><input id="email" class="comment-form__field" name="email" type="text" placeholder="Your e-mail *" value="" size="30" aria-describedby="email-notes" aria-required='true' required='required' /></p>
                     <p class="comment-form-url"><input id="url" class="comment-form__field" name="url" type="text" placeholder="Your website" value="" size="30" /></p>
                     <p class="comment-form-comment"><textarea id="comment" class="comment-form__field" name="comment" placeholder="Comments *" cols="45" rows="8" aria-required="true" required="required"></textarea></p>
                     <p class="form-submit"><input name="submit" type="submit" id="submit" class="submit" value="Submit Comment" /> <input type='hidden' name='comment_post_ID' value='1818' id='comment_post_ID' />
                        <input type='hidden' name='comment_parent' id='comment_parent' value='0' />
                     </p>
                  </form>
               </div>
               <!-- #respond -->
            </div>
            <!-- #comments -->
         </main>
         <!-- #main -->
      </div>
      <!-- #primary -->
      <aside id="sidebar-primary" class="col-xs-12 col-md-4 sidebar-primary widget-area" role="complementary">
         <aside id="search-4" class="widget widget_search">
            <h4 class="widget-title">Blog Search</h4>
            <form role="search" method="get" class="search-form" action="https://ld-wp.template-help.com/wordpress_58404_v4/">
               <label>
               <span class="screen-reader-text">Search for:</span>
               <input type="search" class="search-form__field"
                  placeholder='I&#039;m looking for....'
                  value="" name="s"
                  title="Search for:" />
               </label>
               <button type="submit" class="search-form__submit btn"><span class="search-btn-txt">Search</span><i class="material-icons">search</i></button>
            </form>
         </aside>
         <aside id="widget_carousel-2" class="widget king_news widget_carousel">
            <h4 class="widget-title">Carousel</h4>
            <div class="swiper-carousel-container">
               <div id="swiper-carousel-5f6fff55aa49e" class="king_news-carousel swiper-container" data-uniq-id="swiper-carousel-5f6fff55aa49e" data-slides-per-view="1" data-slides-per-group="1" data-slides-per-column="1" data-space-between-slides="8" data-duration-speed="500" data-swiper-loop="false" data-free-mode="false" data-grab-cursor="true" data-mouse-wheel="false">
                  <div class="swiper-wrapper">
                     <article class="swiper-slide post hentry">
                        <div class="inner">
                           <div class="content-wrapper">
                              <header class="entry-header">
                                 <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-18/"><img class="swiper-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/04.10.14_Obama-426x327.jpg" alt=""></a>
                                 <div class="post__cats"><a href="/world/">World</a></div>
                                 <div class="carousel--inner">
                                    <div class="entry-content">
                                       <h5 class="entry-title"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-18/" rel="bookmark">If Obama Had Ruled Like This in 2009, He&#8217;d Be the Reforming...</a></h5>
                                    </div>
                                    <footer class="entry-footer">
                                       <div class="entry-meta">
                                          <span class="post__date">
                                          </span>
                                       </div>
                                    </footer>
                                 </div>
                              </header>
                           </div>
                        </div>
                     </article>
                     <article class="swiper-slide post hentry">
                        <div class="inner">
                           <div class="content-wrapper">
                              <header class="entry-header">
                                 <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/"><img class="swiper-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-426x327.jpg" alt=""></a>
                                 <div class="post__cats"><a href="/world/">world</a></div>
                                 <div class="carousel--inner">
                                    <div class="entry-content">
                                       <h5 class="entry-title"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/" rel="bookmark">Terrorism concerns get UK tourists opting in to &#8216;lighter&#8217;...</a></h5>
                                    </div>
                                    <footer class="entry-footer">
                                       <div class="entry-meta">
                                          <span class="post__date">
                                          </span>
                                       </div>
                                    </footer>
                                 </div>
                              </header>
                           </div>
                        </div>
                     </article>
      
                     <article class="swiper-slide post hentry">
                        <div class="inner">
                           <div class="content-wrapper">
                              <header class="entry-header">
                                 <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-23/"><img class="swiper-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/IS-flag-426x327.jpg" alt=""></a>
                                 <div class="post__cats"><a href="/world/">World</a></div>
                                 <div class="carousel--inner">
                                    <div class="entry-content">
                                       <h5 class="entry-title"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-23/" rel="bookmark">Islamic State gets new murders video out</a></h5>
                                    </div>
                                    <footer class="entry-footer">
                                       <div class="entry-meta">
                                          <span class="post__date">
                                          </span>
                                       </div>
                                    </footer>
                                 </div>
                              </header>
                           </div>
                        </div>
                     </article>
                     <article class="swiper-slide post hentry">
                        <div class="inner">
                           <div class="content-wrapper">
                              <header class="entry-header">
                                 <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-24/"><img class="swiper-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/hillary-clinton-has-laid-out-a-sweeping-gun-control-plan-426x327.jpg" alt=""></a>
                                 <div class="post__cats"><a href="/world/">World</a></div>
                                 <div class="carousel--inner">
                                    <div class="entry-content">
                                       <h5 class="entry-title"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-24/" rel="bookmark">Clinton ‘Loves’ Proposal of Appointing Obama to Supreme Court as POTUS</a></h5>
                                    </div>
                                    <footer class="entry-footer">
                                       <div class="entry-meta">
                                          <span class="post__date">
                                          </span>
                                       </div>
                                    </footer>
                                 </div>
                              </header>
                           </div>
                        </div>
                     </article>
                     <article class="swiper-slide post hentry">
                        <div class="inner">
                           <div class="content-wrapper">
                              <header class="entry-header">
                                 <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-25/"><img class="swiper-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/heatlhcare-penalty-426x327.jpg" alt=""></a>
                                 <div class="post__cats"><a href="/world/">World</a></div>
                                 <div class="carousel--inner">
                                    <div class="entry-content">
                                       <h5 class="entry-title"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-25/" rel="bookmark">HealthCare.gov closes signups — register or get a penalty</a></h5>
                                    </div>
                                    <footer class="entry-footer">
                                       <div class="entry-meta">
                                          <span class="post__date">
                                          </span>
                                       </div>
                                    </footer>
                                 </div>
                              </header>
                           </div>
                        </div>
                     </article>
                     <article class="swiper-slide post hentry">
                        <div class="inner">
                           <div class="content-wrapper">
                              <header class="entry-header">
                                 <a class="post-thumbnail__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/"><img class="swiper-image" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ct-illinois-budget-met-0104-20141231-426x327.jpg" alt=""></a>
                                 <div class="post__cats"><a href="/world/">world</a></div>
                                 <div class="carousel--inner">
                                    <div class="entry-content">
                                       <h5 class="entry-title"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-14/" rel="bookmark">Illinois budget fix: Just leave bills ignored and unpaid</a></h5>
                                    </div>
                                    <footer class="entry-footer">
                                       <div class="entry-meta">
                                          <span class="post__date">
                                          </span>
                                       </div>
                                    </footer>
                                 </div>
                              </header>
                           </div>
                        </div>
                     </article>
                  </div>
                  <div id="swiper-carousel-5f6fff55aa49e-pagination" class="swiper-pagination"></div>
               </div>
               <div id="swiper-carousel-5f6fff55aa49e-next" class="swiper-button-next button-next"><i class="material-icons">navigate_next</i></div>
               <div id="swiper-carousel-5f6fff55aa49e-prev" class="swiper-button-prev button-prev"><i class="material-icons">navigate_before</i></div>
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
                  <input type="hidden" id="king_news_subscribe" name="king_news_subscribe" value="c7bd9d9868" /><input type="hidden" name="_wp_http_referer" value="/todo" />
                  <div class="subscribe-block__input-group"><input class="subscribe-block__input" type="email" name="subscribe-mail" value="" placeholder="Your e-mail"><a href="/subscribe" class="subscribe-block__submit btn">Subscribe</a></div>
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
                     <img width="536" height="411" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ap-trump-carson-cruz-536x411.jpg" class="attachment-_tm-thumb-536-411 size-_tm-thumb-536-411 wp-post-image" alt="ap-trump-carson-cruz" srcset="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ap-trump-carson-cruz-536x411.jpg 536w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ap-trump-carson-cruz-238x182.jpg 238w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ap-trump-carson-cruz-150x115.jpg 150w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ap-trump-carson-cruz-337x258.jpg 337w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/ap-trump-carson-cruz-426x327.jpg 426w" sizes="(max-width: 536px) 100vw, 536px" />		
                     <figcaption class="widget-image-grid__content">
                        <div class="post__cats"><a href="/news/" rel="category tag">News</a></div>
                        <div></div>
                        <div class="widget-image-grid__content-2">
                           <h3 class="widget-image-grid__title">
                              <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-16/">Two Loser Idaho Pot Smugglers Freak ...</a>
                           </h3>
                           <div class="widget-image-grid__footer">
                              <div class="widget-image-grid__footer-meta">
                                 <span class="post-author">by <a class="post-author__link" href="/">{post.author}</a></span>   <a class="widget-image-grid__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-16/"><i class="material-icons dp18">access_time</i>2 hours ago</a>
                              </div>
                              <div class="share-btns-main">
                                 <div class="share-btns__list ">
                                    <div class="share-btns__item facebook-item"><a class="share-btns__link" href="https://www.facebook.com/sharer/sharer.php" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><span class="share-btns__label screen-reader-text">Facebook</span></a></div>
                                    <div class="share-btns__item twitter-item"><a class="share-btns__link" href="https://twitter.com/intent/tweet?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-16/&amp;text=Two Loser Idaho Pot Smugglers Freak Out, Call 911 on Themselves" rel="nofollow" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i><span class="share-btns__label screen-reader-text">Twitter</span></a></div>
                                    <div class="share-btns__item google-plus-item"><a class="share-btns__link" href="https://plus.google.com/share?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-16/" rel="nofollow" target="_blank" title="Share on Google+"><i class="fa fa-google-plus"></i><span class="share-btns__label screen-reader-text">Google+</span></a></div>
                                    <div class="share-btns__item linkedin-item"><a class="share-btns__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-16/&amp;title=Two Loser Idaho Pot Smugglers Freak Out, Call 911 on Themselves&amp;" rel="nofollow" target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i><span class="share-btns__label screen-reader-text">LinkedIn</span></a></div>
                                    <div class="share-btns__item pinterest-item"><a class="share-btns__link" href="https://www.pinterest.com/pin/create/button/?url=https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-16/&amp;description=Two Loser Idaho Pot Smugglers Freak Out, Call 911 on Themselves&amp;" rel="nofollow" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i><span class="share-btns__label screen-reader-text">Pinterest</span></a></div>
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
                     <img width="536" height="411" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/David-Cameron-Getty-v3-536x411.jpg" class="attachment-_tm-thumb-536-411 size-_tm-thumb-536-411 wp-post-image" alt="David-Cameron-Getty-v3" srcset="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/David-Cameron-Getty-v3-536x411.jpg 536w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/David-Cameron-Getty-v3-238x182.jpg 238w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/David-Cameron-Getty-v3-150x115.jpg 150w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/David-Cameron-Getty-v3-337x258.jpg 337w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/David-Cameron-Getty-v3-426x327.jpg 426w" sizes="(max-width: 536px) 100vw, 536px" />		
                     <figcaption class="widget-image-grid__content">
                        <div class="post__cats"><a href="/news/" rel="category tag">News</a></div>
                        <div></div>
                        <div class="widget-image-grid__content-2">
                           <h3 class="widget-image-grid__title">
                              <a href="https://ld-wp.template-help.com/wordpress_58404_v4/quote-post/">David Cameron is not done with politics</a>
                           </h3>
                           <div class="widget-image-grid__footer">
                              <div class="widget-image-grid__footer-meta">
                                 <span class="post-author">by <a class="post-author__link" href="/">Julia H. Shaffer</a></span>            <a class="widget-image-grid__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/quote-post/"><i class="material-icons dp18">access_time</i>3 hours ago</a>
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
                     <img width="536" height="411" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-536x411.jpg" class="attachment-_tm-thumb-536-411 size-_tm-thumb-536-411 wp-post-image" alt="london22" srcset="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-536x411.jpg 536w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-238x182.jpg 238w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-150x115.jpg 150w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-337x258.jpg 337w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/london22-426x327.jpg 426w" sizes="(max-width: 536px) 100vw, 536px" />		
                     <figcaption class="widget-image-grid__content">
                        <div class="post__cats"><a href="/world/" rel="category tag">world</a></div>
                        <div></div>
                        <div class="widget-image-grid__content-2">
                           <h3 class="widget-image-grid__title">
                              <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/">Terrorism concerns get UK tourists opting ...</a>
                           </h3>
                           <div class="widget-image-grid__footer">
                              <div class="widget-image-grid__footer-meta">
                                 <span class="post-author">by <a class="post-author__link" href="/">Sharon T. Castaneda</a></span>            <a class="widget-image-grid__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/"><i class="material-icons dp18">access_time</i>1 day ago</a>
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
                     <img width="536" height="411" src="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program-536x411.jpg" class="attachment-_tm-thumb-536-411 size-_tm-thumb-536-411 wp-post-image" alt="Negotiations_about_Iranian_Nuclear_Program" srcset="https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program-536x411.jpg 536w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program-238x182.jpg 238w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program-150x115.jpg 150w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program-337x258.jpg 337w, https://ld-wp.template-help.com/wordpress_58404_v4/wp-content/uploads/2016/02/Negotiations_about_Iranian_Nuclear_Program-426x327.jpg 426w" sizes="(max-width: 536px) 100vw, 536px" />		
                     <figcaption class="widget-image-grid__content">
                        <div class="post__cats"><a href="/world/" rel="category tag">world</a> <a href="/world/" rel="category tag">world</a></div>
                        <div></div>
                        <div class="widget-image-grid__content-2">
                           <h3 class="widget-image-grid__title">
                              <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/">Iran nuclear deal makes country so ...</a>
                           </h3>
                           <div class="widget-image-grid__footer">
                              <div class="widget-image-grid__footer-meta">
                                 <span class="post-author">by <a class="post-author__link" href="/">{post.author}</a></span>            <a class="widget-image-grid__link" href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-21/"><i class="material-icons dp18">access_time</i>2 years ago</a>
                              </div>
                              <div class="share-btns-main">
                                 <div class="share-btns__list ">
                                    <div class="share-btns__item facebook-item"><a class="share-btns__link" href="https://www.youtube.com/watch?v=oHg5SJYRHA0" rel="nofollow" target="_blank" title="Share on Facebook"><i class="fa fa-facebook"></i><span class="share-btns__label screen-reader-text">Facebook</span></a></div>
                                    <div class="share-btns__item twitter-item"><a class="share-btns__link" href="https://www.youtube.com/watch?v=oHg5SJYRHA0" rel="nofollow" target="_blank" title="Share on Twitter"><i class="fa fa-twitter"></i><span class="share-btns__label screen-reader-text">Twitter</span></a></div>
                                    <div class="share-btns__item google-plus-item"><a class="share-btns__link" href="https://www.youtube.com/watch?v=oHg5SJYRHA0" rel="nofollow" target="_blank" title="Share on Google+"><i class="fa fa-google-plus"></i><span class="share-btns__label screen-reader-text">Google+</span></a></div>
                                    <div class="share-btns__item linkedin-item"><a class="share-btns__link" href="https://www.youtube.com/watch?v=oHg5SJYRHA0" rel="nofollow" target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i><span class="share-btns__label screen-reader-text">LinkedIn</span></a></div>
                                    <div class="share-btns__item pinterest-item"><a class="share-btns__link" href="https://www.youtube.com/watch?v=oHg5SJYRHA0" rel="nofollow" target="_blank" title="Share on Pinterest"><i class="fa fa-pinterest"></i><span class="share-btns__label screen-reader-text">Pinterest</span></a></div>
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
               <li class="recentcomments"><span class="comment-author-link">John Shaw</span> on <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-22/#comment-69">Among 1M refugees, Berlin accepted ISIS terrorists</a></li>
               <li class="recentcomments"><span class="comment-author-link">David C. Buckland</span> on <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-20/#comment-68">Terrorism concerns get UK tourists opting in to &#8216;lighter&#8217; holiday spots</a></li>
               <li class="recentcomments"><span class="comment-author-link">Robert Gaspard</span> on <a href="https://ld-wp.template-help.com/wordpress_58404_v4/if-obama-had-ruled-like-this-in-2009-hed-be-the-reforming-president-we-all-hoped-for-18/#comment-67">If Obama Had Ruled Like This in 2009, He&#8217;d Be the Reforming President We All Hoped For</a></li>
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
                           <a class="twitter-timeline" width="520" height="250" href="https://twitter.com/twitterdev" data-widget-id="344713329262084096" data-screen-name="TemplateMonster" data-show-replies="false" data-theme="light" data-link-color="" data-border-color="" data-chrome="">Tweets by @TemplateMonster</a>
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
                  <caption>October 2020</caption>
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
                        <td colspan="3" id="prev"><a href="https://ld-wp.template-help.com/wordpress_58404_v4/2016/02/">&laquo; Feb</a></td>
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
    
      </aside>
      </div><!-- .row -->
   </div>
   <!-- .container -->
</div>
<!-- #content -->