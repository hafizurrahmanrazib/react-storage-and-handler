import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id);
    }

    const removeFromCart = id => {
        removeFromDb(id);
    }

    const deleteFromCart = () => {
        deleteShoppingCart();
    }

    return (
        <div className='product'>
            <h2>Buy This: {name}</h2>
            <p>Only For: ${price}</p>
            <p><small>It has id: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={deleteFromCart}>Delete</button>
        </div>
    );
};

export default Cosmetic;