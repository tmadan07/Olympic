import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function AthletesUpdate() {

    const { id } = useParams();
    const [athlete, setAthlete] = useState({
            image: '',
            fullname: '',
            country: '',
            totalMedals: '',
            sport: ''
    });

    const initialState = {
        image: '',
            fullname: '',
            country: '',
            totalMedals: '',
            sport: '',
    }



    const onInputChange = e => {
        setAthlete({ ...athlete, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const data = {
        image: athlete.image,
        fullname: athlete.fullname,
        country: athlete.country,
        totalMedals: parseInt(athlete.totalMedals),
        sport: athlete.sport
    };
    
    const navigate = useNavigate();


    const Update = async(e) => {
            e.preventDefault();
             axios.put(`http://localhost:8080/api/v1/athlete/${id}`, data);
             setAthlete(initialState);
        };

        const loadUser = async () => {
            const result = await axios.get(`http://localhost:8080/api/v1/athlete/${id}`);
            setAthlete(result.data);
        };

        return (
            <div className="container">
                <br></br>
                <br></br>
                <br></br>
                <div className="w-50 mx-auto shadow p-20">
                    <h2 className="text-center mb-4">Edit Achievements</h2>
                    <br></br>
                    <br></br>
                    <br></br>

                    <form onSubmit={Update}>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Image</label>
                            <div class="col-sm-10">
                                <input type="image" className="form-control form-control-lg" name="image" value={athlete.image} onChange={e => onInputChange(e)} />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">FullName</label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    name="fullname"
                                    value={athlete.fullname} onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Country</label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    name="country"
                                    value={athlete.country} onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Sport</label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    name="sport"
                                    value={athlete.sport} onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Total Medals</label>
                            <div class="col-sm-10">
                                <input
                                    type="number"
                                    className="form-control form-control-lg"
                                    name="totalMedals"
                                    value={athlete.totalMedals} onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>

                    </form>
                    <br></br>
                    <br></br>
                    <div class="container bg-light">
                        <div class="col-md-12 text-right">
                            <button type="button" class="btn btn-primary" style={{ width: "950px", height: "40px" }} onClick={Update}>Submit</button>
                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div class="container bg-light">
                        <div class="col-md-12 text-right">
                        <button type="button" class="btn btn-danger" style={{ width: "200px", height: "40px" }} onClick={() => navigate(-1)} >Back</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    };

    export default AthletesUpdate;
	
	
	