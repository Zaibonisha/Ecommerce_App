// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import dressesImg from '../assets/pinkdress.webp';
import shoesImg from '../assets/shoes.jpg';
import pyjamasImg from '../assets/pyjamas.webp';
import coatsImg from '../assets/wwintercoat.jpg';


const categories = [
  { name: 'Dresses', image: dressesImg, link: '/products?category=dresses' },
  { name: 'Shoes', image: shoesImg, link: '/products?category=shoes' },
  { name: 'Pyjamas', image: pyjamasImg, link: '/products?category=pyjamas' },
  { name: 'Coats', image: coatsImg, link: '/products?category=coats' },
];


function Home() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(to right, #f857a6, #ff5858)',
          padding: '60px 20px',
          textAlign: 'center',
          color: '#fff',
          borderRadius: '12px',
          marginBottom: '40px',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
          Discover Fashion That Fits You
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Shop the latest in women's fashion – dresses, shoes, pyjamas, and more.
        </p>
        <Link
          to="/products"
          style={{
            background: '#fff',
            color: '#f857a6',
            padding: '10px 20px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}
        >
          Browse All Products
        </Link>
      </div>

      {/* Category Section */}
      <div>
        <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Shop by Category</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((category) => (
            <Link
              to={category.link}
              key={category.name}
              style={{
                width: '220px',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#333',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
              src={category.image}
              alt={category.name}
              style={{ width: '100%', height: '79%', objectFit: 'cover' }}
              />

              <div style={{ padding: '10px 0', fontSize: '25px', fontWeight: '500' }}>
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
