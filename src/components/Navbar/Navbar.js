import React from 'react'
import logoPhoto from "../../images/logo.jpg";
import profilePhoto from "../../images/Profile.svg";
import cartIcon from "../../images/Cart.svg";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header-container">
            <div className="logo-container">
                <a href="#"><img id="logo" src={logoPhoto} /></a>
            </div>
            <div className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-text"><a href="#">Discovery</a></li>
                    <li className="navbar-text"><a href="#">About</a></li>
                    <li className="navbar-text"><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="icons-containers">
                <a href="#"><img id = "profile-icon" src= {profilePhoto} /></a>
                <a href="#"><img id = "cart-icon"src={cartIcon} /></a>
            </div>
    </div>

  )
}

export default Navbar
