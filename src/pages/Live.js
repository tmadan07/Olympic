import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Live extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<>
				<div class="page-wrapper">

					<Navbar />
					<br></br>
					<br></br>

					<section class="page-title">
                        <div class="container-1310">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <div class="text-left">
									<Link
                                            class="btn btn-outline-primary mr-2" to={"/live.html"}>
                                                <button style={{ backgroundColor: "red", color: "white" }}>GO LIVE</button> 
                                        </Link>
                                    </div>
                                    <h2>LIVE GAMES</h2>
                                </div>
                            </div>
                        </div>
                    </section>

					

					<br></br>
					<br></br>

					<section class="trending-articles-section ">
						<div class="container-1310">

							<div class="row">
								<div class="col col-xs-12">
									<div class="trending-articles-grids clearfix">
										<div class="grid">
											<div class="entry-media">
												<img src="assets/images/trending-posts/one.png" alt />
												{/* <button>Wrestling</button> */}
												<button href="news2" class="theme-btn-s3" style={{ backgroundColor: "red" }}>Live</button>
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
												<button href="news2" class="theme-btn-s3" style={{ backgroundColor: "red" }}>Live</button>
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
												<button href="news2" class="theme-btn-s3" style={{ backgroundColor: "red" }}>Live</button>
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