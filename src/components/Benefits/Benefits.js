import React from 'react'
import "./Benefits.css";
import checkboxImage from "../../images/benefits-checkbox.svg";
import benefitsPhoto from "../../images/benefits-photo.jpg";

const Benefits = ()  => {
  return (
    <div className="benefits">
        <div className="benefits-article-container">
            <h2 className="benefits-header">Clean and fragrant soy wax</h2>
            <p className="benefits-sub-header">Made for your home and for your wellness</p>

            <div className="benefits-item-container">
                <img  src={checkboxImage} alt=''/>
                <span className="benefits-item-text">Eco-sustainable:<span className="benefits-item-subtext">All recyclable materials, 0% CO2 emissions</span></span>
            </div>
            <div className="benefits-item-container">
                <img  src={checkboxImage} alt=''/>
                <span className="benefits-item-text">Hyphoallergenic:<span className="benefits-item-subtext">100% natural, human friendly ingredients </span></span>
            </div>
            <div className="benefits-item-container">
                <img  src={checkboxImage} alt=''/>
                <span className="benefits-item-text">Handmade:<span className="benefits-item-subtext"> All candles are craftly made with love.</span></span>
            </div>
            <div class="benefits-item-container">
                <img  src={checkboxImage} alt=''/>
                <span className="benefits-item-text">Long burning:<span className="benefits-item-subtext"> No more waste. Created for last long.</span></span>
            </div>
            <div className="benefits-button-container">
                <button className="benefits-button" ><span className="benefits-button-text">Learn More</span></button>
            </div>
        </div>
        <div className="benefits-photo">
            <img src= {benefitsPhoto} alt='' />
        </div>

        
    </div>
  )
}

export default Benefits
