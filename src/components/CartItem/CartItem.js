import React from 'react'
import "./CartItem.css";

const CartItem = ({photoPath, title, price}) => {
  return (
    <>
        <tr class="table-data-row">
            <td class="product-table-1">
                <img src={photoPath} />
                <div class="title-description">
                    <h4>{title}</h4>
                    <a href="#">Remove</a>
                </div>
            </td>
            <td class="product-table-alignment">{price}</td>
            <td class="product-table-alignment">
                <input type="number" id="cart-quantity" min="1" step="1" />
            </td>                        
            <td class="product-table-alignment">$ 9.99</td>                        
        </tr>
    </>
  )
}

export default CartItem
