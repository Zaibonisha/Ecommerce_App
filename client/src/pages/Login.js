import React from 'react';
import LoginForm from '../components/LoginForm';

function Login({ setIsAuthenticated }) {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
}

export default Login;
