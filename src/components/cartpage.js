import React from 'react';
import { Link } from "react-router-dom";
import "./product/product.css"

const Cart = ({ cart, removeFromCart }) => {
  const handleRemove = (productId) => {
    removeFromCart(productId); // Call the remove function with the product ID
  };

  return (
    <div className='text-center mt-2'>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/products">Pls go to products page</Link>
        </div>
      ) : (
        <div>
          <p>Check out your products for delivery</p>
          <div className='product-list'>
            {cart.map((product) => (
              <div key={product.id} className="card">
                <img src={product.src} alt={product.name} className="card-img-top" />
                <div className="card-body">
                  <h6 className="card-title">{product.name}</h6>
                  <p>RS: {product.price}</p>
                </div>
                <div className='cartbutton'>
                  <button className="btn btn-danger" onClick={() => handleRemove(product.id)}>
                    Remove
                  </button>
                  <button className="btn btn-success">Checkout</button>
                
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
