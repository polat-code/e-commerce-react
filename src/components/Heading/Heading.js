import React from 'react'
import "./Heading.css";
import { useNavigate } from 'react-router';
const Heading = () => {
    const navigation = useNavigate();
    const handleCollectionButton = () => {
        navigation("/all-products")
    }
  return (
    <div className="heading">
        <div className="card-container">
            <div className="card">
                <div className="card-header">
                    <span>🌱</span>
                    <span>The nature candle</span>
                </div>
                <div className="card-paragraph-container">
                    <p className="card-paragraph">All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
                </div>
                <div className="card-button-container">
                    <button className="card-button" onClick={handleCollectionButton}>Discovery our collection</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Heading
