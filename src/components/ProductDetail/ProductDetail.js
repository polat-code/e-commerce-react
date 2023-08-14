import React from 'react'
import "./ProductDetail.css";
import Navbar from "../Navbar/Navbar";
import cartIcon from "../../images/Cart-product-detail.svg"
import Footer from '../Footer/Footer';

const ProductDetail = () => {
  return (
    <>
      <Navbar />
      <div className="product-detail-main">
        <div className="product-detail-left">
            <div className="product-detail-image-container">
                <img className="product-detail-image" alt='' />
            </div>
            
            <div className="product-advertising-slogan">
                <span id="product-advertising-slogan-text">All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</span>
                <br />
                <br />
                <span id="product-advertising-slogan-icon">🚚 </span><span id="shipping-text">FREE SHIPPING</span>
            </div>
        </div>
        
        <div className="product-detail-right">
            <h2 className="product-detail-title">Spiced Mint Candleaf®</h2>
            <div className="product-detail-input-container">
                <div className="price-quantity-container">
                    <p className="product-detail-price">$ 9.99</p>
                    <div className="product-detail-number-input">
                        <span>Quantity</span>
                        <br />
                        <input type="number" id="quantity" min="1" step="1" /* value = 1 *//>
                    </div>
                </div>
                <div className="product-detail-checkbox-container">
                    <div className="first-checkbox">
                        <label for="option1">
                            <input type="radio" id="option1" name="options" value="option1" /> One time purchase
                          </label>  
                    </div>
                    <div className="second-checkbox">
                        <label for="option2">
                            <input type="radio" id="option2" name="options" value="option2" /> Subscribe and delivery every week
                          </label> 
                          <p className="radio-button-description">Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. <a href="#" id="see-details">See details</a></p>
                    </div>
        
                </div>
            </div>
            
            
            <div className="product-detail-add-to-cart-container">
                <button className="product-detail-add-to-cart-button" >
                    <img src={cartIcon} alt=''/>
                    <span id="product-detail-add-to-cart-button-text">+ Add to cart</span>
                </button>
            </div>
    
            <div className="product-detail-description">
                <p ><span>Wax:</span> Top grade Soy wax that delivers a smoke less,  consistent burn</p>
                <p ><span>Fragrance:</span> Premium quality ingredients with natural essential oils </p>
                <p><span>Burning Time:</span> 70-75 hours   <span>Dimension:</span> 10cm x 5cm   <span>Weight:</span> 400g</p>
                
            </div>
        </div>
    </div>

    <Footer />
    </>
  )
}

export default ProductDetail
