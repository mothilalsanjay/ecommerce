import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Attempting to log in with:', email, password);  // Debug log

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');  // Debug log
      setUser(auth.currentUser);  // Set the user using the passed prop
      navigate('/products');  // Redirect to the products page after login
    } catch (err) {
      console.error('Login error:', err);  // Debug log
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className='container d-flex flex-column text-center w-75 mt-5 text-dark'>
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
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        <button type="submit" class="btn m-4" style={{backgroundColor:"#09b509",color:"white"}} >Login</button>
      </form>
      <p >Have you registered ?</p>
      <Link to="/">
        <button className="btn btn-info text-light">Go to Home Page</button>
      </Link>
    </div>
  );
};

export default LoginPage;
