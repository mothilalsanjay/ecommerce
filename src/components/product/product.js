import React, { useState } from 'react';
import productsData from '../data/products.json'; // Adjust the path as needed
import './product.css';

const Product = ({ addToCart }) => {
  const Modal = ({ product, onClose }) => {
    if (!product) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <section className='left'>
            <span className="close-btn" onClick={onClose}>&times;</span>
            <img src={product.src} alt={product.name} className="product-img" />
            <p className='modal-des'>RS: {product.description}</p>
          </section>
            <section className="right">
              <h4 className='text-center'>{product.name}</h4>
              <div className="rightsection">
    <p className="text-success fw-bold">Special Price</p>
    <p>RS: {product.price}</p>
    <label htmlFor="size">Size:</label>
    <select id="size" name="size">
        <option value="">Select Size</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
    </select>
    <label htmlFor="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
</div>
                <div className='offersection'>
                <p>Available offers</p>
              <p>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</p>
              <p>Bank Offer10% off up to ₹1,500 on BOBCARD Transactions, on orders of ₹4,990 and aboveT&C</p>
              <p>Bank Offer10% off up to ₹2,000 on BOBCARD EMI Transactions, on orders of ₹4,990 and aboveT&C</p>
                </div>
            
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </section>
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

      <div >
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
                <h6 className="card-title">{product.name}</h6>
             
              </div>
              <div className="d-flex justify-content-around align-items-center">
                <button className="btn btn-primary m-2"
                  onClick={() => handleViewProduct(product)}
              
                >
                  View Product
                </button>
              </div>
            </div>
          ))}

          <Modal product={selectedProduct} onClose={closeModal} />
        </section>
      </div>
   
  );
};

export default Product;
