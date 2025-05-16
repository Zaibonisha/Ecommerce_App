import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const query = useQuery();
  const category = query.get('category'); // category from URL query param

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (!token) {
      setError('No access token found. Please log in.');
      return;
    }

    let url = 'http://localhost:8000/api/products/';
    if (category) {
      url += `?category=${encodeURIComponent(category)}`;
    }

    setLoading(true);
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      setProducts(response.data);
      setError(null);
    })
    .catch(err => {
      if (err.response?.status === 401) {
        setError('Unauthorized. Your session may have expired. Please log in again.');
      } else {
        setError('An error occurred while fetching products.');
      }
      console.error(err);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [category]);

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <h1>Product List {category ? `- ${category}` : ''}</h1>
      <div
        className="product-list"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'flex-start',
          padding: '20px 0',
        }}
      >
        {products.map(product => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
