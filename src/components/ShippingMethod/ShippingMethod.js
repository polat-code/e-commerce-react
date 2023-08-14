import React from 'react'
import "./ShippingMethod.css";
import ShippingChoice from '../ShippingChoice/ShippingChoice';

const ShippingMethod = () => {
  return (
    <div class="shipping-address-main">
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
                    </div>
                </div>
            
                <h2 class="shipping-method-header">Shipping Method</h2>
                <form>
                    <ShippingChoice shippingTitle="İyte Kargo" shippingPrice="$ 10.99"/>
                    <ShippingChoice shippingTitle="Standart Shipping" shippingPrice="Free"/>
    
                </form>
                <div class="button-group-shipping">
                    <a href="" class="back-to-detail">Back to details</a>
                    <button class="go-to-payment-button">Go to payment</button>
                </div>
            </div>
            
        </div>
        <div class="right">
            <div class="coupon-code-container">
                <div class="product-coupon-description-container">
                    <img class="coupon-image" src="./products/products-mini/cart-mini-photo.png"/>
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

export default ShippingMethod
