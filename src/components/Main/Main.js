import React from 'react'
import Navbar from '../Navbar/Navbar'
import Heading from '../Heading/Heading'
import Products from '../Products/Products'
import Benefits from '../Benefits/Benefits'
import Footer from '../Footer/Footer'
import ProductDetail from '../ProductDetail/ProductDetail'
import ShippingAddress from "../ShippingAddress/ShippingAddress"
import Cart from '../Cart/Cart';
import ShippingMethod from "../ShippingMethod/ShippingMethod";

const Main = () => {
  return (
    <>
    {/*
       <Navbar />
      <Heading />
      <Products />
      <Benefits />
      <Footer />
      <ProductDetail />
      < ShippingAddress />
      <Cart />
    */}
    <ShippingMethod />
    
    </>
  )
}

export default Main
