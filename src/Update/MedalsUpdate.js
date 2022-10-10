import React, { Component } from 'react';
import { api } from '../utils';
import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class MedalsUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            medals: [],
            rank: '',
            country: '',
            gold: '',
            silver: '',
            bronze: '',
            total: ''
        }
    }

    componentDidMount() {
        let { id } = this.props.params;
        // this.fetchData(id);
        this.getMedals(id);
    }

    async getMedals(id) {
        const {medals} = this.state;
        let responseJson = await api.getMedals(id);
        this.setState({ medals: responseJson })
        medals(responseJson.data)
    }

    handleChange = input => event => {
        this.setState({
            [input]: event.target.value
        })
    }

    updateMedals = async (medal_id) => {

        let data = {
            rank: parseInt(this.state.rank),
            country: this.state.country,
            gold: parseInt(this.state.gold),
            silver: parseInt(this.state.silver),
            bronze: parseInt(this.state.bronze),
            total: parseInt(this.state.total),
        }

        let responseJson = await api.updateMedals(medal_id, data)

        console.log(responseJson + "clicked");
        // window.closeModel('#modalUpdateMedals');

    }

    render() {
        const { medal_id } = this.state;
        return (
            <>

                <div className="container">
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="w-50 mx-auto shadow p-20">
                        <h2 className="text-center mb-4">Edit Achievements</h2>
                        <br></br>
                        <br></br>
                        <br></br>

                        <form>

                            <div class="form-group row">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Rank</label>
                                <div class="col-sm-10">
                                    <input type="text" className="form-control form-control-lg" name="name" value={this.state.rank} onChange={this.handleChange('rank')} />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Country</label>
                                <div class="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        name="username"
                                        value={this.state.country} onChange={this.handleChange('country')}
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Gold</label>
                                <div class="col-sm-10">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        name="email"
                                        value={this.state.gold} onChange={this.handleChange('gold')}
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Silver</label>
                                <div class="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        name="phone"
                                        value={this.state.silver} onChange={this.handleChange('silver')}
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Bronze</label>
                                <div class="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        name="website"
                                        value={this.state.bronze} onChange={this.handleChange('bronze')}
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Total Medals</label>
                                <div class="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        name="TotalMedals"
                                        value={this.state.total} onChange={this.handleChange('total')}
                                    />
                                </div>
                            </div>

                            <br></br>
                            <br></br>
                            <div class="container bg-light">
                                <div class="col-md-12 text-right">
                                    <button type="button" class="btn btn-primary" style={{ width: "950px", height:"40px" }}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </>
        );
    }
}

export default withParams(MedalsUpdate);