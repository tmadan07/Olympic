import React, { Component } from 'react';

class Navbar extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<>


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
										<div class="social-link" >
											<ul>
												<li><a href="/login"><button class="btn btn-info" style={{ height: "34px", width: "80px" }}>Login</button></a></li>
												<li><a href="/register"><button class="btn btn-info" style={{ height: "34px", width: "80px" }}>Signup</button></a></li>
												<li><a href="/logout"><button class="btn btn-danger" style={{ height: "34px", width: "80px" }}>Logout</button></a></li>
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

									<li class="current-menu-item"><a href="/events">Events</a></li>

									<li class="current-menu-item"><a href="/medals">Achievements</a></li>

									{/* <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Achievements
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li><a class="dropdown-item" href="/medals">Total Medals</a></li>
                                                <li><a class="dropdown-item" href="/records">Records</a></li>
                                            </div>
                                        </li> */}

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




			</>
		)
	}

}

export default Navbar;