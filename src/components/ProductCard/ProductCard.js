import React from 'react'
import "./ProductCard.css";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
const ProductCard = ({image,name,price})  => {
  const navigate = useNavigate();
  const navigation = () => {
    navigate("/product-detail");
    window.scrollTo(0,0);
  }
  return (
    <div className="product-card">
                <Link to="/product-detail" class="product-link">
                    <img src={image} alt='product-image'/>
                    <p className="product-title">{name}</p>
                    <p className="product-price">{price}</p>
                    
                </Link>
                <div className="add-to-cart-container">
                        <button type="button" className="product-add-button" onClick={navigation}><span className="product-add-text">Add to Cart</span></button>
                </div>
                
    </div>
  )
}

export default ProductCard;
