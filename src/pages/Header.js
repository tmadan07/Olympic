import React, { Component } from 'react';
import Navbar from './Navbar';
import { api } from '../utils';

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			medals: [],
			rank: '',
			country: '',
			gold: '',
			silver: '',
			bronze: '',
			total: ''
		}
	}

	componentDidMount() {
		this.getAllMedals();
	}

	async getAllMedals() {
		let responseJson = await api.getAllMedals();
		this.setState({ medals: responseJson })
	}

	renderTablebody() {
		const { medals } = this.state;
		if (medals && medals.length > 0) {
			return (
				<tbody>
					{
						medals.map((datum, index) => {
							return (
								<tr key={index} onClick={() => { this.handleDoubleClick(datum) }}>
									<td>{datum.rank}</td>
									<td>{datum.country}</td>
									<td>{datum.gold}</td>
									<td>{datum.silver}</td>
									<td>{datum.bronze}</td>
									<td>{datum.total}</td>
									<td>
										<button style={{ backgroundColor: "green", color: "white" }}>Update</button>
										<button style={{ backgroundColor: "red", color: "white" }}>Delete</button></td>
								</tr>
							)
						})
					}
				</tbody>
			)
		}
		else {
			return (
				<tbody>
					<tr><td>No data found</td></tr>
				</tbody>
			)
		}
	}

	render() {
		return (
			<>
				<div class="page-wrapper">

					<Navbar />
					<br></br>
					<br></br>

					<section>
						<img src='/assets/images/trending-posts/back.PNG' style={{
							width: '100%', height: '100vh'
						}}></img>
					</section>


					{/* *************************** start featured-articles ****************************** */}
					<br></br>
					<br></br>
					<br></br>
					<section class="featured-articles section-padding">
						<div class="container-1310">
							<div class="row">
								<div class="col col-xs-12">
									<div class="section-title">
										<span>News</span>
										<h2>Latest News</h2>

										<a href="/news2" class="theme-btn">
											view more
											<svg xmlns="http://www.w3.org/2000/svg" width="33" height="13" viewBox="0 0 33 13">
												<g transform="translate(-1585 -1152)">
													<g data-name="Polygon 2" transform="translate(1618 1152) rotate(90)" fill="none">
														<path d="M6.5,0,13,11H0Z" stroke="none" />
														<path d="M 6.5 1.965688705444336 L 1.75245189666748 10 L 11.24754810333252 10 L 6.5 1.965688705444336 M 6.5 9.5367431640625e-07 L 13 11 L 0 11 L 6.5 9.5367431640625e-07 Z" stroke="none" fill="#18171C" />
													</g>
													<rect data-name="Rectangle 46" width="22" height="1" transform="translate(1585 1158)" fill="#18171C" />
												</g>
											</svg>
										</a>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col col-lg-8">
									<div class="posts">

										<div class="post">
											<div class="entry-media">
												<img src="assets/images/trending-posts/oly.png" alt />
											</div>
											<div class="entry-details">
												<h4><a href="/news2">After Beijing winter Olympics, China eyes world cup goal</a></h4>
												<ul>
													<li><a href="blog.html">2 mins ago</a></li>
													<li><a href="blog.html">23 Apr 2022</a></li>
												</ul>
												<p>Football fan President Xi Jinping has said he wants China to stage and even win the men's World Cup one day.</p>
												<a href="/news2" class="read-more">Read more</a>
											</div>
										</div>
										<div class="post">
											<div class="entry-media">
												<img src="assets/images/featured-articles/madrid.png" alt />
											</div>
											<div class="entry-details">
												<h4><a href="/news2">Premier League pause, Real Madrid in form: Weekend review</a></h4>
												<ul>
													<li><a href="blog.html">1 hour ago</a></li>
													<li><a href="blog.html">24 Apr 2022</a></li>
												</ul>
												<p>The weekend in European football saw Real Madrid and Paris Saint-Germain take care of business in their respective league matches.</p>
												<a href="/news2" class="read-more">Read more</a>
											</div>
										</div>
										<div class="post">
											<div class="entry-media">
												<img src="assets/images/featured-articles/USA.png" alt />
											</div>
											<div class="entry-details">
												<h4><a href="/news2">Trailer released for 'The Redeem Team' about Team USA's</a></h4>
												<ul>
													<li><a href="blog.html">15 days ago</a></li>
													<li><a href="blog.html">2 Jan 2022</a></li>
												</ul>
												<p>The new documentary film about how Kobe Bryant and USA's NBA stars regained Olympic gold, to be launched worldwide on 7 October.</p>
												<a href="/news2" class="read-more">Read more</a>
											</div>
										</div>
										<div class="post">
											<div class="entry-media">
												<img src="assets/images/featured-articles/cycle.png" alt />
											</div>
											<div class="entry-details">
												<h4><a href="/news2">2022 UCI Road World Championships in Wollongong: Preview</a></h4>
												<ul>
													<li><a href="blog.html">5 hour ago</a></li>
													<li><a href="blog.html">10 June 2022</a></li>
												</ul>
												<p>The world’s best cyclists are set to compete for the coveted rainbow jersey in Wollongong, Australia, at the 2022 UCI Road World Championships.</p>
												<a href="/news2" class="read-more">Read more</a>
											</div>
										</div>
									</div>
								</div>

								<div class="col col-lg-4">
									<div class="blog-sidebar">
										<div class="widget add-widget">
											<h3>Advertise: Cr7 Underwear</h3>
											<div>
												<div class="img-holder">
													<img src="assets/images/recent-posts/cr7.png" alt />
												</div>
											</div>
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


									</div>
								</div>
							</div>
						</div>
					</section>




					{/* *************************** start recent-videos-section *************************** */}
					<section class="recent-videos-section section-padding">
						<div class="container-1310">
							<div class="row">
								<div class="col col-xs-12">
									<div class="section-title">
										<span>Highlights</span>
										<h2>Recent highlights</h2>

										<a href="blog.html" class="theme-btn">
											view more
											<svg xmlns="http://www.w3.org/2000/svg" width="33" height="13" viewBox="0 0 33 13">
												<g transform="translate(-1585 -1152)">
													<g data-name="Polygon 2" transform="translate(1618 1152) rotate(90)" fill="none">
														<path d="M6.5,0,13,11H0Z" stroke="none" />
														<path d="M 6.5 1.965688705444336 L 1.75245189666748 10 L 11.24754810333252 10 L 6.5 1.965688705444336 M 6.5 9.5367431640625e-07 L 13 11 L 0 11 L 6.5 9.5367431640625e-07 Z" stroke="none" fill="#18171C" />
													</g>
													<rect data-name="Rectangle 46" width="22" height="1" transform="translate(1585 1158)" fill="#18171C" />
												</g>
											</svg>
										</a>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col col-lg-7">
									<div class="left-post">
										<div class="post">
											<div class="entry-media">
												<img src="assets/images/recent-videos/bicycle.png" alt />
												<button>Liftstyle</button>
												<a href="https://www.youtube.com/watch?v=mxQOOMX4NQM" class="video-btn video-btn-s1" data-type="iframe" tabindex="0">
													<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
														<g transform="translate(-619 -1700)">
															<circle data-name="Ellipse 11" cx="35" cy="35" r="35" transform="translate(619 1700)" fill="#fff" />
															<path data-name="Polygon 3" d="M9,0l9,15H0Z" transform="translate(664.5 1725.5) rotate(90)" />
														</g>
													</svg>
												</a>
											</div>
											<div class="entry-details">
												<h4><a href="blog-single.html">Cristiano Ronaldo’s bicycle kick against Juventus nominated for UEFA Goal of the Year. Is Cristiano Ronaldo all time's GOAT?</a></h4>
												<ul>
													<li><a href="blog.html">10 days ago</a></li>
													<li><a href="blog.html">24 Apr 2022</a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div class="col col-lg-5">
									<div class="right-post">
										<div class="post">
											<div class="entry-media">
												<img src="assets/images/recent-videos/brazil.png" alt />
												<a href="https://www.youtube.com/watch?v=edtgBmOhPrw" class="video-btn video-btn-s1" data-type="iframe" tabindex="0">
													<svg xmlns="http://www.w3.org/2000/svg" width="50" height="70" viewBox="0 0 70 70">
														<g transform="translate(-619 -1700)">
															<circle data-name="Ellipse 11" cx="35" cy="35" r="35" transform="translate(619 1700)" fill="#fff" />
															<path data-name="Polygon 3" d="M9,0l9,15H0Z" transform="translate(664.5 1725.5) rotate(90)" />
														</g>
													</svg>
												</a>
											</div>
											<div class="entry-details">
												<h4><a href="blog-single.html">GOLD Collection | 2018 FIVB Volleyball World Championship </a></h4>
												<ul>
													<li><a href="blog.html">5 mins ago</a></li>
													<li><a href="blog.html">24 Apr 2022</a></li>
												</ul>
											</div>
										</div>
										<div class="post">
											<div class="entry-media">
												<img src="assets/images/recent-videos/relay.png" alt />
												<a href="https://www.youtube.com/watch?v=9v7t65AhP_8" class="video-btn video-btn-s1" data-type="iframe" tabindex="0">
													<svg xmlns="http://www.w3.org/2000/svg" width="50" height="70" viewBox="0 0 70 70">
														<g transform="translate(-619 -1700)">
															<circle data-name="Ellipse 11" cx="35" cy="35" r="35" transform="translate(619 1700)" fill="#fff" />
															<path data-name="Polygon 3" d="M9,0l9,15H0Z" transform="translate(664.5 1725.5) rotate(90)" />
														</g>
													</svg>
												</a>
											</div>
											<div class="entry-details">
												<h4><a href="blog-single.html">Swimming: Women's 4x100m Medley Relay Final | Tokyo 2020 Replays</a></h4>
												<ul>
													<li><a href="blog.html">1 hour ago</a></li>
													<li><a href="blog.html">2 Dec 2021</a></li>
												</ul>
											</div>
										</div>
										<div class="post">
											<div class="entry-media">
												<img src="assets/images/recent-videos/race.png" alt />
												<a href="https://www.youtube.com/watch?v=zMFb8Y2QLPc" class="video-btn video-btn-s1" data-type="iframe" tabindex="0">
													<svg xmlns="http://www.w3.org/2000/svg" width="50" height="70" viewBox="0 0 70 70">
														<g transform="translate(-619 -1700)">
															<circle data-name="Ellipse 11" cx="35" cy="35" r="35" transform="translate(619 1700)" fill="#fff" />
															<path data-name="Polygon 3" d="M9,0l9,15H0Z" transform="translate(664.5 1725.5) rotate(90)" />
														</g>
													</svg>
												</a>
											</div>
											<div class="entry-details">
												<h4><a href="blog-single.html">Men's 100m final...Tokyo 2020</a></h4>
												<ul>
													<li><a href="blog.html">57 mins ago</a></li>
													<li><a href="blog.html">23 Mar 2021</a></li>
												</ul>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</section>
					{/* <!-- end recent-videos-section --> */}


					{/* *************************** start featured-atheletes ****************************** */}

					<section class="featured-articles section-padding">
						<div class="container-1310">

							<div class="row">
								<div class="col col-xs-12">
									<div class="section-title">
										<span>Athletes</span>
										<h2>Featured Athletes</h2>
									</div>
								</div>

								<div class="col col-lg-4">
									<div class="blog-sidebar">
										<div class="widget about-widget">
											<div class="img-holder">
												<img src="assets/images/blog/neeraj.png" alt />
											</div>
											<h4>Neeraj Chpora</h4>
											<span>Javelin</span>
											<p>Neeraj Chopra is an Indian track and field athlete who is the reigning Olympic champion and world championship silver medalist</p>
										</div>
									</div>
								</div>

								<div class="col col-lg-4">
									<div class="blog-sidebar">
										<div class="widget about-widget">
											<div class="img-holder">
												<img src="assets/images/blog/serena.png" alt />
											</div>
											<h4>Serena Williams</h4>
											<span>Tennis</span>
											<p>Serena Jameka Williams is an American professional tennis player.</p>
										</div>
									</div>
								</div>

								<div class="col col-lg-4">
									<div class="blog-sidebar">
										<div class="widget about-widget">
											<div class="img-holder">
												<img src="assets/images/blog/uae.png" alt />
											</div>
											<h4>Tadej POGACAR</h4>
											<span>Road Cycling</span>
											<p>Tadej Pogačar is a Slovenian cyclist who currently rides for UCI WorldTeam UAE Team Emirates</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>


					<section class="trending-articles-section section-padding" style={{ backgroundColor: "black" }}>
						<div class="container-1310">
							<div class="row">
								<div class="col col-xs-12">
									<div class="section-title">
										<span>Watch Live</span>
										<h2 style={{ color: "white" }}>Live Events and Upcoming Events</h2>

										<a href="news2" class="theme-btn">
											view more
											<svg xmlns="http://www.w3.org/2000/svg" width="33" height="13" viewBox="0 0 33 13">
												<g transform="translate(-1585 -1152)">
													<g data-name="Polygon 2" transform="translate(1618 1152) rotate(90)" fill="none">
														<path d="M6.5,0,13,11H0Z" stroke="none" />
														<path d="M 6.5 1.965688705444336 L 1.75245189666748 10 L 11.24754810333252 10 L 6.5 1.965688705444336 M 6.5 9.5367431640625e-07 L 13 11 L 0 11 L 6.5 9.5367431640625e-07 Z" stroke="none" fill="#18171C" />
													</g>
													<rect data-name="Rectangle 46" width="22" height="1" transform="translate(1585 1158)" fill="#18171C" />
												</g>
											</svg>
										</a>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col col-xs-12">
									<div class="trending-articles-grids clearfix">
										<div class="grid">
											<div class="entry-media">
												<img src="assets/images/trending-posts/one.png" alt />
												{/* <button>Wrestling</button> */}
												<button href="news2" class="theme-btn-s3" style={{ backgroundColor: "red", color: "white" }}>Live</button>
											</div>
											<div class="entry-details">
												<div class="author" style={{ color: "white" }}>Wrestling</div>
												<h4><a href="news2" style={{ color: "white" }}>Wrestling | World Championships | Belgrade</a></h4>
												<ul>
													<li><a href="news2">3 Mins Read</a></li>
													<li><a href="news2">9 Oct 2022</a></li>
												</ul>
											</div>
										</div>
										<div class="grid">
											<div class="entry-media">
												<img src="assets/images/trending-posts/golf.png" alt />
												<button href="news2" class="theme-btn-s3" style={{ backgroundColor: "red", color: "white" }}>Live</button>
											</div>
											<div class="entry-details">
												<div class="author" style={{ color: "white" }}>Golf</div>
												<h4><a href="news2" style={{ color: "white" }}>9 for last 10 holes! Jon Rahm Final Round Highlights | 2022 BMW PGA Championship </a></h4>
												<ul>
													<li><a href="news2">5 Mins Read</a></li>
													<li><a href="news2">24 Apr 2022</a></li>
												</ul>
											</div>
										</div>
										<div class="grid">
											<div class="entry-media">
												<img src="assets/images/trending-posts/ball.png" alt />
												<button href="news2" class="theme-btn-s3" style={{ backgroundColor: "white", color: "black" }}>Live on Sep-2</button>
											</div>
											<div class="entry-details">
												<div class="author" style={{ color: "white" }}>Volleyball</div>
												<h4><a href="news2" style={{ color: "white" }}>🇵🇱 POL vs. 🇮🇹 ITA - Highlights Final | Men's World Championships 2022 </a></h4>
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

					<section class="checkout-section section-padding">
						<div class="container-1310">
							<div class="row">
								<div class="col col-xs-12">
									<div class="section-title">
										<span>Medals Won</span>
										<h2>Total Medals</h2>
									</div>
								</div>

								<div class="row">
									<table class="table table-striped table-hover" >
										<thead>
											<tr style={{ backgroundColor: "rgb(54, 69, 79)", color: "white", height: "30px" }}>
												<th scope="col">Rank</th>
												<th scope="col">Country</th>
												<th scope="col"> <img src="assets/images/medals/gold.png" style={{ width: "30px" }} /></th>
												<th scope="col"><img src="assets/images/medals/silver.png" style={{ width: "30px" }} /></th>
												<th scope="col"><img src="assets/images/medals/bronze.png" style={{ width: "30px" }} /></th>
												<th scope="col">Total Medals</th>
												<th scope="col">Actions</th>
											</tr>
										</thead>
										{this.renderTablebody()}
									</table>
								</div>
							</div>
						</div>
					</section>

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

export default Header;