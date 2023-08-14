import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./Cart.css";
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  return (
    <>
      <Navbar />
    <div class="cart-main-container">
        {/*  Title  */}
        <div class="cart-title-container">
            <h1 class="cart-title">Your cart Items</h1>
            <a href="#" class="back-to-shopping-button">Back to shopping</a>
        </div>

        {/* Cart items table */}
        <div class="cart-items">
            <table class="items-table">
                <thead class="table-heading">
                    <tr class="table-heading-row">
                        <th class="product-table-1">Product</th>
                        <th class="product-table-2">Price</th>
                        <th class="product-table-3">Quantity</th>
                        <th class="product-table-4">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <CartItem photoPath="./products/products-mini/cart-mini-photo.png" title="Spiced Mint Candleaf" price="$ 9.99"/>
                    <CartItem photoPath="./products/products-mini/cart-mini-photo.png" title="Spiced Mint Candleaf" price="$ 9.99"/>
                    <CartItem photoPath="./products/products-mini/cart-mini-photo.png" title="Spiced Mint Candleaf" price="$ 9.99"/>
                </tbody>
            </table>
        </div>
        
        
        
        
        {/* <!-- Check out result --> */}
        <div class="checkout-section">
            <div class="total">
                <div class="description-price-section">
                    <span>Sub-total</span>
                    <span>$ 9.99</span>
                </div>
                <div class="extra-info-text">
                    <p>Tax and shipping cost includes in price</p>
                </div>
            </div>
            <button class="check-out-button">Check-out</button>
        </div>
        
    </div>

    <Footer />
    </>
  )
}

export default Cart
