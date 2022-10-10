import React, { Component } from 'react';
import { api } from '../utils';

class AthletesUpdate extends Component {
    constructor(props) {
        this.state = {
            athletes: [],
            id: 0,
            image: '',
            fullname: '',
            country: '',
            totalMedals: '',
            sport: ''
        }

    }

    updateAthletes = async (athlete_id) => {

        let data = {
            totalMedals: parseInt(this.state.totalMedals),
            fullname: this.state.fullname,
            country: this.state.country,
        }

        let responseJson = await api.updateAthletes(athlete_id, data)

        console.log(responseJson + "clicked");
        // window.closeModel('#changeAccountGroup');

    }

    render() {
        return (
            <div>
                <p>I am madan athlrtesss</p>

            </div>
        );
    }
}


export default AthletesUpdate;