import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


class News extends Component {
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

{/* ************************ WITH PHOTOS ************************************* */}
                    <div class="modal fade" id="modalPhoto" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
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
                                        <label data-error="wrong" data-success="right" for="form34">Headline</label>
                                        <textarea type="text" id="form8" class="md-textarea form-control" rows="2"></textarea>
                                    </div>
                                    <br></br>
                                    <div class="md-form mb-5">
                                        <label class="form-label" for="customFile">Upload a photo</label>
                                        <input type="file" class="form-control" id="customFile" />
                                    </div>
                                    <br></br>
                                    <div class="md-form">
                                        <i class="fas fa-pencil prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="form8">Message</label>
                                        <textarea type="text" id="form8" class="md-textarea form-control" rows="3"></textarea>
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
                                    <div class="inner">
                                        <div class="text-left" >
                                            <a href="" class="btn btn-default btn-rounded mb-6" data-toggle="modal" data-target="#modalPhoto"
                                                style={{ backgroundColor: "red", color: "white" }}>ADD NEWS</a>
                                        </div>
                                        <h2>Latest News</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="blog-s2-pg-section section-padding thaia-stk-sidebar">
                        <div class="container-1310">
                            <div class="row">
                                <div class="col col-lg-8 content">
                                    <div class="blog-content">
                                        <div class="posts">
                                            <div class="post">
                                                <div class="entry-media">
                                                    <img src="assets/images/featured-articles/madrid.png" alt />
                                                </div>
                                                <div class="entry-details">
                                                    <h4><a href="news2">Premier League pause, Real Madrid in form: Weekend review</a></h4>
                                                    <ul>
                                                        <li><a href="blog.html">1 hour ago</a></li>
                                                        <li><a href="blog.html">24 Apr 2022</a></li>
                                                    </ul>
                                                    <p>The weekend in European football saw Real Madrid and Paris Saint-Germain take care of business in their respective league matches.</p>
                                                    <a href="news2" class="read-more">Read more</a>
                                                </div>
                                            </div>
                                            <div class="post format-video">
                                                <div class="entry-media video-holder">
                                                    <img src="assets/images/featured-articles/jump.png" alt />
                                                    <a href="https://www.youtube.com/watch?v=9v7t65AhP_8" class="video-btn" data-type="iframe">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                                                            <g id="video-btn" transform="translate(-619 -1700)">
                                                                <circle id="Ellipse_11" data-name="Ellipse 11" cx="35" cy="35" r="35" transform="translate(619 1700)" fill="#fff" />
                                                                <path id="Polygon_3" data-name="Polygon 3" d="M9,0l9,15H0Z" transform="translate(664.5 1725.5) rotate(90)" />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div class="entry-details">
                                                    <h4><a href="news2">Eleanor Patterson: From quitting high jump to world champion</a></h4>
                                                    <ul>
                                                        <li><a href="blog.html">1 hour ago</a></li>
                                                        <li><a href="blog.html">2 Dec 2021</a></li>
                                                    </ul>
                                                    <p>The Australian high jumper retired from the sport in 2018 at the age of 22 but came back after over a year away, with renewed...</p>
                                                </div>
                                            </div>
                                            <div class="post format-gallery">
                                                <div class="entry-media">
                                                    <div class="post-slider">
                                                        <img src="assets/images/featured-articles/USA.png" alt />
                                                    </div>
                                                </div>
                                                <div class="entry-details">
                                                    <h4><a href="news2">Trailer released for 'The Redeem Team' about Team USA's</a></h4>
                                                    <ul>
                                                        <li><a href="blog.html">15 days ago</a></li>
                                                        <li><a href="blog.html">2 Jan 2022</a></li>
                                                    </ul>
                                                    <p>The new documentary film about how Kobe Bryant and USA's NBA stars regained Olympic gold, to be launched worldwide on 7 October.</p>
                                                    <a href="news2" class="read-more">Read more</a>
                                                </div>
                                            </div>
                                            <div class="post">
                                                <div class="entry-media">
                                                    <img src="assets/images/featured-articles/cycle.png" alt />
                                                </div>
                                                <div class="entry-details">
                                                    <h4><a href="news2">2022 UCI Road World Championships in Wollongong: Preview</a></h4>
                                                    <ul>
                                                        <li><a href="blog.html">5 hour ago</a></li>
                                                        <li><a href="blog.html">10 June 2022</a></li>
                                                    </ul>
                                                    <p>The world’s best cyclists are set to compete for the coveted rainbow jersey in Wollongong, Australia, at the 2022 UCI Road World Championships.</p>
                                                    <a href="news2" class="read-more">Read more</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pagination-wrapper pagination-wrapper-left">
                                            <ul class="pg-pagination">
                                                <li>
                                                    <a href="#" aria-label="Previous">
                                                        <i class="fi ti-angle-left"></i>
                                                    </a>
                                                </li>
                                                <li class="active"><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li>
                                                    <a href="#" aria-label="Next">
                                                        <i class="fi ti-angle-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
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
                                            <a href="news2" class="theme-btn-s3" style={{ backgroundColor: "blue", color: "white" }}>See more</a>
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

                    <Footer/>

                </div>

            </>
        )
    }

}

export default News;