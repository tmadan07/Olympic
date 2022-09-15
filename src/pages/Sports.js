import React, { Component } from "react";

class Sports extends Component {
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
                                                <li><a class="dropdown-item" href="#">Login</a></li>
                                                <li><a class="dropdown-item" href="#">Register</a></li>
                                                <li><a class="dropdown-item" href="#">Logout</a></li>
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

                    <div class="modal fade" id="modalNEWS" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header text-center">
                                    <h4 class="modal-title w-100 font-weight-bold">ADD SPORT</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body mx-3">
                                   
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="form34">WORD</label>
                                        <input type="text" id="form32" class="form-control validate" />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="form34">GAME</label>
                                        <input type="text" id="form32" class="form-control validate" />
                                    </div>

                                </div>
                                <div class="modal-footer d-flex justify-content-center">
                                    <button class="btn btn-unique">Upload <i class="fas fa-paper-plane-o ml-1"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section class="page-title">
                        <div class="container-1310">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <div class="text-left">
                                    <a href="" class="btn btn-default btn-rounded mb-6" data-toggle="modal" data-target="#modalNEWS" 
                                            style={{  backgroundColor:"red", color:"white" }}>ADD NEW SPORT</a>
                                    </div>
                                    <h2>Sports</h2>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="featured-articles section-padding">
                        <div class="container-1310">

                            <div class="row">

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                    <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>A</h2>
                                            <p>Alpine Skiing</p>
                                            <p>Archery</p>
                                            <p>Artistic Swimming</p>
                                            <p>Athletics</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>B</h2>
                                            <p>Badminton</p>
                                            <p>Baseball</p>
                                            <p>Basketball</p>
                                            <p>Beach Handball</p>
                                            <p>Beach Volleyball</p>
                                            <p>Boxing</p>
                                            <p>Breaking</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>C</h2>
                                            <p>Cross-Country Skiing</p>
                                            <p>Cycling BMX Racing</p>
                                            <p>Cycling Mountain Bike</p>
                                            <p>Cycling Road</p>
                                            <p>Cycling Track</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>D</h2>
                                            <p>Diving</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>E</h2>
                                            <p>Equestrian</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>F</h2>
                                            <p>Fencing</p>
                                            <p>Football</p>
                                            <p>Freestyle Skiing</p>
                                            <p>Futsal</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>G</h2>
                                            <p>Golf</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>H</h2>
                                            <p>Handball</p>
                                            <p>Hockey</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>I</h2>
                                            <p>Ice Hockey</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>J</h2>
                                            <p>Judo</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>K</h2>
                                            <p>Karate</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>M</h2>
                                            <p>Modern Swimming</p>
                                            <p>Modern Pentathlon</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>R</h2>
                                            <p>Rhythmic Gymnastic</p>
                                            <p>Rowing</p>
                                            <p>Rugby Sevens</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>S</h2>
                                            <p>Shooting</p>
                                            <p>Skateboarding</p>
                                            <p>Ski Jumping</p>
                                            <p>Skeleton</p>
                                            <p>Ski Mountaineering</p>
                                            <p>Snowboard</p>
                                            <p>Speed Skating</p>
                                            <p>Sport Climbing</p>
                                            <p>Surfing</p>
                                            <p>Swimming</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>T</h2>
                                            <p>Table Tennis</p>
                                            <p>Table Tennis</p>
                                            <p>Tennis</p>
                                            <p>Trampoline</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>V</h2>
                                            <p>Volleyball</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-3">
                                    <div class="blog-sidebar">
                                        <div class="widget about-widget">
                                            <h2 style={{ color: "red" }}>W</h2>
                                            <p>Water Polo</p>
                                            <p>Weightlifting</p>
                                            <p>Wrestling</p>
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

export default Sports;