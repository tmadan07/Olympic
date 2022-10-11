import React, { Component } from 'react';
import { api } from '../utils';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			email: '',
			showLogged: false,
			showLogin: true,
			showAdmin: undefined,
			currentUser: undefined,
		}
	}

	componentDidMount() {
		this.handleLogin();
	}

	// async getCurrentUser() {
	// 	return JSON.parse(localStorage.getItem('user'));;
	//   }

	async handleLogin() {
		// var { username } = this.state;
		let responseJson = await api.getAllUsers();
		if (responseJson = window.localStorage.getItem("isLoggedIn")) {
			this.setState({ showLogged: true, users: responseJson, showLogin: false,
				 })
		}
		 if (responseJson = window.localStorage.getItem("roles").match("ROLE_USER")) {
					this.setState({ currentUser: "ROLE_USER"
				 })
		}	
		if (responseJson = window.localStorage.getItem("roles").match("ROLE_ADMIN")) {
			this.setState({  showAdmin: "ROLE_ADMIN"
		 })
}	
		console.log(responseJson);
	}

	logOut() {
		localStorage.clear();
	}

	render() {
		const { showLogged, showLogin,showAdmin ,currentUser } = this.state;
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
												{showAdmin && (
													<li><a href="/register" style={{ textDecoration:"underline", textDecorationColor:"red" }}>User Details</a></li>
												)}
											</ul>
										</div>
										<div class="social-link" >
											<ul>

											   

												{currentUser && (
													<li><a><button class="btn btn-success" style={{ height: "34px", width: "80px" }}>user</button></a></li>)}
												{showAdmin && (
													<li><a><button class="btn btn-success" style={{ height: "34px", width: "80px" }}>admin</button></a></li>)}
												{showLogin && (
													<li><a href="/login"><button class="btn btn-info" style={{ height: "34px", width: "80px" }}>Login</button></a></li>)}
												{showLogin && (
													<li><a href="/register"><button class="btn btn-info" style={{ height: "34px", width: "80px" }}>Signup</button></a></li>
												)}

												{showLogged && (
													<li><a href="/" onClick={this.logOut}><button class="btn btn-danger" style={{ height: "34px", width: "80px" }}>Logout</button></a></li>
												)}

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

								{showLogged && (
									<li class="current-menu-item"><a href="/live">Live</a></li> )}
                                 {showLogin && (
									<li class="current-menu-item"><a href="/nolive">Live</a></li> )}

									<li class="current-menu-item"><a href="/news">News</a></li>

									<li class="current-menu-item"><a href="/sports">Sports</a></li>

									<li class="current-menu-item"><a href="/athletes">Athletes</a></li>

									<li class="current-menu-item"><a href="/events">Events</a></li>

									<li class="current-menu-item"><a href="/medals">Achievements</a></li>

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