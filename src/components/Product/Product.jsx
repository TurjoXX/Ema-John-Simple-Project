/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product-details'>
            <div className='product-info'>
                <img src={img} alt="Image not available" />
                <h6>{name}</h6>
                <p className='price'>Price: ${price}</p>
                <div className='manufac-ratings'>
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Rating: {ratings} start</small></p>
                </div>
            </div>
            <button onClick={() =>{handleAddToCart(props.product)}} className='add-to-cart-btn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;