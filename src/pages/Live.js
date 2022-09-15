import React, { Component } from 'react';

class Live extends Component {
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

					<div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header text-center">
                                    <h4 class="modal-title w-100 font-weight-bold">ADD NEWS</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body mx-3">
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <input type="text" id="form34" class="form-control validate" />
                                        <label data-error="wrong" data-success="right" for="form34">Your name</label>
                                    </div>

                                    <div class="md-form mb-5">
                                        <i class="fas fa-envelope prefix grey-text"></i>
                                        <input type="email" id="form29" class="form-control validate" />
                                        <label data-error="wrong" data-success="right" for="form29">Your email</label>
                                    </div>

                                    <div class="md-form mb-5">
                                        <i class="fas fa-tag prefix grey-text"></i>
                                        <input type="text" id="form32" class="form-control validate" />
                                        <label data-error="wrong" data-success="right" for="form32">Subject</label>
                                    </div>

                                    <div class="md-form">
                                        <i class="fas fa-pencil prefix grey-text"></i>
                                        <textarea type="text" id="form8" class="md-textarea form-control" rows="4"></textarea>
                                        <label data-error="wrong" data-success="right" for="form8">Your message</label>
                                    </div>

                                </div>
                                <div class="modal-footer d-flex justify-content-center">
                                    <button class="btn btn-unique">Submit <i class="fas fa-paper-plane-o ml-1"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section class="page-title">
                        <div class="container-1310">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <div class="text-left">
									<a href="" class="btn btn-default btn-rounded mb-6" data-toggle="modal" data-target="#modalContactForm" 
                                            style={{  backgroundColor:"red", color:"white" }}>GO LIVE</a>
                                      
                                    </div>
									<h2>Watch Live</h2>
                                </div>
                            </div>
                        </div>
                    </section>



					<section class="trending-articles-section ">
						<div class="container-1310">

							<div class="row">
								<div class="col col-xs-12">
									<div class="trending-articles-grids clearfix">
										<div class="grid">
											<div class="entry-media">
												<img src="assets/images/trending-posts/one.png" alt />
												{/* <button>Wrestling</button> */}
												<button href="news2" class="theme-btn-s3" style={{backgroundColor:"red" }}>Live</button>
											</div>
											<div class="entry-details">
											<div class="author">Wrestling</div>
												<h4><a href="news2">Wrestling | World Championships | Belgrade</a></h4>
												<ul>
													<li><a href="news2">3 Mins Read</a></li>
													<li><a href="news2">9 Oct 2022</a></li>
												</ul>
											</div>
										</div>
										<div class="grid">
											<div class="entry-media">
												<img src="assets/images/trending-posts/golf.png" alt />
												<button href="news2" class="theme-btn-s3" style={{backgroundColor:"red" }}>Live</button>
											</div>
											<div class="entry-details">
											<div class="author" >Golf</div>
												<h4><a href="news2">9 for last 10 holes! Jon Rahm Final Round Highlights | 2022 BMW PGA Championship </a></h4>
												<ul>
													<li><a href="news2">5 Mins Read</a></li>
													<li><a href="news2">24 Apr 2022</a></li>
												</ul>
											</div>
										</div>
										<div class="grid">
											<div class="entry-media">
												<img src="assets/images/trending-posts/ball.png" alt />
												<button href="news2" class="theme-btn-s3" style={{backgroundColor:"red" }}>Live</button>
											</div>
											<div class="entry-details">
											<div class="author">Volleyball</div>
												<h4><a href="news2">🇵🇱 POL vs. 🇮🇹 ITA - Highlights Final | Men's World Championships 2022 </a></h4>
												<ul>
													<li><a href="news2">5 Mins Read</a></li>
													<li><a href="news2">24 Apr 2022</a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<br></br>
					<br></br>
<br></br>

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


					<section class="instagram-section">
						<div class="container-full">
							<div class="row">
								<div class="col col-xs-12">
									<div class="instagram-inner">

										<div class="instagram-grids clearfix">
											<div class="grid">
												<a href="#"><img src="assets/images/instagram/gauri.png" alt /></a>
											</div>
											<div class="grid">
												<a href="#"><img src="assets/images/instagram/bolt.png" alt /></a>
											</div>
											<div class="grid">
												<a href="#"><img src="assets/images/instagram/goat.png" alt /></a>
											</div>
											<div class="grid">
												<a href="#"><img src="assets/images/instagram/skate.png" alt /></a>
											</div>
											<div class="grid">
												<a href="#"><img src="assets/images/instagram/hockey.png" alt /></a>
											</div>
											<div class="grid">
												<a href="#"><img src="assets/images/instagram/jump.png" alt /></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>


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

export default Live;