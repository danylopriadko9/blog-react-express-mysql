import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style.scss';
import axios from '../axios.js';

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = React.useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', inputs);
      navigate('/login');
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input
          required
          type='text'
          placeholder='username'
          onChange={handleChange}
          name='username'
        />
        <input
          required
          type='email'
          placeholder='email'
          onChange={handleChange}
          name='email'
        />
        <input
          required
          type='password'
          placeholder='password'
          onChange={handleChange}
          name='password'
        />
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>
          Do you have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
