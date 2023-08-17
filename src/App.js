
import {Route, Routes } from 'react-router-dom';
import './App.css';

import Main from './components/Main/Main';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import ShippingAddress from './components/ShippingAddress/ShippingAddress';
import ShippingMethod from './components/ShippingMethod/ShippingMethod';
import Payment from './components/Payment/Payment';
import PaymentResult from './components/PaymentResult/PaymentResult';
import AllProducts from './components/AllProducts/AllProducts';
import LogIn from './components/LogIn/LogIn';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/product-detail' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shipping-address' element={<ShippingAddress />} />
        <Route path='/shipping-method' element = {<ShippingMethod />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/payment-result' element={<PaymentResult />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/login' element={<LogIn />} />
    </Routes>
      
    
   
  );
}

export default App;
