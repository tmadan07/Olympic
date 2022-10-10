import React, { Component } from 'react';
import { api } from '../utils';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

class Athletes extends Component {
    constructor(props) {
        super(props)
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

    onChangeImage = input => event => {
        this.setState({
            [input]: event.target.value
        })
        var image = document.getElementById("file-id").files[1].name; 
        document.getElementById("file-id").files[1].name = image;
        alert(image);
       }

    async createAthletes() {
        const {
            image,
            fullname,
            country,
            sport,
            totalMedals
        } = this.state

        let responseJson = await api.createAthletes({
            "image": image,
            "fullname": fullname,
            "country": country,
            "sport": sport,
            "totalMedals": parseInt(totalMedals)
        });

        this.setState(previousState => ({
            athletes: [...previousState.athletes, responseJson]
        }));
        window.close('#modalATHLETES');

    }


    // uploadImg (fakepath ){
    //    var spilts = fakepath.split('fakepath\\')
    //    alert(spilts[1])
    //    }

    nextComponent() {
        this.props.navigate('/athlete/:id');
      }

    renderTablebody() {
        const { athletes } = this.state;
        if (athletes && athletes.length > 0) {
            return (
                <tbody>
                    {
                        athletes.map((datum, index) => {
                            return (

                                <tr class="cart_item">
                                    <td class="product-remove"> <a>{datum.id}</a></td>
                                    <td class="product-thumbnail">
                                        <a href="">
                                            <img width="57" height="70" src={`data:image/png;base64,${datum.image}`} 
                                                class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="..." />  
                                        </a>
                                    </td>
                                    <td class="product-name" data-title="Product"> <a>{datum.fullname}</a></td>
                                    <td class="product-price" data-title="Price"><a>{datum.country}</a> </td>
                                    <td class="product-quantity" data-title="Quantity">
                                        <div class="quantity"><a>{datum.sport}</a></div>
                                    </td>
                                    <td class="product-subtotal" data-title="Total"><a>{datum.totalMedals}</a> </td>
                                    <td>
                                    <button onClick={()=>this.nextComponent(datum.id)} style={{ backgroundColor: "green", color:"white" }}>Update</button> 
                                    <button style={{ backgroundColor: "red",color:"white" }}>Delete</button></td>
                                </tr>

                                // src="assets/images/athletes/japan1.png"

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
                                    <h4 class="modal-title w-100 font-weight-bold">ADD sport</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div class="modal-body mx-3">

                                    <div class="md-form mb-5">
                                        <label class="form-label" for="uploadphoto">Upload a photo</label>
                                        <input type="file" id="file-id" name="file_name"  accept="image/png,image/jpeg, image/jpg, image/webp"
                                        value={this.state.image} onChange={this.onChangeImage('image')} />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="fullname">fullname</label>
                                        <input type="text" id="fullname" class="form-control validate" value={this.state.fullname} onChange={this.handleChange('fullname')} />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="country">country</label>
                                        <input type="text" id="country" class="form-control validate" value={this.state.country} onChange={this.handleChange('country')} />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="sports">sports</label>
                                        <input type="text" id="sports" class="form-control validate" value={this.state.sport} onChange={this.handleChange('sport')} />
                                    </div>
                                    <div class="md-form mb-5">
                                        <i class="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" for="totalMedals">Total Medals</label>
                                        <input type="text" id="totalMedals" class="form-control validate" value={this.state.totalMedals} onChange={this.handleChange('totalMedals')} />
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
                                                        <th class="product-name">fullname</th>
                                                        <th class="product-price">country</th>
                                                        <th class="product-quantity">sports</th>
                                                        <th class="product-subtotal">Total Medals</th>
                                                        <th class="product-quantity">Actions</th>
                                                    </tr>
                                                </thead>

                                                {this.renderTablebody()}
                                                {/* <tbody>
                                                    

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
                                                            <div class="quantity"><a>sport Climber</a></div>
                                                        </td>
                                                        <td class="product-subtotal" data-title="Total"><a>3</a> </td>
                                                    </tr>

                                                </tbody> */}
                                            </table>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />

                </div>


            </>
        )
    }
}

function WrapperAthletes(props) {
    let navigate = useNavigate();
    return <Athletes {...props} navigate={navigate} />
}

export default WrapperAthletes;

// export default Athletes;