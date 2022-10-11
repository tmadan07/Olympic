import React, { Component } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { api } from '../utils';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
            rank: '',
            country: '',
            gold: '',
            silver: '',
            bronze: '',
            total: '',
            showAdmin: undefined
        }
    }

    componentDidMount() {
        this.getAllMedals();
    }

    async getAllMedals() {
        let responseJson = await api.getAllMedals();
        this.setState({ medals: responseJson
		 })
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

    deleteMedals = async (medal_id) => {

        let responseJson = await api.deleteMedals(medal_id)

        console.log(responseJson + "clicked");
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
            "rank": parseInt(rank),
            "country": country,
            "gold": parseInt(gold),
            "silver": parseInt(silver),
            "bronze": parseInt(bronze),
            "total": parseInt(total)
        });

        this.setState(previousState => ({
            medals: [...previousState.medals, responseJson]
        }));
        this.setState(this.initialState);
    }

    deleteMedals = async (medal_id) => {

        let responseJson = await api.deleteMedals(medal_id)

        console.log(responseJson + "clicked");
    }



    renderTablebody() {
        const { medals, showAdmin } = this.state;
        if (medals && medals.length > 0) {
            return (
                <tbody>
                    {
                        medals.map((datum, index) => {
                            return (
                                <tr key={index}>
                                    <td>{datum.rank}</td>
                                    <td>{datum.country}</td>
                                    <td>{datum.gold}</td>
                                    <td>{datum.silver}</td>
                                    <td>{datum.bronze}</td>
                                    <td>{datum.total}</td>
                                    {showAdmin &&(
                                    <td>
                                        <Link
                                            class="btn btn-outline-primary mr-2" to={`/medal/${datum.id}`}>
                                                <button style={{ backgroundColor: "green", color: "white" }}>Update</button> 
                                        </Link>
                                        <button style={{ backgroundColor: "red", color: "white" }} onClick={()=>this.deleteMedals(datum.id)}>Delete</button></td>
                                    )}
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
        const {showAdmin} = this.state;
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
                            {showAdmin && (				
                                <div class="text-left">
                                    <a href="" class="btn btn-default btn-rounded mb-6" data-toggle="modal" data-target="#modalMedals"
                                        style={{ backgroundColor: "red", color: "white" }}>ADD MEDALS</a>
                                </div>
                                )}
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
                                    <tr style={{ backgroundColor: "rgb(54, 69, 79)", color: "white", height: "30px" }}>
                                        <th scope="col">Rank</th>
                                        <th scope="col">Country</th>
                                        <th scope="col"> <img src="assets/images/medals/gold.png" style={{ width: "30px" }} /></th>
                                        <th scope="col"><img src="assets/images/medals/silver.png" style={{ width: "30px" }} /></th>
                                        <th scope="col"><img src="assets/images/medals/bronze.png" style={{ width: "30px" }} /></th>
                                        <th scope="col">Total Medals</th>
                                        {showAdmin &&(
                                        <th scope="col">Actions</th> )}
                                    </tr>
                                </thead>
                                {this.renderTablebody()}
                            </table>

                        </div>
                    </div>
                </section>
                

                <Footer />
            </div>

        );
    }
}

function WrapperMedals(props) {
    let navigate = useNavigate();
    return <Medals {...props} navigate={navigate} />
}

export default WrapperMedals;

// export default Medals;