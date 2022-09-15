import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);

    }

    render() {
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

                                                        <p class="form-row form-row form-row-first validate-required" id="billing_first_name_field">
                                                            <label for="billing_first_name" class="">First Name <abbr class="required" title="required">*</abbr></label>
                                                            <input type="text" class="input-text " name="billing_first_name" id="billing_first_name" placeholder="" autocomplete="given-name" value="" />
                                                        </p>

                                                        <p class="form-row form-row form-row-last validate-required" id="billing_last_name_field">
                                                            <label for="billing_last_name" class="">Last Name <abbr class="required" title="required">*</abbr></label>
                                                            <input type="text" class="input-text " name="billing_last_name" id="billing_last_name" placeholder="" autocomplete="family-name" value="" />
                                                        </p>
                                                        <div class="clear"></div>

                                                        <p class="form-row form-row form-row-wide address-field validate-required" id="username">
                                                            <label for="username" class="">Username <abbr class="required" title="required">*</abbr></label>
                                                            <input type="text" class="input-text " name="username" id="username" placeholder="" autocomplete="Username" value="" />
                                                        </p>

                                                        <div class="clear"></div>

                                                        <p class="form-row form-row form-row-wide address-field validate-required" id="billing_email">
                                                            <label for="billing_email" class="">Email <abbr class="required" title="required">*</abbr></label>
                                                            <input type="email" class="input-text " name="billing_email" id="billing_email" placeholder="" autocomplete="email" value="" />
                                                        </p>

                                                        <div class="clear"></div>

                                                        <p class="form-row form-row form-row-wide address-field update_totals_on_change validate-required" id="billing_country_field">
                                                            <label for="billing_country" class="">Country <abbr class="required" title="required">*</abbr></label>
                                                            <select name="billing_country" id="billing_country" autocomplete="country" class="country_to_state country_select ">
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
                                                            <br></br><br></br>
                                                            <p class="form-row form-row form-row-wide address-field validate-required" id="Password">
                                                                <label for="billing_email" class="">Password <abbr class="required" title="required">*</abbr></label>
                                                                <input type="Password" class="input-text " name="Password" id="Password" placeholder="" autocomplete="Password" value="" />
                                                            </p>
                                                        </p>
                                                        <div class="clear"></div>

                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                        <label for="rememberme" class="inline">
                                            <input name="rememberme" type="checkbox" id="rememberme" value="forever" />I Agree rules. </label><br></br>
                                        <input type="submit" class="button" name="signup" value="Signup" />

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

export default Signup;