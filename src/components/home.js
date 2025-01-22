import React from "react";
import Registor from "./registor";

const Home =()=>{
return(
    
        <div className="home">
        <div className="container-fluid text-light mt-5">
        <h1>Welcome to our Homepage</h1>
        <p>This is the Homepage of our E-Commerce Website.</p>
        <p>Feel free to explore our products and enjoy shopping!</p>
        <p>Please note that this is a demo website and does not have any actual products or functionalities.</p>
        </div>
        <Registor />
    </div>
)
};

export default Home;