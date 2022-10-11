import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class GuestLive extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div class="page-wrapper">

                <Navbar />
                <br></br>
                <br></br>

                <section class="page-title">
                    <div class="container-1310">
                        <div class="row">
                            <div class="col col-xs-12">
                                <h2>Login to watch Live</h2>
                                <br></br>
                                <br></br>
                                <Link
                    class="btn btn-outline-primary" to={"/register"}>
                    <button style={{ backgroundColor: "blue", color: "white", textAlign:"center", height:"48px", width:"200px" }}>Register</button>
                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                

            </div>

        );
    }
}


export default GuestLive;