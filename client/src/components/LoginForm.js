import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/token/', {
        username,
        password,
      })
      .then((response) => {
        const { access, refresh } = response.data;
        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);

        setIsAuthenticated(true);
        navigate('/products');
      })
      .catch((error) => {
        console.error('Error logging in', error);
        setError('Invalid username or password.');
      });
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '60px auto',
        padding: '30px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#f857a6' }}>Login</h2>

      {error && (
        <div
          style={{
            backgroundColor: '#ffe5e5',
            padding: '10px',
            color: '#d00',
            borderRadius: '6px',
            marginBottom: '15px',
            textAlign: 'center',
          }}
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#f857a6',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
