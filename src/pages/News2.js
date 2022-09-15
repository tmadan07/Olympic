import React, { Component } from 'react';


class News2 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>

                <div class="page-wrapper">

                    <div class="preloader">
                        <div class="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>


                    <header id="header" class="site-header header-style-1">
                        <div class="topbar">
                            <div class="container-full">
                                <div class="row">
                                    <div class="col col-xs-12">
                                        <div class="inner clearfix">
                                            <div class="left-link">
                                                <ul>
                                                    <li><a href="contact.html">Features</a></li>
                                                    <li><a href="contact.html">Privacy policy</a></li>
                                                    <li><a href="contact.html">Get in touch</a></li>
                                                </ul>
                                            </div>
                                            <div class="social-link">
                                                <ul>
                                                    <li><a href="#"><i class="ti ti-facebook"></i></a></li>
                                                    <li><a href="#"><i class="ti ti-twitter-alt"></i></a></li>
                                                    <li><a href="#"><i class="ti ti-pinterest-alt"></i></a></li>
                                                    <li><a href="#"><i class="ti ti-vimeo-alt"></i></a></li>
                                                    <li><a href="#"><i class="ti ti-flickr-alt"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
<br></br>
                        <nav id="site-navigation" class="navigation navbar navbar-default">
                            <div class="container-full">
                                <div class="navbar-header">
                                    <button type="button" id="hamburger-menu" class="open-nav-btn open-btn" aria-label="open navigation" aria-controls="link-list" aria-expanded="false">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                    <a class="navbar-brand" href="/"><img src="assets/images/logo1.png" alt /></a>
                                </div>
                                <div id="slide-nav" class="navbar-collapse collapse navigation-holder slide-content">
                                    <button type="button" id="close" class="close-btn close-navbar" aria-label="close navigation"><i class="ti-close"></i></button>
                                    <ul id="link-list" class="nav navbar-nav menu nav-menu">


                                        <li class="current-menu-item"><a href="/live">Live</a></li>

                                        <li class="current-menu-item"><a href="/news">News</a></li>

                                        <li class="current-menu-item"><a href="/sports">Sports</a></li>

                                        <li class="current-menu-item"><a href="/athletes">Athletes</a></li>

                                        <li class="nav-item dropdown">
											<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src="assets/images/avatar.png" style={{width:"30px", height:"30px", position:"absolute"}}/>
											</a>
											<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="/login">Login</a></li>
												<li><a class="dropdown-item" href="/register">Register</a></li>
												<li><a class="dropdown-item" href="/logout">Logout</a></li>
											</div>
										</li>
                                    </ul>
                                </div>

                                <div class="header-right">
                                    <div class="header-search-form-wrapper">
                                        <div class="search-area">
                                            <form>
                                                <div>
                                                    <input type="text" class="form-control" placeholder="Search" />
                                                    <button type="submit"><i class="ti ti-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </nav>
                    </header>


