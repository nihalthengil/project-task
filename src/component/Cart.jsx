import React, { useContext } from 'react'
import { Context } from '../context';


const Cart = () => {
  const { cart } = useContext(Context);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>ID: {item.id}</h3>
            <h3>Name: {item.name}</h3>
            <h3>Price: {item.price}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;