import React, { Component } from 'react';


class Athletes extends Component {

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

                    <div class="modal fade" id="modalATHLETES" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
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
                                        <label data-error="wrong" data-success="right" for="form34">FullName</label>
                                        <input type="text" id="form32" class="form-control validate" />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="form34">Country</label>
                                        <input type="text" id="form32" class="form-control validate" />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="form34">Sports</label>
                                        <input type="text" id="form32" class="form-control validate" />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="form34">Total Medals</label>
                                        <input type="text" id="form32" class="form-control validate" />
                                    </div>
                                    <br></br>
                                    <div class="md-form mb-5">
                                        <label class="form-label" for="customFile">Upload a photo</label>
                                        <input type="file" class="form-control" id="customFile" />
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
                                    <a href="" class="btn btn-default btn-rounded mb-6" data-toggle="modal" data-target="#modalATHLETES" 
                                            style={{  backgroundColor:"red", color:"white" }}>ADD NEW ATHLETES</a>
                                       
                                    </div>
                                    <h2>ATHLETES</h2>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section class="cart-section woocommerce-cart section-padding">
                        <div class="container-1310">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <div class="woocommerce">
                                        <form action="/" method="post" >
                                            <table class="shop_table shop_table_responsive cart">
                                                <thead>
                                                    <tr>
                                                        <th class="product-remove">&nbsp;</th>
                                                        <th class="product-thumbnail">&nbsp;</th>
                                                        <th class="product-name">FullName</th>
                                                        <th class="product-price">Country</th>
                                                        <th class="product-quantity">Sports</th>
                                                        <th class="product-subtotal">Total Medals</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="cart_item">
                                                        <td class="product-remove"> <a>1</a> </td>
                                                        <td class="product-thumbnail">
                                                            <a href="">
                                                                <img width="57" height="70" src="assets/images/athletes/japan.png"
                                                                    class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" />
                                                            </a>
                                                        </td>
                                                        <td class="product-name" data-title="Product"> <a>YUTO HORIGOME</a></td>
                                                        <td class="product-price" data-title="Price"><a>Japan</a> </td>
                                                        <td class="product-quantity" data-title="Quantity">
                                                            <div class="quantity"><a>Skateboard</a></div>
                                                        </td>
                                                        <td class="product-subtotal" data-title="Total"><a>3</a> </td>
                                                    </tr>

                                                    <tr class="cart_item">
                                                        <td class="product-remove"> <a>2</a> </td>
                                                        <td class="product-thumbnail">
                                                            <a href="">
                                                                <img width="57" height="70" src="assets/images/athletes/neeraj.png"
                                                                    class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" />
                                                            </a>
                                                        </td>
                                                        <td class="product-name" data-title="Product"> <a>Neeraj Chopra</a></td>
                                                        <td class="product-price" data-title="Price"><a>India</a> </td>
                                                        <td class="product-quantity" data-title="Quantity">
                                                            <div class="quantity"><a>Javelin</a></div>
                                                        </td>
                                                        <td class="product-subtotal" data-title="Total"><a>7</a> </td>
                                                    </tr>

                                                    <tr class="cart_item">
                                                        <td class="product-remove"> <a>3</a> </td>
                                                        <td class="product-thumbnail">
                                                            <a href="">
                                                                <img width="57" height="70" src="assets/images/athletes/brazil.png"
                                                                    class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" />
                                                            </a>
                                                        </td>
                                                        <td class="product-name" data-title="Product"> <a>Rayssa Leal</a></td>
                                                        <td class="product-price" data-title="Price"><a>Brazil</a> </td>
                                                        <td class="product-quantity" data-title="Quantity">
                                                            <div class="quantity"><a>Skateboard</a></div>
                                                        </td>
                                                        <td class="product-subtotal" data-title="Total"><a>1</a> </td>
                                                    </tr>

                                                    <tr class="cart_item">
                                                        <td class="product-remove"> <a>4</a> </td>
                                                        <td class="product-thumbnail">
                                                            <a href="">
                                                                <img width="57" height="70" src="assets/images/athletes/japan1.png"
                                                                    class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" />
                                                            </a>
                                                        </td>
                                                        <td class="product-name" data-title="Product"> <a>Tomoa Narasaki</a></td>
                                                        <td class="product-price" data-title="Price"><a>Japan</a> </td>
                                                        <td class="product-quantity" data-title="Quantity">
                                                            <div class="quantity"><a>Sport Climber</a></div>
                                                        </td>
                                                        <td class="product-subtotal" data-title="Total"><a>3</a> </td>
                                                    </tr>




                                                </tbody>
                                            </table>
                                        </form>

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

export default Athletes;