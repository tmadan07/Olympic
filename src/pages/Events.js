import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Events extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <div class="page-wrapper">
                    <Navbar />
                    <br></br>
                    <br></br>

                    <p>Inside</p>

                    <Footer />
                </div>
                

            </>
        );
    }
}



export default Events;