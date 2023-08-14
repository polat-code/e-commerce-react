import React from 'react'
import logoPhoto from "../../images/logo.jpg";
import profilePhoto from "../../images/Profile.svg";
import cartIcon from "../../images/Cart.svg";

import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header-container">
            <div className="logo-container">
                <Link to="/"><img id="logo" src={logoPhoto} /></Link>
            </div>
            <div className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-text"><a href='#products-container' >Discovery</a></li>
                    <li className="navbar-text"><a href="#">About</a></li>
                    <li className="navbar-text"><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="icons-containers">
                <a href="#"><img id = "profile-icon" src= {profilePhoto} /></a>
                <Link to="/cart" ><img id = "cart-icon"src={cartIcon} /></Link>
            </div>
    </div>

  )
}

export default Navbar
