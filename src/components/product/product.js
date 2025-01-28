import React, { useState } from 'react';
import productsData from '../data/products.json'; // Adjust the path as needed
import './product.css';

const Product = ({ addToCart }) => {
  const Modal = ({ product, onClose }) => {
    if (!product) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <section>
            <span className="close-btn" onClick={onClose}>&times;</span>
            <img src={product.src} alt={product.name} className="product-img" />
          </section>
          <div>
            <section className="right">
              <h2>{product.name}</h2>
              <p className="text-success fw-bold">Special Price</p>
              <p>RS: {product.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </section>
          </div>
        </div>
      </div>
    );
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
      addToCart(product);
    }
  };

  const categories = ['All', 'Shirts', 'Pants', 'Shoes', 'Furniture','Watch'];

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <h2 className="mt-2">Products</h2>
      <div className="wallpaper">
        <section className="producthead">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'active' : ''}
            >
              {category}
            </button>
          ))}
        </section>
        <section className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <img src={product.src} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">₹{product.price}</p>
              </div>
              <div className="d-flex m-1 justify-content-around align-items-center">
                <button
                  onClick={() => handleViewProduct(product)}
                  className="btn btn-primary"
                >
                  View Product
                </button>
              </div>
            </div>
          ))}

          <Modal product={selectedProduct} onClose={closeModal} />
        </section>
      </div>
    </div>
  );
};

export default Product;
