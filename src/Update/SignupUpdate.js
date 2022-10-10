import React, { Component } from 'react';

class SignupUpdate extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                {/* <div class="page-wrapper">

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
                                        <input type="submit" class="button" name="signup" value="Signup" onClick={this.createUsers.bind(this)} />
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                </div> */}

            </>
        );
    }
}

export default SignupUpdate;