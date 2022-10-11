import React, { Component } from 'react';
import { api } from '../utils';
import { useNavigate, Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            email: '',
            password: '',
            name: '',
            roles: []
        }
        // this.handleLogin = this.handleLogin.bind(this);
    }


    handleChange = input => event => {
        this.setState({
            [input]: event.target.value
        })
    }

    PerformLogin = async (event) => {
        event.preventDefault();
        var { email, password, name, roles } = this.state;
        let responseJson = await api.login(email, password);
        window.localStorage.setItem("isLoggedIn", true);

        //converted array of objects into string
        const reducedArray = responseJson.roles.reduce((curr) => `${curr.id},${curr.name}`)
        console.log(reducedArray)
        localStorage.setItem("roles", String(reducedArray.name));

        console.log(responseJson)
        this.props.navigate('/');
    }

    render() {
        return (
            <>
                <div class="page-wrapper">

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <section class="checkout-section section-padding">
                        <div class="container-1310">
                            <div class="row">
                            
                                <div class="col col-xs-12">
                                    <div class="woocommerce">
                                        <h2>Login</h2>
                                        <form method="post" class="login" onSubmit={this.PerformLogin} >
                                            <p>Please identify yourself by providing the information requested in the fields below</p>

                                            <p class="form-row form-row-first">
                                                <label for="username">Username or email <span class="required">*</span></label>
                                                <input type="text" class="input-text" name="username" id="username" value={this.state.email} onChange={this.handleChange('email')} />
                                            </p>
                                            <p class="form-row form-row-last">
                                                <label for="password">Password <span class="required">*</span></label>
                                                <input class="input-text" type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange('password')} />
                                            </p>
                                            <div class="clear"></div>
                                            <p class="lost_password">
                                                <a href="#" style={{ padding: "left" }}>Forgot your password?</a>
                                            </p>
                                            <label for="rememberme" class="inline">
                                                <input name="rememberme" type="checkbox" id="rememberme" value="forever" /> Remember me </label>


                                            <div class="clear"></div>

                                        </form>

                                        <p class="form-row">
                                            <input type="submit" class="button" name="login" value="Login" onClick={this.PerformLogin.bind(this)} />
                                            <Link
                                            class="btn btn-outline-primary mr-2" to={"/"}>
                                                <button style={{ backgroundColor: "green", color: "white" }}>Back</button> 
                                        </Link>
                                            {/* <button onClick={this.goBack}>Back</button> */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </>
        )
    }

}

function WrapperLogin(props) {
    let navigate = useNavigate();
    return <Login {...props} navigate={navigate} />
}

export default WrapperLogin;

// export default Login;