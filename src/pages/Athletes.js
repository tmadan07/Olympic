import React, { Component } from 'react';
import { api } from '../utils';
import Navbar from './Navbar';
import Footer from './Footer';


class Athletes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            athletes: [],
            id:0,
            FullName: '',
            Country: '',
            TotalMedals: '',
            Sport: ''
        }
    }

    componentDidMount() {
        this.getAllAthletes();
    }

    async getAllAthletes() {
        let responseJson = await api.getAllAthletes();
        this.setState({ athletes: responseJson })
    }

    handleChange = input => event => {
        this.setState({
            [input]: event.target.value
        })
    }

    async createAthletes() {
        const {

            FullName,
            Country,
            Sport,
            TotalMedals
        } = this.state

        let responseJson = await api.createAthletes({
            "FullName": FullName,
            "Country": Country,
            "Sport": Sport,
            "TotalMedals": TotalMedals
        });

        this.setState(previousState => ({
            athletes: [...previousState.athletes, responseJson]
        }));
        window.close('#modalATHLETES');

    }

    renderTablebody() {
        const { athletes } = this.state;
        if (athletes && athletes.length > 0) {
            return (
                <tbody>
                    {
                        athletes.map((datum, index) => {
                            return (

                                // <tr class="cart_item">
                                //     <td class="product-remove"> <a>{datum.id}</a> </td>
                                //     <td class="product-thumbnail">
                                //         <a href="">
                                //         <img width="57" height="70" src="assets/images/athletes/japan1.png"
                                //         class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" />
                                //         </a>
                                //     </td>
                                //     <td class="product-name" data-title="Product"> <a>{datum.FullName}</a></td>
                                //     <td class="product-price" data-title="Price"><a>{datum.Country}</a> </td>
                                //     <td class="product-quantity" data-title="Quantity">
                                //         <div class="quantity"><a>{datum.Sport}</a></div>
                                //     </td>
                                //     <td class="product-subtotal" data-title="Total"><a>{datum.TotalMedals}</a> </td>
                                // </tr>

                                <tr key={index}>
                                    <td>{datum.FullName}</td>
                                    <td>{datum.Country}</td>
                                    <td>{datum.Sport}</td>
                                    <td>{datum.TotalMedals}</td>
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
            <>


                <div class="page-wrapper">

                <Navbar />
					<br></br>
					<br></br>

                    <div class="modal fade" id="modalATHLETES" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header text-center">
                                    <h4 class="modal-title w-100 font-weight-bold">ADD SPORT</h4>
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
                                        <input type="text" id="FullName" class="form-control validate" value={this.state.FullName} onChange={this.handleChange('FullName')} />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="Country">Country</label>
                                        <input type="text" id="Country" class="form-control validate" value={this.state.Country} onChange={this.handleChange('Country')} />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="Sports">Sports</label>
                                        <input type="text" id="Sports" class="form-control validate" value={this.state.Sport} onChange={this.handleChange('Sport')} />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="totalMedals">Total Medals</label>
                                        <input type="text" id="totalMedals" class="form-control validate" value={this.state.TotalMedals} onChange={this.handleChange('TotalMedals')} />
                                    </div>

                                    <br></br>


                                </div>
                                <div class="modal-footer d-flex justify-content-center">
                                    <button class="btn btn-unique" onClick={this.createAthletes.bind(this)}>Upload <i class="fas fa-paper-plane-o ml-1"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section class="page-title">
                        <div class="container-1310">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <div class="text-left">
                                        <a href="" class="btn btn-default btn-rounded mb-6" data-toggle="modal" data-target="#modalATHLETES"
                                            style={{ backgroundColor: "red", color: "white" }}>ADD NEW ATHLETES</a>
                                    </div>
                                    <h2>ATHLETES</h2>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section class="cart-section woocommerce-cart section-padding">
                        <div class="container-1310">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <div class="woocommerce">
                                        <form method="post" >
                                            <table class="shop_table shop_table_responsive cart">
                                                <thead>
                                                    <tr>
                                                        <th class="product-remove">&nbsp;</th>
                                                        <th class="product-thumbnail">&nbsp;</th>
                                                        <th class="product-name">FullName</th>
                                                        <th class="product-price">Country</th>
                                                        <th class="product-quantity">Sports</th>
                                                        <th class="product-subtotal">Total Medals</th>
                                                    </tr>
                                                </thead>

                                                {/* {this.renderTablebody()} */}
                                                <tbody>
                                                    

                                                    <tr class="cart_item">
                                                        <td class="product-remove"> <a>1</a> </td>
                                                        <td class="product-thumbnail">
                                                            <a href="">
                                                                <img width="57" height="70" src="assets/images/athletes/japan.png"
                                                                    class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" />
                                                            </a>
                                                        </td>
                                                        <td class="product-name" data-title="Product"> <a>YUTO HORIGOME</a></td>
                                                        <td class="product-price" data-title="Price"><a>Japan</a> </td>
                                                        <td class="product-quantity" data-title="Quantity">
                                                            <div class="quantity"><a>Skateboard</a></div>
                                                        </td>
                                                        <td class="product-subtotal" data-title="Total"><a>3</a> </td>
                                                    </tr>

                                                    <tr class="cart_item">
                                                        <td class="product-remove"> <a>2</a> </td>
                                                        <td class="product-thumbnail">
                                                            <a href="">
                                                                <img width="57" height="70" src="assets/images/athletes/neeraj.png"
                                                                    class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" />
                                                            </a>
                                                        </td>
                                                        <td class="product-name" data-title="Product"> <a>Neeraj Chopra</a></td>
                                                        <td class="product-price" data-title="Price"><a>India</a> </td>
                                                        <td class="product-quantity" data-title="Quantity">
                                                            <div class="quantity"><a>Javelin</a></div>
                                                        </td>
                                                        <td class="product-subtotal" data-title="Total"><a>7</a> </td>
                                                    </tr>

                                                    <tr class="cart_item">
                                                        <td class="product-remove"> <a>3</a> </td>
                                                        <td class="product-thumbnail">
                                                            <a href="">
                                                                <img width="57" height="70" src="assets/images/athletes/brazil.png"
                                                                    class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" />
                                                            </a>
                                                        </td>
                                                        <td class="product-name" data-title="Product"> <a>Rayssa Leal</a></td>
                                                        <td class="product-price" data-title="Price"><a>Brazil</a> </td>
                                                        <td class="product-quantity" data-title="Quantity">
                                                            <div class="quantity"><a>Skateboard</a></div>
                                                        </td>
                                                        <td class="product-subtotal" data-title="Total"><a>1</a> </td>
                                                    </tr>

                                                    <tr class="cart_item">
                                                        <td class="product-remove"> <a>4</a> </td>
                                                        <td class="product-thumbnail">
                                                            <a href="">
                                                                <img width="57" height="70" src="assets/images/athletes/japan1.png"
                                                                    class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" />
                                                            </a>
                                                        </td>
                                                        <td class="product-name" data-title="Product"> <a>Tomoa Narasaki</a></td>
                                                        <td class="product-price" data-title="Price"><a>Japan</a> </td>
                                                        <td class="product-quantity" data-title="Quantity">
                                                            <div class="quantity"><a>Sport Climber</a></div>
                                                        </td>
                                                        <td class="product-subtotal" data-title="Total"><a>3</a> </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer/>

                </div>


            </>
        )
    }
}

export default Athletes;