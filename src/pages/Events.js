import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Events extends Component {
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

                    <div class="modal fade" id="modalSchedule" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header text-center">
                                <h4 class="modal-title w-100 font-weight-bold">ADD Events</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="modal-body mx-3">

                                <div class="md-form mb-5">
                                    <i class="fas fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right" for="rank">Rank</label>
                                    <input type="text" id="rank" class="form-control validate"  />
                                </div>
                                <div class="md-form mb-5">
                                    <i class="fas fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right" for="Country">Stadium</label>
                                    <input type="text" id="Country" class="form-control validate" />
                                </div>
                                <div class="md-form mb-5">
                                    <i class="fas fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right" for="gold">Game</label>
                                    <input type="text" id="gold" class="form-control validate" />
                                </div>
                                <div class="md-form mb-5">
                                    <i class="fas fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right" for="silver">Date</label>
                                    <input type="text" id="silver" class="form-control validate" />
                                </div>

                                <br></br>

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
                                    <a href="" class="btn btn-default btn-rounded mb-6" data-toggle="modal" data-target="#modalSchedule"
                                        style={{ backgroundColor: "red", color: "white" }}>ADD SCHEDULE</a>
                                </div>
                                <h2>Events</h2>
                            </div>
                        </div>
                    </div>
                </section>

                    <section class="trending-articles-section section-padding" style={{ marginBottom:"200px"}}>
                        <div class="container-1310">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="13" viewBox="0 0 33 13">
                                                <g data-name="Polygon 2" transform="translate(1618 1152) rotate(90)" fill="none">
                                                    <path d="M6.5,0,13,11H0Z" stroke="none" />
                                                    <path d="M 6.5 1.965688705444336 L 1.75245189666748 10 L 11.24754810333252 10 L 6.5 1.965688705444336 M 6.5 9.5367431640625e-07 L 13 11 L 0 11 L 6.5 9.5367431640625e-07 Z" stroke="none" fill="#18171C" />
                                                </g>
                                        </svg>

                            <div class="row">
                                <div class="col col-xs-12">
                                    <div class="trending-articles-grids clearfix">
                                        <div class="grid">
                                            <div class="entry-media">
                                                <img src="assets/images/trending-posts/one.png" alt />
                                            </div>
                                            <div class="entry-details">
                                                <div class="author">The City Forex Stadium</div>
                                                <h4><a href="news2">Cricket</a></h4>
                                                <ul>
                                                    <li><a href="news2" style={{color:"blue"}}>Live on 8 Dec 2021</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="grid">
                                            <div class="entry-media">
                                                <img src="assets/images/trending-posts/golf.png" alt />
                                            </div>
                                            <div class="entry-details">
                                                <div class="author">Beijing National Stadium</div>
                                                <h4><a href="news2">Judo | Wrestling | Karate</a></h4>
                                                <ul>
                                                    <li><a href="news2" style={{color:"blue"}}>Live on 10 Dec 2021</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="grid">
                                            <div class="entry-media">
                                                <img src="assets/images/trending-posts/ball.png" alt />
                                            </div>
                                            <div class="entry-details">
                                                <div class="author">Shanxi Sports Centre Stadium</div>
                                                <h4><a href="news2">Athletics - Opening and Closing ceremony</a></h4>
                                                <ul>
                                                    <li><a href="news2" style={{color:"blue"}}>Live on 15 Dec 2021</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <br></br>

                    <Footer />
                </div>

            </>
        );
    }
}



export default Events;