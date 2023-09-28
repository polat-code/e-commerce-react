import React from 'react'
import "./Payment.css";
import creditCardIcon from "../../images/CreditCardFill.svg";
import couponImage from "../../images/coupon-image.png";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.jpg"

const Payment = () => {
    const navigation = useNavigate();
    const handlePaymentButton = () => {
        navigation("/payment-result");
    }
  return (
    <div className="payment-main">
        <div className="left">
            <div className="left-container">
                <div className="logo-container">
                    <Link to="/"><img id="logo" src={logo}  alt='logo'/></Link>
                </div>
                
                <div className="contact-ship-preview-main">
                    <div className="contact-ship-preview-container">
                        <div className="preview-contact-line-container">
                            <div><span className="ship-contact-title">Contact</span> <span className="contact-email">joe.spagnuolo@uxbly.com</span></div>
                            <a href="" className="edit-button">Edit</a>
                        </div>
                       
                        <hr />
                        <div class="preview-ship-line-container">
                            <div><span className="ship-to-title">Ship to</span> <span className="ship-to-info">Via Firenze 23, 92023, Campobello di  Licata AG, Italia</span></div>
                            <a href="" className="edit-button">Edit</a>
                        </div>
                        <hr />
                        <div className="preview-ship-line-container">
                            <div><span className="ship-to-title">Method</span> <span className="ship-to-info">Standard Shipping - FREE</span></div>
                            <a href="" className="edit-button">Edit</a>
                        </div>
                    </div>
                </div>
                
                <br />
                <br />
                <h2 className="payment-method-title">Payment Method</h2>
                <div className="payment-card-main">
                    <div className="credit-card-container">
                        <div className="credit-card-title">
                            <img src={creditCardIcon} />
                            <h3>Credit Card</h3>
                        </div>
                        
                    </div>  
                    <div className="card-number-container">
                        <input type="text" id="card-number-input" placeholder="Card number" />
                    </div>  
                    <input type="text" id="holder-name-input" placeholder="Holder Name" />
                    <div className="payment-input-group">
                        <input type="text" id="expiration-date-input" placeholder="Expiration (MM/YY)" />
                        <input type="text" id="cvv-input" placeholder="CVV" />
                    </div>
                    
                </div>
                <br />
                <br />
                <h2 className="tax-informations-title">Tax Informations</h2>
                <input type="text" className="vat-number-input" placeholder="VAT number  (optional)" />
                <input type="text" className="pec-number-input" placeholder="PEC (optional)" />
                <br />
                <br />
                <h2 className="billing-address-title">Billing address</h2>
                <div className='billing-address-container'>
                    <div>
                        
                        <label>
                        <input type="radio" className='shipping-address-radio' name='shipping-adress' />Same as the shipping address
                        </label>
                    </div>
                    
                    
                    <hr />
                    <div>
                        
                        <label><input type="radio" className='shipping-address-radio' name='shipping-adress'/>Use a different address for billing
                        </label>
                    </div>
                    
                </div>

                <div class="button-group-payment">
                    <Link to="/shipping-method" class="back-to-detail">Back to shipping</Link>
                    <button class="go-to-payment-button" onClick={handlePaymentButton}>Pay Now</button>
                </div>
                
                
                
                
            </div>
            
        </div>
        
        <div id="payment-right" className="right">
            <div className="coupon-code-container">
                <div className="product-coupon-description-container">
                    <img className="coupon-image" src={couponImage}/>
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

export default Payment
