import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Products from "../product/product";
import CartPage from "../cartpage";
import Registor from '../registor/registor';
import Login from '../login';
import Home from '../home/home';
import "./header.css";

const Header = () => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            New Trends
          </Link>
          <form className="formsearch" role="search">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary p--1">
              Search
            </button>
          
          </form>
          <Link className="nav-link text-white" to="/cartpage">
                    Cart ({cart.length})
                  </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
                
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link" to="/ecommerce">
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
        </div>
      </nav>
    {/* main page */}

    {/* <Home /> */}
    {/* <Products addToCart={addToCart} /> */}
      {/* Routes */}
      <Routes>
      <Route path="/ecommerce" element={<Home/>}/>
        <Route path="/registor" element={<Registor/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cartpage" element={<CartPage cart={cart} removeFromCart={removeFromCart} />}/>
      </Routes>
    </div>
  );
};

export default Header;
