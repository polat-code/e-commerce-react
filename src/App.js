
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Main from './components/Main/Main';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import ShippingAddress from './components/ShippingAddress/ShippingAddress';
import ShippingMethod from './components/ShippingMethod/ShippingMethod';
import Payment from './components/Payment/Payment';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/product-detail' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shipping-address' element={<ShippingAddress />} />
        <Route path='/shipping-method' element = {<ShippingMethod />} />
        <Route path='/payment' element={<Payment />} />

        {/* <Route path='payment' element= {<Payment />} */}
    </Routes>
      
    
   
  );
}

export default App;
