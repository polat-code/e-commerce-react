import React from 'react'
import "./ShippingAddress.css";
import logo from "../../images/logo.jpg";

const ShippingAddress = () => {
  return (
    <div className="shipping-address-main">
        <div className="address-main">
            <div className="address-main-container">
                <div className="shipping-address-header">
                    <div className="logo-container">
                        <a href=""><img id="logo" src={logo}  alt='logo'/></a>
                    </div>
                </div>
                <div className="contact-header">
                    <h2 className="contact-title">Contact</h2>
                    <span className="contact-extra-info">Do you have an account?   <a href="#"><span class="login-button">Login</span></a></span>
                </div>
                <input  className="email-input" type="text" placeholder="Email or mobile phone number"/>
                <div className="newsletter-checkbox-container">
                    <label className="">
                        <input className="newsletter-checkbox" type="checkbox" />
                        <span className="newsletter-checkbox-info">Add me to Candleaf newsletter for a 10% discount</span>
                    </label>
                </div>
                <br />
                <div className="shipping-container">
                    <h2 className="shipping-header">Shipping</h2>
                    <div className="name-surname-input-container">
                        <input id="name-input" className="shipping-name-surname-input" type="text" placeholder="Name"/>
                        <input id="surname-input" className="shipping-name-surname-input" type="text" placeholder="Surname"/>
                    </div>
                </div>

                <input id="telephone-input" className="shipping-input" type="text" placeholder="Telephone number"/>
                <input id="address-input" className="shipping-input" type="text" placeholder="Address"/>
                <div className="city-input-container">
                    <input id="city-input" className="city-input-group" type="text" placeholder="City"/>
                    <input id="postal-code-input" className="city-input-group" type="text" placeholder="Postal Code"/>
                    <input id="province-input" className="city-input-group" type="text" placeholder="Province"/> 
                </div>
                <input id="country-input" className="shipping-input" type="text" placeholder="Country"/>
                <div className="info-save-checkbox-container">
                    <label className="">
                        <input className="info-save-checkbox" type="checkbox" />
                        <span className="info-save-checkbox-info">Save this informations for a future fast checkout</span>
                    </label>
                </div>
                <div className="button-group">
                    <a className="back-to-cart">Back to cart</a>
                    <button className="go-to-shipping-button">Go to shipping</button>
                </div>
               
                
            </div>
            
            
        </div>
        <div className="coupon-code-main">
            <div className="coupon-code-container">
                <div className="product-coupon-description-container">
                    <img className="coupon-image" alt='coupon-icon' />
                    <div className="product-coupon-text">
                        <h4 className="product-coupon-title">Spiced Mint Candleaf®</h4>
                        <p className="product-coupon-price">$ 9.99</p>
                    </div>
                </div>
                <hr className="horizontal-line"/>
                <div className="coupon-input-container">
                    <input className="coupon-input" type="text" placeholder="Coupon Code" />
                    <button className="coupon-button" type="button">Add code</button>
                </div>
                <hr className="horizontal-line"/>
                <div className="subtotal-text-container">
                    <p>Subtotal</p>
                    <p>$ 9.99</p>
                </div>
                <div className="shipping-text-container">
                    <p>Shipping</p>
                    <p>Calculated at the next step</p>
                </div>
                <hr className="horizontal-line" />
                <div className="total-text-container">
                    <p>Total</p>
                    <p id="last-total">$ 9.99</p>
                </div>
            </div> 
            
        </div>
    </div>
  )
}

export default ShippingAddress
