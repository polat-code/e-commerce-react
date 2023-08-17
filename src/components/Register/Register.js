import React from 'react'
import "./Register.css";

const LogIn = () => {
  return (
    <form>
      <h2 className='register-title'>Register</h2>
      <div className='register-name-surname-container'>
        <input type='text' placeholder='Name'/>
        <input type='text' placeholder='Second Name' />
      </div>
      <input className='register-form-input' type="email" placeholder='Email' />
      <input className='register-form-input' type="tel" placeholder='Telephone Number' />
      <input className='register-form-input' type="password" placeholder='Password' />
      <input className='register-form-input' type='password' placeholder='Password (Again)' />
      <input className='register-form-input' type='text' placeholder='Country' />
      <input className='register-form-input' type='text' placeholder='Province' />
        <div className='register-button-container'>
            <button type='button'>Register</button>
        </div>
      
    </form>
  )
}

export default LogIn
