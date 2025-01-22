import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';

const RegisterPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('Attempting to register with:', email, password);  // Debugging

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registration successful', userCredential.user);  // Debugging

      // Set user after registration
      setUser(userCredential.user);
    } catch (err) {
      console.error('Registration failed:', err.message); // Debugging the error
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already in use. Please log in or use a different email.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters long.');
      } else {
        setError('Failed to register. Please try again.');
      }
    }
  };

  useEffect(() => {
    if (setUser) {
      navigate('/products');  // Navigate to products page once user is set
    }
  }, [setUser, navigate]);

  return (
    <div className='container d-flex flex-column text-center w-100 mt-5 text-light' style={{backgroundColor:"transparent",borderRadius:"1.5rem" , boxShadow:"0 0 5px 2px #cce4ed", height:"60vh" }} >
      <h2 >Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleRegister}>
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
            placeholder="Password" class="form-control" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}  aria-describedby="passwordHelpInline"
            required
          />
        </div>
        <button type="submit" class="btn m-2" style={{backgroundColor:"#09b509",color:"white"}} >Register</button>
      </form >
      <p className='mt-2'>Already have an account?</p>
      <Link to="/login">
        <button className="btn btn-success mb-5 ">Go to Login</button>
      </Link>
    </div>
  );
};

export default RegisterPage;
