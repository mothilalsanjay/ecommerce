import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Attempting to log in with:', email, password);  // Debug log

  };

  return (
    <div className='container d-flex text-center w-75 mt-5 text-dark'>

      <section>
        <h2>Welcome back!</h2>
        <p>Please login to continue.</p>
        <p>Don't have an account? <Link to="/register">Register now</Link></p>
        <p>Forgot your password? <Link to="/forgot-password">Reset it here</Link></p>
      </section>
      <section>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className='d-flex flex-column '>
        <label htmlFor='email' >Email ID</label>
          <input
            type="email"
            placeholder="Email" className="form-control mb-2" id="name" name="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
        <label htmlFor='password' >Password</label>
          <input
            type="password"
            placeholder="Password"  class="form-control" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" class="btn m-4" style={{backgroundColor:"#09b509",color:"white"}} >Login</button>
      </form>
      <p >Have you registered ?</p>
      <Link to="/">
        <button className="btn btn-info text-light">Go to Home Page</button>
      </Link>
      </section>
    </div>
  );
};

export default LoginPage;
