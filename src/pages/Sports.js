import { getDefaultNormalizer } from "@testing-library/react";
import React, { Component } from "react";
import { api } from '../utils';
import Navbar from "./Navbar";
import Footer from "./Footer";

class Sports extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            word: '',
            game: ''

        }
        this.state = {
            sports: [],
            word: '',
            game: '',
            showAdmin: undefined
        }
    }

    componentDidMount() {
        this.getAllSports();
    }

    // renderSports(){
    //     if(word==='A'){
    //         return A
    //     }
    // }

    async getAllSports() {
        let responseJson = await api.getAllSports();
        this.setState({ sports: responseJson })
        if (responseJson = window.localStorage.getItem("roles").match("ROLE_ADMIN")) {
			this.setState({  showAdmin: "ROLE_ADMIN"
		 })
        }
    }

    handleChange = input => event => {
        this.setState({
            [input]: event.target.value
        })
    }

    async createSports() {
        const {
            word,
            game,
        } = this.state

        let responseJson = await api.createSports({
            "word": word,
            "game": game
        });

        this.setState(previousState => ({
            sports: [...previousState.sports, responseJson]
        }));
        this.setState(this.initialState);
    }

    renderTablebody() {
        const { sports, showAdmin } = this.state;
        if (sports && sports.length > 0) {
            return (

                <>
                    {
                        sports.map((datum, index) => {
                            return (
                               
                                    <div class="col col-lg-3">
                                        <div class="blog-sidebar">
                                            <div class="widget about-widget">
                                                <h2 style={{ color: "red" }}>{datum.word}</h2>
                                                <p>{datum.game}</p>
                                            </div>
                                        </div>
                                    </div>
                               
                            )
                        })
                    }

                </>
            )
        }
        else {
            return (
                <p>No data found</p>
            )
        }
    }


    render() {
        const {showAdmin} = this.state;
        return (
            <>

                <div class="page-wrapper">

                <Navbar />
					<br></br>
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
                                        <label data-error="wrong" data-success="right" for="word">CHARACTER</label>
                                        <input type="text" id="word" class="form-control validate" value={this.state.word} onChange={this.handleChange('word')} />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="game">GAME</label>
                                        <input type="text" id="game" class="form-control validate" value={this.state.game} onChange={this.handleChange('game')} />
                                    </div>

                                </div>
                                <div class="modal-footer d-flex justify-content-center">
                                    <button class="btn btn-unique" onClick={this.createSports.bind(this)}>Upload <i class="fas fa-paper-plane-o ml-1"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section class="page-title">
                        <div class="container-1310">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <div class="text-left">
                                        {showAdmin && (
                                        <a href="" class="btn btn-default btn-rounded mb-6" data-toggle="modal" data-target="#modalNEWS"
                                            style={{ backgroundColor: "red", color: "white" }}>ADD NEW SPORT</a>
                                            )}
                                    </div>
                                    <h2>Sports</h2>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="featured-articles section-padding">
                        <div class="container-1310">
                            {/* {this.renderTablebody()}
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br> */}

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

                    <Footer/>

                </div>

            </>
        )
    }
}

export default Sports;