import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function SignUpdate() {

    const { id } = useParams();
    const [register, setRegister] = useState({
        firstName: '',
        country: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });

    const initialState = {
        firstName: '',
        country: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    }


    const onInputChange = e => {
        setRegister({ ...register, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const data = {
        firstName: register.firstName,
        lastName: register.lastName,
        username: register.username,
        email: register.email,
        country: register.country,
        password: register.password,
    };
    
    const navigate = useNavigate();

    const Update = async(e) => {
            e.preventDefault();
             axios.put(`http://localhost:8080/api/v1/register/${id}`, data);
             setRegister(initialState);
        };

        const loadUser = async () => {
            const result = await axios.get(`http://localhost:8080/api/v1/register/${id}`);
            setRegister(result.data);
        };

        return (
            <div className="container">
                <br></br>
                <br></br>
                <br></br>
                <div className="w-50 mx-auto shadow p-20">
                    <h2 className="text-center mb-4">Edit Users</h2>
                    <br></br>
                    <br></br>
                    <br></br>

                    <form onSubmit={Update}>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">First Name</label>
                            <div class="col-sm-10">
                                <input type="text" className="form-control form-control-lg" name="firstName" value={register.firstName} onChange={e => onInputChange(e)} />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Last Name</label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    name="lastName"
                                    value={register.lastName} onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Username</label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    name="username"
                                    value={register.username} onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    name="email"
                                    value={register.email} onChange={e => onInputChange(e)}
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
                                    value={register.country} onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Password</label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    name="password"
                                    value={register.password} onChange={e => onInputChange(e)}
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

    export default SignUpdate;
	
	
	