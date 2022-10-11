import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function MedalsUpdate() {

    const { id } = useParams();
    const [medal, setMedal] = useState({
        rank: '',
        country: '',
        gold: '',
        silver: '',
        bronze: '',
        total: ''
    });

    const initialState = {
        rank: '',
        country: '',
        gold: '',
        silver: '',
        bronze: '',
        total: ''
    }


    const onInputChange = e => {
        setMedal({ ...medal, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const data = {
        rank: parseInt(medal.rank),
        country: medal.country,
        gold: parseInt(medal.gold),
        silver: parseInt(medal.silver),
        bronze: parseInt(medal.bronze),
        total: parseInt(medal.total),
    };
    
    const navigate = useNavigate();

    const Update = async(e) => {
            e.preventDefault();
             axios.put(`http://localhost:8080/api/v1/medal/${id}`, data);
             setMedal(initialState);
        };

        const loadUser = async () => {
            const result = await axios.get(`http://localhost:8080/api/v1/medal/${id}`);
            setMedal(result.data);
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
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Rank</label>
                            <div class="col-sm-10">
                                <input type="number" className="form-control form-control-lg" name="rank" value={medal.rank} onChange={e => onInputChange(e)} />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Country</label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    name="country"
                                    value={medal.country} onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Gold</label>
                            <div class="col-sm-10">
                                <input
                                    type="number"
                                    className="form-control form-control-lg"
                                    name="gold"
                                    value={medal.gold} onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Silver</label>
                            <div class="col-sm-10">
                                <input
                                    type="number"
                                    className="form-control form-control-lg"
                                    name="silver"
                                    value={medal.silver} onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Bronze</label>
                            <div class="col-sm-10">
                                <input
                                    type="number"
                                    className="form-control form-control-lg"
                                    name="bronze"
                                    value={medal.bronze} onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Total Medals</label>
                            <div class="col-sm-10">
                                <input
                                    type="number"
                                    className="form-control form-control-lg"
                                    name="total"
                                    value={medal.total} onChange={e => onInputChange(e)}
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

    export default MedalsUpdate;
	
	
	