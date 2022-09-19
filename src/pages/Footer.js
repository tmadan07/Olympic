import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
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

            </>
        );
    }
}



export default Footer;