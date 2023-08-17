import React from 'react'
import "./AllProducts.css";
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';

const AllProducts = ()  => {
  return (
    <>
    <Navbar />
    <div className='all-products-container'>
        <Products />
    </div>
    
    <Footer />
    </>
  )
}

export default AllProducts
