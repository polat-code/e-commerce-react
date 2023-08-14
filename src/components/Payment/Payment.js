import React from 'react'
import "./Payment.css";
import creditCardIcon from "../../images/CreditCardFill2.svg";
import couponImage from "../../images/coupon-image.png";

const Payment = () => {
  return (
    <div class="payment-main">
        <div class="left">
            <div class="left-container">
                <div class="contact-ship-preview-main">
                    <div class="contact-ship-preview-container">
                        <div class="preview-contact-line-container">
                            <div><span class="ship-contact-title">Contact</span> <span class="contact-email">joe.spagnuolo@uxbly.com</span></div>
                            <a href="" class="edit-button">Edit</a>
                        </div>
                       
                        <hr />
                        <div class="preview-ship-line-container">
                            <div><span class="ship-to-title">Ship to</span> <span class="ship-to-info">Via Firenze 23, 92023, Campobello di  Licata AG, Italia</span></div>
                            <a href="" class="edit-button">Edit</a>
                        </div>
                        <hr />
                        <div class="preview-ship-line-container">
                            <div><span class="ship-to-title">Method</span> <span class="ship-to-info">Standard Shipping - FREE</span></div>
                            <a href="" class="edit-button">Edit</a>
                        </div>
                    </div>
                </div>
                
                <br />
                <br />
                <h2 class="payment-method-title">Payment Method</h2>
                <div class="payment-card-main">
                    <div class="credit-card-container">
                        <div class="credit-card-title">
                            <img src={creditCardIcon} />
                            <h3>Credit Card</h3>
                        </div>
                        
                    </div>  
                    <div class="card-number-container">
                        <input type="text" id="card-number-input" placeholder="Card number" />
                    </div>  
                    <input type="text" id="holder-name-input" placeholder="Holder Name" />
                    <div class="payment-input-group">
                        <input type="text" id="expiration-date-input" placeholder="Expiration (MM/YY)" />
                        <input type="text" id="cvv-input" placeholder="CVV" />
                    </div>
                    
                </div>
                <br />
                <br />
                <h2 class="tax-informations-title">Tax Informations</h2>
                <input type="text" class="vat-number-input" placeholder="VAT number  (optional)" />
                <input type="text" class="pec-number-input" placeholder="PEC (optional)" />
                <br />
                <br />
                <h2 class="billing-address-title">Billing address</h2>
                
                
                
                
            </div>
            
        </div>
        
        <div class="right">
            <div class="coupon-code-container">
                <div class="product-coupon-description-container">
                    <img class="coupon-image" src={couponImage}/>
                    <div class="product-coupon-text">
                        <h4 class="product-coupon-title">Spiced Mint Candleaf®</h4>
                        <p class="product-coupon-price">$ 9.99</p>
                    </div>
                </div>
                <hr class="horizontal-line"/>
                <div class="coupon-input-container">
                    <input class="coupon-input" type="text" placeholder="Coupon Code" />
                    <button class="coupon-button" type="button">Add code</button>
                </div>
                <hr class="horizontal-line"/>
                <div class="subtotal-text-container">
                    <p>Subtotal</p>
                    <p>$ 9.99</p>
                </div>
                <div class="shipping-text-container">
                    <p>Shipping</p>
                    <p>Calculated at the next step</p>
                </div>
                <hr class="horizontal-line" />
                <div class="total-text-container">
                    <p>Total</p>
                    <p id="last-total">$ 9.99</p>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Payment
