import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Routes,Route } from 'react-router-dom';
import Products from './product';
import CartPage from './cartpage';
import Registor from './registor';
import Login from './login';
import Home from './home';

const Main = () => {
  const [cart, setCart] = useState([]);
  

  // Function to add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"#359ce6"}}>
        <div className="container-fluid">
          <a className="navbar-brand w-50 text-center" href="/">MAKEOVER</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-50   d-flex justify-content-evenly">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cartpage">
                  Cart ({cart.length})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Product Page and Cart Management */}
      
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/registor" element={<Registor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products addToCart={addToCart} />}/>
      <Route path="/cartpage" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>      
    </div>
  );
};

export default Main;
