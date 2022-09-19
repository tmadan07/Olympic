import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

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
                                        <form method="post" class="login" >
                                            <p>Please identify yourself by providing the information requested in the fields below</p>

                                            <p class="form-row form-row-first">
                                                <label for="username">Username or email <span class="required">*</span></label>
                                                <input type="text" class="input-text" name="username" id="username" />
                                            </p>
                                            <p class="form-row form-row-last">
                                                <label for="password">Password <span class="required">*</span></label>
                                                <input class="input-text" type="password" name="password" id="password" />
                                            </p>
                                            <div class="clear"></div>
                                            <p class="lost_password">
                                                <a href="#" style={{ padding: "left" }}>Forgot your password?</a>
                                            </p>
                                            <label for="rememberme" class="inline">
                                                <input name="rememberme" type="checkbox" id="rememberme" value="forever" /> Remember me </label>
                                            <p class="form-row">
                                                <input type="hidden" id="_wpnonce" name="_wpnonce" value="94dfaf2ac1" />
                                                <input type="hidden" name="_wp_http_referer" value="/wp/?page_id=6" />
                                                <input type="submit" class="button" name="login" value="Login" />
                                                <input type="hidden" name="redirect" value="#" />

                                            </p>

                                            <div class="clear"></div>

                                        </form>
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

export default Login;