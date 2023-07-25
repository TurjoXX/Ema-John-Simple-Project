import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const {img, name, price, seller, ratings} = props.product
    return (
        <div className='product-details'>
             
            <div className='product-info'>
                <img src={img} alt="Image not available" />
                <h4>{name}</h4>
                <p className='price'>Price: ${price}</p>
                <div className='manufac-ratings'>
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Rating: {ratings} start</small></p>
                </div>
            </div>
            <button className='add-to-cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;