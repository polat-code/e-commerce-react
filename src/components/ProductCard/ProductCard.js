import React from 'react'
import "./ProductCard.css";
const ProductCard = ({image,name,price})  => {
  return (
    <div className="product-card">
                <a href="#" class="product-link">
                    <img src={image} alt='product-image'/>
                    <p className="product-title">{name}</p>
                    <p className="product-price">{price}</p>
                    
                </a>
                <div className="add-to-cart-container">
                        <button type="button" className="product-add-button"><span className="product-add-text">Add to Cart</span></button>
                </div>
                
    </div>
  )
}

export default ProductCard;
