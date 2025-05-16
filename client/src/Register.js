// pages/Register.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

function Register() {
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm />
    </div>
  );
}

export default Register;
