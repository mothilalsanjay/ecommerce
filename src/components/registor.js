import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('Attempting to register with:', email, password);  // Debugging

   
  };

  useEffect(() => {
    if (setUser) {
      navigate('/products');  // Navigate to products page once user is set
    }
  }, [setUser, navigate]);

  return (
    <div className='container d-flex flex-column text-center w-100 mt-5 text-light' style={{backgroundColor:"transparent",borderRadius:"1.5rem" , boxShadow:"0 0 5px 2px #cce4ed", height:"60vh" }} >
      <h2 >Register</h2>
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
