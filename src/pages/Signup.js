import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import { api } from '../utils';
import { Link } from "react-router-dom";

class Signup extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            username: '',
            country: ''
        }
        this.state = {
            users: [],
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            username: '',
            country: '',
            showAdmin: undefined
        }
    }

    componentDidMount() {
        this.getAllUsers();
    }

    async getAllUsers() {
        let responseJson = await api.getAllUsers();
        this.setState({ users: responseJson })
        if (responseJson = window.localStorage.getItem("roles").match("ROLE_ADMIN")) {
			this.setState({  showAdmin: "ROLE_ADMIN"
		 })
        }
    }

    handleChange = input => event => {
        this.setState({
            [input]: event.target.value
        })
    }

    async createUsers() {
        const {
            firstName,
            lastName,
            username,
            email,
            country,
            password,

        } = this.state

        let responseJson = await api.createUsers({
            "firstName": firstName,
            "lastName": lastName,
            "username": username,
            "email": email,
            "country": country,
            "password": password
        });

        this.setState(previousState => ({
            users: [...previousState.users, responseJson]
        }));
    this.setState(this.initialState);
    }

    deleteUser = async (user_id) => {

        let responseJson = await api.deleteUser(user_id)

        console.log(responseJson + "clicked");
    }

    renderTablebody() {
        const { users, showAdmin } = this.state;
        if (users && users.length > 0) {
            return (
                <tbody style={{ color: "black" }}>
                    {
                        users.map((datum, index) => {
                            return (
                                <tr key={index}>
                                    <td>{datum.firstName}</td>
                                    <td>{datum.lastName}</td>
                                    <td>{datum.username}</td>
                                    <td>{datum.email}</td>
                                    <td>{datum.country}</td>
                                    <td>{datum.password}</td>
                                    {showAdmin && (
                                    <td>
                                        <Link
                                            class="btn btn-outline-primary mr-2" to={`/user/${datum.id}`}>
                                                <button style={{ backgroundColor: "green", color: "white" }}>Update</button> 
                                        </Link>                              
                                         <button style={{ backgroundColor: "red",color:"white" }} onClick={()=>this.deleteUser(datum.id)}>Delete</button></td> )}
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
        const {showAdmin} = this.state;
        return (
            <>
                <div class="page-wrapper">

                    <br></br>
                    <br></br>

                    <section class="checkout-section section-padding">
                        <div class="container-1310">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <div class="woocommerce">
                                        <h2>Sign Up</h2>
                                        <br></br>
                                        <br></br>

                                        <form name="checkout" method="post" class="checkout woocommerce-checkout" action="#" enctype="multipart/form-data">

                                            <div class="col2-set" id="customer_details">
                                                <div class="col-1">
                                                    <div class="woocommerce-billing-fields">

                                                        <p class="form-row form-row form-row-first validate-required" id="first_name">
                                                            <label for="first_name" class="">First Name <abbr class="required" title="required">*</abbr></label>
                                                            <input type="text" class="input-text " name="first_name" id="first_name" placeholder="" autocomplete="given-name" value={this.state.firstName} onChange={this.handleChange('firstName')} />
                                                        </p>

                                                        <p class="form-row form-row form-row-last validate-required" id="last_name">
                                                            <label for="last_name" class="">Last Name <abbr class="required" title="required">*</abbr></label>
                                                            <input type="text" class="input-text " name="last_name" id="last_name" placeholder="" autocomplete="family-name" value={this.state.lastName} onChange={this.handleChange('lastName')} />
                                                        </p>
                                                        <div class="clear"></div>

                                                        <p class="form-row form-row form-row-wide address-field validate-required" id="username">
                                                            <label for="username" class="">Username <abbr class="required" title="required">*</abbr></label>
                                                            <input type="text" class="input-text " name="username" id="username" placeholder="" autocomplete="Username" value={this.state.username} onChange={this.handleChange('username')} />
                                                        </p>

                                                        <div class="clear"></div>

                                                        <p class="form-row form-row form-row-wide address-field validate-required" id="email">
                                                            <label for="email" class="">Email <abbr class="required" title="required">*</abbr></label>
                                                            <input type="email" class="input-text " name="email" id="email" placeholder="" autocomplete="email" value={this.state.email} onChange={this.handleChange('email')} />
                                                        </p>

                                                        <div class="clear"></div>

                                                        <p class="form-row form-row form-row-wide address-field update_totals_on_change validate-required" id="country">
                                                           <label for="country" class="">Country <abbr class="required" title="required">*</abbr></label> 
                                                            <select name="country" id="country" autocomplete="country" class="country_select" value={this.state.country} onChange={this.handleChange('country')}>
                                                                <option value="">Select a country&hellip;</option>
                                                                <option value="NP" selected='selected'>Nepal</option>
                                                                <option value="AF">Afghanistan</option>
                                                                <option value="AU">Australia</option>
                                                                <option value="AT">Austria</option>
                                                                <option value="AZ">Azerbaijan</option>
                                                                <option value="BY">Belarus</option>
                                                                <option value="PW">Belau</option>
                                                                <option value="BE">Belgium</option>
                                                                <option value="BT">Bhutan</option>
                                                                <option value="BO">Bolivia</option>
                                                                <option value="BW">Botswana</option>
                                                                <option value="BV">Bouvet Island</option>
                                                                <option value="BR">Brazil</option>
                                                                <option value="BN">Brunei</option>
                                                                <option value="BG">Bulgaria</option>
                                                                <option value="BF">Burkina Faso</option>
                                                                <option value="BI">Burundi</option>
                                                                <option value="KH">Cambodia</option>
                                                                <option value="CM">Cameroon</option>
                                                                <option value="CA">Canada</option>
                                                                <option value="CF">Central African Republic</option>
                                                                <option value="CL">Chile</option>
                                                                <option value="CN">China</option>
                                                                <option value="HR">Croatia</option>
                                                                <option value="CU">Cuba</option>
                                                                <option value="CW">Cura&ccedil;ao</option>
                                                                <option value="CY">Cyprus</option>
                                                                <option value="CZ">Czech Republic</option>
                                                                <option value="DK">Denmark</option>
                                                                <option value="EC">Ecuador</option>
                                                                <option value="EG">Egypt</option>
                                                                <option value="FI">Finland</option>
                                                                <option value="FR">France</option>
                                                                <option value="DE">Germany</option>
                                                                <option value="GG">Guernsey</option>
                                                                <option value="HN">Honduras</option>
                                                                <option value="HK">Hong Kong</option>
                                                                <option value="HU">Hungary</option>
                                                                <option value="IS">Iceland</option>
                                                                <option value="IN">India</option>
                                                                <option value="ID">Indonesia</option>
                                                                <option value="JP">Japan</option>
                                                                <option value="MG">Madagascar</option>
                                                                <option value="MW">Malawi</option>
                                                                <option value="MY">Malaysia</option>
                                                                <option value="MV">Maldives</option>
                                                                <option value="MM">Myanmar</option>
                                                                <option value="NA">Namibia</option>
                                                                <option value="NR">Nauru</option>
                                                                <option value="NL">Netherlands</option>
                                                                <option value="NZ">New Zealand</option>
                                                                <option value="NI">Nicaragua</option>
                                                                <option value="NE">Niger</option>
                                                                <option value="NG">Nigeria</option>
                                                                <option value="KP">North Korea</option>
                                                                <option value="NO">Norway</option>
                                                                <option value="OM">Oman</option>
                                                                <option value="PK">Pakistan</option>
                                                                <option value="PY">Paraguay</option>
                                                                <option value="PE">Peru</option>
                                                                <option value="PH">Philippines</option>
                                                                <option value="PT">Portugal</option>
                                                                <option value="QA">Qatar</option>
                                                                <option value="RO">Romania</option>
                                                                <option value="RU">Russia</option>
                                                                <option value="SA">Saudi Arabia</option>
                                                                <option value="SG">Singapore</option>
                                                                <option value="SK">Slovakia</option>
                                                                <option value="SI">Slovenia</option>
                                                                <option value="ZA">South Africa</option>
                                                                <option value="KR">South Korea</option>
                                                                <option value="SS">South Sudan</option>
                                                                <option value="ES">Spain</option>
                                                                <option value="LK">Sri Lanka</option>
                                                                <option value="SE">Sweden</option>
                                                                <option value="CH">Switzerland</option>
                                                                <option value="SY">Syria</option>
                                                                <option value="TW">Taiwan</option>
                                                                <option value="TJ">Tajikistan</option>
                                                                <option value="TH">Thailand</option>
                                                                <option value="UA">Ukraine</option>
                                                                <option value="AE">United Arab Emirates</option>
                                                                <option value="GB">United Kingdom (UK)</option>
                                                                <option value="US">United States (US)</option>
                                                                <option value="ZM">Zambia</option>
                                                                <option value="ZW">Zimbabwe</option>
                                                            </select>
                                                            <noscript>
                                                                <input type="submit" name="woocommerce_checkout_update_totals" value="Update country" />
                                                            </noscript>
                                                             </p>
                                                            <br></br><br></br>
                                                            <p class="form-row form-row form-row-wide address-field validate-required" id="Password">
                                                                <label for="Password" class="">Password <abbr class="required" title="required">*</abbr></label>
                                                                <input type="Password" class="input-text " name="Password" id="Password" placeholder="" autocomplete="Password" value={this.state.password} onChange={this.handleChange('password')} />
                                                            </p>
                                                       
                                                        <div class="clear"></div>

                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                        <label for="rememberme" class="inline">
                                            <input name="rememberme" type="checkbox" id="rememberme" value="forever" />I Agree rules. </label><br></br>
                                        <input type="submit" class="button" name="signup" value="Signup" onClick={this.createUsers.bind(this)} /> <Link
                                        
                                             to={"/"}> <button style={{ height:"48px", width:"100px"}}>Back</button> 
                                        </Link>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                    </div>
                                </div>


                                {showAdmin&& (
                                <table class="table" >
                                    <thead>
                                        <tr style={{ backgroundColor: "blue",color:"white" }}>
                                            <th scope="col">FirstName</th>
                                            <th scope="col">LastName</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Password</th>
                                           
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    {this.renderTablebody()}
                                </table>
                                 )}

                            </div>
                        </div>
                    </section>


                </div>

            </>
        )
    }

}

function WrapperSignup(props) {
    let navigate = useNavigate();
    return <Signup {...props} navigate={navigate} />
}

export default WrapperSignup;

// export default Signup;