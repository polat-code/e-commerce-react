import React from 'react'
import "./Footer.css";
import footerLogo from "../../images/footer.png";

const Footer = ()  => {
  return (
    
    <div class="footer-container">
        <div class="footer">
            <hr class="footer-horizontal-line" />
            <div class="footer-content">
                <div class="logo-text-presentation">
                    <img src= {footerLogo} alt=''/>
                    <p class="footer-logo-text">Your natural candle made for your home and for your wellness.</p>
                </div>
                <div class="footer-navigations">
                    <div class="discovery-section">
                        <ul class="footer-list">
                            <li class="footer-item footer-item-title">Discovery</li>
                            <li class="footer-item">New season</li>
                            <li class="footer-item">Most searched</li>
                            <li class="footer-item">Most selled</li>
                        </ul>
                    </div>
                    <div class="about-section ">
                   
                        <ul class="footer-list">
                            <li class="footer-item footer-item-title">About</li>
                            <li class="footer-item">Help</li>
                            <li class="footer-item">Shipping</li>
                            <li class="footer-item">Affiliate</li>
                        </ul>
                    </div>
                    <div class="info-section">
                    
                        <ul class="footer-list">
                            <li class="footer-item footer-item-title">Info</li>
                            <li class="footer-item">Contact us</li>
                            <li class="footer-item">Privacy Policies</li>
                            <li class="footer-item">Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
                
               
                
            </div>
        </div>
    </div>
  )
}

export default Footer