<br></br>
<br></br>
<br></br>


                    {/* <!-- start blog-single-section --> */}
                    <section class="blog-single-section section-padding">
                        <div class="container-1310">
                            <div class="row">
                                <div class="col col-lg-8">
                                    <div class="blog-content">
                                        <div class="post format-standard-image">
                                            <div class="entry-media">
                                                <img src="assets/images/featured-articles/madrid.png" alt style={{ maxWidth:'3000px' }}/>
                                                <button>Football</button>
                                            </div>
                                            <div class="entry-details">
                                                <div class="author">By: <a href="news2">Madan</a></div>
                                                <h2>Premier League pause, Real Madrid and Barcelona in form, VAR trips Juventus: Weekend review</h2>
                                                <div class="entry-meta">
                                                    <ul>
                                                        <li><a href="news2">5 Mins Read</a></li>
                                                        <li><a href="news2">24 Apr 2022</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>The weekend in European football saw Real Madrid and Paris Saint-Germain take care of business in their respective league matches. Juventus, however, are looking off-kilter while Borussia Dortmund lost to RB Leipzig -- led by a familiar face.</p>
                                            <p>The one question mark looming over Real Madrid's bid to retain their LaLiga title has been how the team would cope with an injury to captain and Ballon d'Or-elect Karim Benzema. Those doubts grew when the club chose not to sign a backup centre-forward this summer: could Madrid really go all season -- in this atypical World Cup year -- relying entirely on Benzema's form and fitness?</p>
                                            <p>With the 34-year-old now missing with a muscular injury that could keep him out for a month, Sunday's 4-1 win over Mallorca was an answer of sorts. It didn't exactly bolster Carlo Ancelotti's argument that Eden Hazard can act as a suitable stand-in -- he was anonymous in his hour on the pitch -- but fortunately for Madrid, Vinicius Junior and Rodrygo Goes stepped up to provide the necessary firepower to take care of Mallorca in the second half.</p>

                                            <p>Vinicius has now scored in five consecutive games for the first time in his career and already looks on target to better last season's 17 goals in LaLiga. Rodrygo, meanwhile, is playing with a newfound confidence and maturity. Having set up Vinicius to make it 2-1, he wrapped up the game by scoring himself, a week after netting the winner against Real Betis.</p>
                                            <blockquote>
                                                Meanwhile, the Premier League postponed its weekend matches as a mark of respect after the death of Queen Elizabeth II at the age of 96.
                                                <span>-Madan Thapa</span>
                                            </blockquote>
                                            <p>Paris Saint-Germain's win over Brest was not a great game, and was the kind of match that is easily forgotten. PSG won 1-0 by doing the strict minimum, including seeing goalkeeper Gianluigi Donnarumma saving a penalty, four days after a Champions League win over Juventus and four days before a trip to Israel to face Maccabi Haifa in the same competition.</p>

                                            <p>However, on Saturday Lionel Messi and Neymar connected for what could only be considered a magical moment that will stay in people's minds for a long time. In the 30th minute, Messi received the ball 10 yards inside the Brest half. The Argentine looks up and sees the run of Neymar inside the left of the box. Then the first moment of magic happens: the long pass from Messi toward his teammate -- exceptional, the accuracy, the spin on it.</p>
                                        </div>

                                        <div class="share">
                                            <i class="ti-sharethis"></i>
                                            <ul>
                                                <li><a href="#">Facebook</a></li>
                                                <li><a href="#">Twitter</a></li>
                                                <li><a href="#">Pinterest</a></li>
                                                <li><a href="#">Instagram</a></li>
                                            </ul>
                                        </div>

                                        <div class="author-box">
                                            <div class="author-avatar">
                                                <a href="#" target="_blank"><img src="assets/images/blog-details/espn.png" alt /></a>
                                            </div>
                                            <div class="author-content">
                                                <a href="#" class="author-name">Author: ESPN</a>
                                                <p>Visit ESPN to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more</p>
                                                <div class="socials">
                                                    <ul class="social-link">
                                                        <li><a href="#"><i class="ti-facebook"></i></a></li>
                                                        <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                                                        <li><a href="#"><i class="ti-linkedin"></i></a></li>
                                                        <li><a href="#"><i class="ti-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="more-posts">
                                            <div class="previous-post">
                                                <a href="news2">
                                                    <span class="post-control-link">Previous Post</span>
                                                    <h4>Predicting Erling Haaland's Man City goals this season: Could he make Premier League history?</h4>
                                                </a>
                                            </div>
                                            <div class="next-post">
                                                <a href="news2">
                                                    <span class="post-control-link">Next Post</span>
                                                    <h4>Vinicius Jr. is Real Madrid's talisman, but how will he handle being targeted by opponents?</h4>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="comments-area">
                                            <div class="comments-section">
                                                <h3 class="comments-title">3 Comments</h3>
                                                <ol class="comments">
                                                    <li class="comment even thread-even depth-1" id="comment-1">
                                                        <div id="div-comment-1">
                                                            <div class="comment-theme">
                                                                <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-1.jpg" alt /></div>
                                                            </div>
                                                            <div class="comment-main-area">
                                                                <div class="comment-wrapper">
                                                                    <div class="comments-meta">
                                                                        <h4>Milder <span class="comments-date">Apr 25, 2022 at 3.00PM</span></h4>
                                                                    </div>
                                                                    <div class="comment-area">
                                                                        <p>Embarrassing hidden in the middle of text all the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                                                        <div class="comments-reply">
                                                                            <a class="comment-reply-link" href="#"><span>Reply</span></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul class="children">
                                                            <li class="comment">
                                                                <div>
                                                                    <div class="comment-theme">
                                                                        <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-2.jpg" alt /></div>
                                                                    </div>
                                                                    <div class="comment-main-area">
                                                                        <div class="comment-wrapper">
                                                                            <div class="comments-meta">
                                                                                <h4>Neolan <span class="comments-date">Apr 25, 2022 at 3.00PM</span></h4>
                                                                            </div>
                                                                            <div class="comment-area">
                                                                                <p>Embarrassing hidden in the middle of text all the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                                                                <div class="comments-reply">
                                                                                    <a class="comment-reply-link" href="#"><span>Reply</span></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li class="comment">
                                                                        <div>
                                                                            <div class="comment-theme">
                                                                                <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-3.jpg" alt /></div>
                                                                            </div>
                                                                            <div class="comment-main-area">
                                                                                <div class="comment-wrapper">
                                                                                    <div class="comments-meta">
                                                                                        <h4>Abrela Non <span class="comments-date">Apr 25, 2022 at 3.00PM</span></h4>
                                                                                    </div>
                                                                                    <div class="comment-area">
                                                                                        <p>Didden in the middle of text all the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                                                                        <div class="comments-reply">
                                                                                            <a class="comment-reply-link" href="#"><span>Reply</span></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li class="comment">
                                                        <div>
                                                            <div class="comment-theme">
                                                                <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-1.jpg" alt /></div>
                                                            </div>
                                                            <div class="comment-main-area">
                                                                <div class="comment-wrapper">
                                                                    <div class="comments-meta">
                                                                        <h4>Collines <span class="comments-date">Apr 25, 2022 at 3.00PM</span></h4>
                                                                    </div>
                                                                    <div class="comment-area">
                                                                        <p>Middle of text all the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                                                        <div class="comments-reply">
                                                                            <a class="comment-reply-link" href="#"><span>Reply</span></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>

                                            <div class="comment-respond">
                                                <h3 class="comment-reply-title">Leave your thought</h3>
                                                <form method="post" id="commentform" class="comment-form">
                                                    <div class="form-textarea">
                                                        <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                                    </div>
                                                    <div class="form-inputs">
                                                        <input placeholder="Website" type="url" />
                                                        <input placeholder="Name" type="text" />
                                                        <input placeholder="Email" type="email" />
                                                    </div>
                                                    <div class="form-submit">
                                                        <input id="submit" value="Post Comment" type="submit" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col col-lg-4">
                                    <div class="blog-sidebar-s2">
                                        <div class="widget search-widget">
                                            <h3>Search</h3>
                                            <form>
                                                <div>
                                                    <input type="text" class="form-control" placeholder="Search Post.." />
                                                    <button type="submit"><i class="ti-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="widget recent-post-widget">
                                            <h3>Recent post</h3>
                                            <div class="posts">
                                                <div class="post">
                                                    <div class="img-holder">
                                                        <img src="assets/images/recent-posts/tennis.png" alt />
                                                    </div>
                                                    <div class="details">
                                                        <span class="date">1 Feb 2021</span>
                                                        <h4><a href="news2">Way-too-early tennis Grand Slam predictions for 2023 </a></h4>
                                                    </div>
                                                </div>
                                                <div class="post">
                                                    <div class="img-holder">
                                                        <img src="assets/images/recent-posts/rest.png" alt />
                                                    </div>
                                                    <div class="details">
                                                        <span class="date">22 Jan 2022</span>
                                                        <h4><a href="news2">Wrestling World Championships: What are Vinesh Phogat, Bajrang Punia's medal chances?</a></h4>
                                                    </div>
                                                </div>
                                                <div class="post">
                                                    <div class="img-holder">
                                                        <img src="assets/images/recent-posts/ball.png" alt />
                                                    </div>
                                                    <div class="details">
                                                        <span class="date">25 Jan 2022</span>
                                                        <h4><a href="news2">Seattle Seahawks ruin Russell Wilson's return, upset Denver Broncos</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget add-widget">
                                            <h3>Advertise: Cr7 Underwear</h3>
                                            <div>
                                                <div class="img-holder">
                                                    <img src="assets/images/recent-posts/cr7.png" alt />
                                                </div>
                                                
                                            </div>
                                            <br></br>
                                            <a href="news2" class="theme-btn-s3" style={{backgroundColor:"blue", color:"white" }}>See more</a>
                                        </div>
                                        <div class="widget tag-widget">
                                            <h3>Tags</h3>
                                            <ul>
                                                <li><a href="#">Football</a></li>
                                                <li><a href="#">Travel agency</a></li>
                                                <li><a href="#">Posts</a></li>
                                                <li><a href="#">Basketball</a></li>
                                                <li><a href="#">Cricket</a></li>
                                                <li><a href="#">Hockey</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- start newsletter-section --> */}
                    <section class="newsletter-section">
                        <div class="container-1310">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <div class="newsletter-area">
                                        <div class="newsletter-inner clearfix">
                                            <div class="text">
                                                <h3>Email Newsletter</h3>
                                                <p>Enter your email and we'll keep you posted with news and updates!</p>
                                            </div>
                                            <form>
                                                <div class="input-1">
                                                    <input type="email" class="form-control" placeholder="Email Address *" required="" />
                                                </div>
                                                <div class="submit clearfix">
                                                    <button type="submit">Subcribe</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    {/* <!-- start footer-section -->      */}
                    <footer class="footer-section">
                        <div class="container-1310">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <div class="footer-content">
                                        <div class="social">
                                            <ul>
                                                <li><a href="#"><i class="ti-facebook"></i></a></li>
                                                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                                                <li><a href="#"><i class="ti-linkedin"></i></a></li>
                                                <li><a href="#"><i class="ti-pinterest"></i></a></li>
                                                <li><a href="#"><i class="ti-vimeo-alt"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="copyright">
                                            <img src="assets/images/logo1.png" alt />
                                            <p>&copy; Olympic2022 , All Rights Reserved</p>
                                        </div>
                                        <div class="important-links">
                                            <ul>
                                                <li><a href="about.html">About me</a></li>
                                                <li><a href="contact.html">Contact me</a></li>
                                                <li><a href="contact.html">Advertising</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>

            </>
        )
    }

}

export default News2;