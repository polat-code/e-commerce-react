import React from 'react'
import "./ShippingChoice.css";

const ShippingChoice = ({shippingTitle, shippingPrice}) => {
  return (
    <div class="shipping-choice-container">
        <div>
            <input id="shipping-choice" type="radio" class="shipping-choice-radio" name="shipping" />
            <label for="shipping-choice"><span class="shipping-choice-description">{shippingTitle}</span></label>
        </div> 
        <span class="shipping-choice-price">{shippingPrice}</span>
    </div>
  )
}

export default ShippingChoice
