import React from 'react'
import "./Heading.css";
const Heading = () => {
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
                    <button className="card-button">Discovery our collection</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Heading
