import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(to right, #f857a6, #ff5858)', // match home hero
    padding: '12px 24px',
    color: '#fff',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '20px',
    fontWeight: '500',
    fontSize: '25px',
    transition: 'opacity 0.3s',
    cursor: 'pointer',
  };

  const linkHover = (e) => (e.currentTarget.style.opacity = '0.8');
  const linkOut = (e) => (e.currentTarget.style.opacity = '1');

  const leftLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  };

  const rightLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav style={navStyle}>
      <div style={leftLinksStyle}>
        <Link to="/" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Home</Link>
        <Link to="/products" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Products</Link>
        <Link to="/cart" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Cart</Link>
      </div>

      <div style={rightLinksStyle}>
        {isAuthenticated ? (
          <span onClick={handleLogout} style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Logout</span>
        ) : (
          <>
            <Link to="/login" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Login</Link>
            <Link to="/register" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
