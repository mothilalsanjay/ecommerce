import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './registor.css'; // Updated CSS file name

const RegisterPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      console.log('Attempting to register with:', email, password);
      setUser({ email });
      navigate('/products');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  useEffect(() => {
    if (setUser) {
      navigate('/products');
    }
  }, [setUser, navigate]);

  return (
    <div class="container1">
      <h2>Register</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleRegister}>
        <div className="d-flex flex-column">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p className='text-center'>Already have an account?</p>
      <Link to="/login">
        <button className="btn btn-success">Go to Login</button>
      </Link>
    </div>
  );
};

export default RegisterPage;
