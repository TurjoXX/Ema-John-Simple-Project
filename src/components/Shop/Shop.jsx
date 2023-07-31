/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => 
{
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>
    {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect( () =>
    {
        const storedCart = getShoppingCart();
        const updatedCart = [];
        for(const id in storedCart)
        {
            const savedProduct = products.find(product => product.id == id);
            if(savedProduct)
            {
                const quantity = storedCart[id];
                savedProduct.quantity = quantity;
                updatedCart.push(savedProduct);
            }
        }
        setCart(updatedCart);
    },[products])

    const handleAddToCart = (product) =>
    {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => 
                    <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}>
                    </Product>)
                }
            </div>

            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;