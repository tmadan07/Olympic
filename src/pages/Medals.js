import React, { Component } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { api } from '../utils';

class Medals extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            rank: '',
            country: '',
            gold: '',
            silver: '',
            bronze: '',
            total: ''
        }

        this.state = {
            medals: [],
            medal_details:{},
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

    async getAllMedals(medal_details) {
        let responseJson = await api.getAllMedals(medal_details);
        this.setState({ medals: responseJson, medal_details:responseJson })
    }

    handleChange = input => event => {
        this.setState({
            [input]: event.target.value
        })
    }

    handleDoubleClick = (medal) => {
        this.setState({
            medal_details: medal
        })
        window.openModal('#medalsDetails')
    }

    async createMedals() {
        const {
            rank,
            country,
            gold,
            silver,
            bronze,
            total

        } = this.state

        let responseJson = await api.createMedals({
            "rank": rank,
            "country": country,
            "gold": gold,
            "silver": silver,
            "bronze": bronze,
            "total": total
        });

        this.setState(previousState => ({
            medals: [...previousState.medals, responseJson]
        }));
        this.setState(this.initialState);
    }

    renderMedalDetails = () => {
        const { medal_details } = this.state;
        if (medal_details) {
            return (
                <table class="table">
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>RANK</th>
                            <td>{medal_details.rank}</td>
                        </tr>
                        <tr>
                            <th>COUNTRY</th>
                            <td>{medal_details.country}</td>
                        </tr>
                        <tr>
                            <th>GOLD</th>
                            <td>{medal_details.gold}</td>
                        </tr>
                        <tr>
                            <th>SILVER</th>
                            <td>{medal_details.silver}</td>
                        </tr>
                        <tr>
                            <th>BRONZE</th>
                            <td>{medal_details.bronze}</td>
                        </tr>
                        <tr>
                            <th>total MEDALS</th>
                            <td>{medal_details.total}</td>
                        </tr>

                    </tbody>
                </table>
            )
        }
        else {
            return (
                <div>No data found</div>
            )
        }
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

            <div class="page-wrapper">
                <Navbar />
                <br></br>
                <br></br>

                <div class="modal fade" id="modalMedals" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header text-center">
                                <h4 class="modal-title w-100 font-weight-bold">ADD Medals</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="modal-body mx-3">

                                <div class="md-form mb-5">
                                    <i class="fas fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right" for="rank">Rank</label>
                                    <input type="text" id="rank" class="form-control validate" value={this.state.rank} onChange={this.handleChange('rank')} />
                                </div>
                                <div class="md-form mb-5">
                                    <i class="fas fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right" for="Country">Country</label>
                                    <input type="text" id="Country" class="form-control validate" value={this.state.country} onChange={this.handleChange('country')} />
                                </div>
                                <div class="md-form mb-5">
                                    <i class="fas fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right" for="gold">Gold</label>
                                    <input type="text" id="gold" class="form-control validate" value={this.state.gold} onChange={this.handleChange('gold')} />
                                </div>
                                <div class="md-form mb-5">
                                    <i class="fas fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right" for="silver">Silver</label>
                                    <input type="text" id="silver" class="form-control validate" value={this.state.silver} onChange={this.handleChange('silver')} />
                                </div>
                                <div class="md-form mb-5">
                                    <i class="fas fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right" for="bronze">Bronze</label>
                                    <input type="text" id="bronze" class="form-control validate" value={this.state.bronze} onChange={this.handleChange('bronze')} />
                                </div>
                                <div class="md-form mb-5">
                                    <i class="fas fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right" for="totalMedals">Total Medals</label>
                                    <input type="text" id="totalMedals" class="form-control validate" value={this.state.total} onChange={this.handleChange('total')} />
                                </div>

                                <br></br>

                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                <button class="btn btn-unique" onClick={this.createMedals.bind(this)}>Upload <i class="fas fa-paper-plane-o ml-1"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="page-title">
                    <div class="container-1310">
                        <div class="row">
                            <div class="col col-xs-12">
                                <div class="text-left">
                                    <a href="" class="btn btn-default btn-rounded mb-6" data-toggle="modal" data-target="#modalMedals"
                                        style={{ backgroundColor: "red", color: "white" }}>ADD MEDALS</a>
                                </div>
                                <h2>Total Medals</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="checkout-section section-padding">
                    <div class="container-1310">
                        <div class="row">
                            <table class="table table-striped table-hover" >
                                <thead>
                                    <tr style={{ backgroundColor: "rgb(54, 69, 79)", color: "white",height:"30px" }}>
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
                </section>

                <div class="modal fade" id="medalsDetails" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable modal-xl">
                        <div class="modal-content">
                            <div class="modal-header border-bottom-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                {this.renderMedalDetails()}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

        );
    }
}


export default Medals;