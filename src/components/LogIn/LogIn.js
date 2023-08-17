import React from 'react'
import Register from "../Register/Register";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import "./LogIn.css";

const LogIn = () =>  {
  return (
    <>  
        <Navbar />
        <div className='log-in-container'>
          <div className='left-register'>
            <Register />
          </div>
          <div className='right-log-in'>
            <div>
              <h2>Log In</h2> 
              <input id='login-email-input' className='register-form-input' placeholder='Email or mobile phone number' />
              <input id='login-password-input' className='login-password-input register-form-input' placeholder='Password' />
              <button type='button' >Log In</button>
            </div>
             
          </div> 
        </div>  
        

        <Footer />
    </>
    
  )
}

export default LogIn
