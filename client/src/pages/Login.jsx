import React from 'react';
import { Link } from 'react-router-dom';
import '../style.scss';

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type='text' placeholder='username' />
        <input required type='password' placeholder='password' />
        <button>Login</button>
        <p>This is an Error!</p>
        <span>
          Dont you have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
