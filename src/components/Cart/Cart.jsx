/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => 
{
  const {cart} = props;
  let quantity = 0;
  let priceTotal = 0;
  let totalShippingCharge = 0;
  for(const product of cart)
  {
    if(product.quantity === 0)
        product.quantity = 1;
    quantity = quantity + product.quantity; 
    priceTotal = priceTotal + (product.price * product.quantity);
    totalShippingCharge = totalShippingCharge + product.shipping;
  }
  const tax = priceTotal*7/100;
  const grandTotal = priceTotal + totalShippingCharge + tax;

  return(
    <div className="shop-summary-details">
      <div className="shop-summary-info">
        <h5>Order Summary</h5>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${priceTotal}</p>
        <p>Total Shipping Charge: ${totalShippingCharge}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        <div>
          <button className="clear-cart">
            Clear Cart <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <button className="review-order">
            Review Order <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;