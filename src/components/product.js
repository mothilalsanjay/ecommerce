import React from 'react';
import Shirt from './images/shirt.jpg';
import Tshirt from "./images/T Shirt.jpg"
import pant1 from"./images/pant1.jpg";
import pant2 from"./images/pant2.jpg";
import jeans from "./images/pant3.jpg";
import jeans1 from "./images/pant4.jpg";
import shoes  from "./images/shoes.jpg";
import shoes1  from "./images/shoes1.jpg";
import shoes2  from "./images/shoes2.jpg";
import shoes3  from "./images/shoes3.jpg";
import shoes5  from "./images/shoes5.jpg";
import belt from "./images/belt1.jpg";

const Product = ({ addToCart }) => {
  const products = [
    {
      id: '1',
      name: 'Shirts',
      src: Shirt,  // Use the imported image path here
      alt: 'Shirts',
      description: 'This is a sample product.',
      price: 19.99,
    },
    {
      id: '2',
      name: 'T-Shirts',
      src: Tshirt,  // Use the imported image path here
      alt: 'TShirt',
      description: 'This is a sample product.',
      price: 19.99,
    },
    {
      id: '3',
      name: 'Cargo Pants',
      src: pant1,  // Use the imported image path here
      alt: 'pant1',
      description: 'This is a sample product.',
      price: 19.99,
    },
    {
      id: '4',
      name: 'Pants',
      src: pant2,  // Use the imported image path here
      alt: 'pant1',
      description: 'This is a sample product.',
      price: 19.99,
    },
    {
      id: '5',
      name: 'Jeans Pants',
      src: jeans,  // Use the imported image path here
      alt: 'pant1',
      description: 'This is a sample product.',
      price: 19.99,
    },
    {
      id: '6',
      name: 'Jeans Pants',
      src: jeans1,  // Use the imported image path here
      alt: 'pant1',
      description: 'This is a sample product.',
      price: 19.99,
    },
    {
      id: '7',
      name: 'Oxford Shoes',
      src: shoes,  // Use the imported image path here
      alt: 'shoes',
      description: 'This is a sample product.',
      price: 19.99,
    },
    {
      id: '8',
      name: 'Running Shoes',
      src: shoes1,  // Use the imported image path here
      alt: 'shoes',
      description: 'This is a sample product.',
      price: 19.99,
    },
    {
      id: '9',
      name: 'Boots',
      src: shoes2,  // Use the imported image path here
      alt: 'shoes',
      description: 'This is a sample product.',
      price: 19.99,
    },
    {
      id: '10',
      name: 'White Sneakers',
      src: shoes3,  // Use the imported image path here
      alt: 'shoes',
      description: 'This is a sample product.',
      price: 19.99,
    },
    {
      id: '11',
      name: 'Red sneakers',
      src: shoes5,  // Use the imported image path here
      alt: 'shoes',
      description: 'This is a sample product.',
      price: 19.99,
    },
    {
      id: '12',
      name: 'Belt',
      src: belt,  // Use the imported image path here
      alt: 'belt',
      description: 'This is a sample product.',
      price: 19.99,
    }

  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className='wallpaper'>
      <div>
      <h2 className='mt-2'>Products</h2>
      <div className="product-list d-flex justify-content-evenly flex-wrap">
        {products.map((product) => (
         <div key={product.id} className="card mb-4" style={{ width: '18rem', boxShadow:"0 0 10px 8px rgba(0, 0, 0, 0.2)"  }}>
         <img
           src={product.src}
           alt={product.name}
           className="card-img-top"
           style={{ width: '100%', height: '20rem', objectFit: 'fill' }}
         />
         <div className="card-body py-1 d-flex justify-content-between align-items-center">
           <h5 className="card-title">{product.name}</h5>
           <p className="card-text">${product.price}</p>
         </div>
         <div className='d-flex m-1 justify-content-around align-items-center'>
           <button 
             className="btn btn-primary"
             onClick={() => handleAddToCart(product)}
           >
             Add to Cart
           </button>
           <button 
             className="btn fw-bold"
             style={{backgroundColor: "green", color: "white"}}
             onClick={() => handleAddToCart(product)}
           >
             Buy Now
           </button>
         </div>
       </div>
       
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Product;
