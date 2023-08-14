import React from 'react'
import "./Products.css";
import ProductCard from '../ProductCard/ProductCard';

const Products = ()  => {
  return (
    <div className="products-container">
        <div className="products-header-container">
            <h2 className="products-header">Products</h2>
        </div>
        <div className="products-sub-header-container">
            <p className="products-sub-header">Order it for you or for your beloved ones </p>
        </div>
       
        <div className="products">
            <ProductCard  image="./products/image 1.png" name="Spiced Mint" price="9.99$"/>
            <ProductCard  image="./products/image 2.png" name="Sweet Straweberry" price="10.99$"/>
            <ProductCard  image="./products/image 3.png" name="Cool Blueberries" price="8.99$"/>
            <ProductCard  image="./products/image 4.png" name="Juicy Lemon" price="11.99$"/>
            <ProductCard  image="./products/image 5.png" name="Legendary" price="5.99$"/>
            <ProductCard  image="./products/image 6.png" name="Fragrant Cinnamon" price="3.99$"/>
            <ProductCard  image="./products/image 7.png" name="Summer Cherries" price="7.99$"/>
            <ProductCard  image="./products/image 8.png" name="Clean Lavander" price="8.99$"/> 
            
        </div>


    </div>
  )
}

export default Products
