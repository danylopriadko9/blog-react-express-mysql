import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style.scss';
import axios from '../axios.js';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = React.useState({
    username: '',
    password: '',
  });

  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate('/');
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className='auth'>
      <h1>Login</h1>
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
          type='password'
          placeholder='password'
          onChange={handleChange}
          name='password'
        />
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>
          Dont you have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
