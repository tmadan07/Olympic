import React, { Component } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

class Medals extends Component {
    constructor(props) {
        super(props);

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
                                        <label class="form-label" for="uploadphoto">Upload a photo</label>
                                        <input type="file" class="form-control" id="uploadphoto" />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="FullName">FullName</label>
                                        <input type="text" id="FullName" class="form-control validate"  />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="Country">Country</label>
                                        <input type="text" id="Country" class="form-control validate" />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="Sports">Sports</label>
                                        <input type="text" id="Sports" class="form-control validate"  />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="totalMedals">Total Medals</label>
                                        <input type="text" id="totalMedals" class="form-control validate"  />
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
                                        <a href="" class="btn btn-default btn-rounded mb-6" data-toggle="modal" data-target="#modalMedals"
                                            style={{ backgroundColor: "red", color: "white" }}>ADD MEDALS</a>
                                    </div>
                                    <h2>Total Medals</h2>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <li class="nav-item dropdown">
											<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src="assets/images/avatar.png" style={{width:"30px", height:"30px", position:"absolute"}}/>
											</a>
											<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="/login">Login</a></li>
												<li><a class="dropdown-item" href="/register">Register</a></li>
												<li><a class="dropdown-item" href="/logout">Logout</a></li>
											</div>
										</li> */}


                    <section class="checkout-section section-padding">
                        <div class="container-1310">
                            <div class="row">
                                <table class="table" >
                                    <thead>
                                        <tr style={{ backgroundColor: "rgb(54, 69, 79)",color:"white" }}>
                                            <th scope="col">Rank</th>
                                            <th scope="col">Country</th>
                                            <th scope="col"> <img src="assets/images/medals/gold.png" style={{width:"30px"}}/></th>
                                            <th scope="col"><img src="assets/images/medals/silver.png" style={{width:"30px"}}/></th>
                                            <th scope="col"><img src="assets/images/medals/bronze.png" style={{width:"30px"}}/></th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    {/* {this.renderTablebody()} */}
                                    <tbody>

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>

        );
    }
}


export default Medals;