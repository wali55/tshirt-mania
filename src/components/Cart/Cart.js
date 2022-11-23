import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    // conditional rendering options
    // 1. Element variable
    // 2. ternary operator
    // 3. and(&&) operator
    // 4. or(||) operator

    let command;
    if(cart.length === 0){
        command = <p>Please add some items.</p>
    }
    else if(cart.length === 1){
        command = <p>Please add more items.</p>
    }
    else{
        command = <p><small>Thanks for adding items.</small></p>
    }

    return (
        <div>
           <h2>Selected Items: {cart.length}</h2>
           
           {
            cart.map((tShirt) => <p>
                {tShirt.name}
                <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
           } 
           {command}
           {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove all</button>}
           {cart.length === 3 && <p>Trigonal</p>}
           {cart.length === 0 || <p>You are buying</p>}
        </div>
    );
};

export default Cart;