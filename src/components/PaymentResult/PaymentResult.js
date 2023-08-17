import React from 'react'
import "./PaymentResult.css";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../images/logo.jpg";
import checkBoxImage from "../../images/CheckCircle.svg";

const PaymentResult = () => {
    const navigate = useNavigate();
    const handleBackToShopping = () => {
        navigate("/");
    }
  return (
    <div class="payment-result-main">
        <div class="left">
            <div class="left-container">
                <div className="logo-container">
                    <Link to="/"><img id="logo" src={logo}  alt='logo'/></Link>
                </div>
                <div className='photo-container'>
                    <img id='checkbox-photo' src={checkBoxImage} />
                </div>
                <h1 className='payment-confirm-title'>Payment Confirmed</h1>
                <p className='order-number'>ORDER #2039</p>
                <p className='order-info'> Thank you Joe for buying Candleaf. The nature is grateful to you. Now that your order is confirmed it will be ready to ship in 2 days. Please check your inbox in the future for your order updates.</p>
                <div className='back-to-shopping-button-container'>
                    <button className='back-to-shopping-button-payment' onClick={handleBackToShopping}>Back to Shopping</button>
                </div>
                <a href='#'><p className='print-receipt-button'>Print receipt</p></a>
                
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
                    <p>Paid</p>
                    <p id="last-total">$ 9.99</p>
                </div>
            </div> 
        </div>
        
    </div>
  )
}

export default PaymentResult
