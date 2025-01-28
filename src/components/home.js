import React from "react";
import backgroundImage from './images/background1.jpg';
import background2 from './images/realme.jpg';
import background3 from './images/laptop.jpg';
import background4 from './images/dres.jpg';
import Registor from "./registor/registor";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
<div className="button-container">
      <Link to="/products" style={{ textDecoration: 'none' }}>
        <button className="homebutton">
          Shop Now for Exclusive items.
          <span className="fw-bold fs-3">GET OFF 25%</span>
        </button>
      </Link>
    </div>
      <div className="home">
      <div className="homecontainer">
        {/* Carousel Component */}
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={backgroundImage} className="d-block w-100" alt="First slide background" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Discover the Best Deals</h5>
                <p>Shop our latest collection of gadgets and more.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={background2} className="d-block w-100" alt="Second slide background" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Stylish Smartphones</h5>
                <p>Upgrade your style with the latest smartphones.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={background3} className="d-block w-100" alt="Third slide background" />
              <div className="carousel-caption d-none d-md-block">
                <h5>High-Performance Laptops</h5>
                <p>Power through your day with cutting-edge laptops.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={background4} className="d-block w-100" alt="Fourth slide background" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Fashion Trends</h5>
                <p>Explore our stylish and affordable clothing options.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://brandbajade.com/admin/images/c4b96d9e1d41cb970a49f916bad253881696391341.jpg" className="d-block w-100" alt="Fourth slide background" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Fashion Trends</h5>
                <p>Explore our stylish and affordable clothing options.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={background4} className="d-block w-100" alt="Fourth slide background" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Fashion Trends</h5>
                <p>Explore our stylish and affordable clothing options.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="homereg">
        <img href="./product/product.js" className="homeimg" src="https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg" alt="word"/>
        <Registor/>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
