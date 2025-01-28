import React from 'react';
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  const handleRemove = (productId) => {
    removeFromCart(productId); // Call the remove function with the product ID
  };
  

  return (
    <div className='text-center mt-2' >
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div>
             <p>Your cart is empty.</p>
             <a href="/products">Pls go to products page </a>
        </div>
     
      ) : (
        <div>
  <p>Check out your products for delivery</p>
        <div className='d-flex justify-content-evenly flex-wrap' >
          {cart.map((product) => (
            <div key={product.id} className="card mb-4" style={{ width: '15rem', boxShadow:"0 0 10px 1px grey" }} >
              <img src={product.src} alt={product.name} className="card-img-top"style={{ width: '100%', height: '15rem', objectFit: 'fill' }}  />
              <div className="card-body py-1 d-flex justify-content-between align-items-center">
           <h5 className="card-title">{product.name}</h5>
           <p className="card-text">${product.price}</p>
         </div>
              <div className='d-flex justify-content-evenly mb-1'>
                <Link >
                <button className="btn btn-danger" onClick={() => handleRemove(product.id)}> Remove
                </button>
                </Link>
          <Link to="/registor">
            <button className="btn btn-success">Checkout</button>
          </Link>
                </div>
            </div>
          ))}
        </div>
        </div>
      
      )}
    </div>
  );
};

export default Cart;
