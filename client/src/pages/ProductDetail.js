import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [addedMessage, setAddedMessage] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.get(`http://localhost:8000/api/products/${id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedMessage(true);
    setTimeout(() => {
      setAddedMessage(false);
    }, 3000);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <img src={product.image} alt={product.name} style={{ width: '70%', borderRadius: '12px' }} />
      <h2 style={{ marginTop: '20px', fontSize: '24px' }}>{product.name}</h2>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>

      <button
        onClick={() => handleAddToCart(product)}
        style={{
          marginTop: '20px',
          background: 'linear-gradient(to right, #f857a6, #ff5858)',
          color: '#fff',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '600',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Add to Cart
      </button>

      {addedMessage && (
        <div style={{ color: 'green', marginTop: '12px', fontWeight: '500' }}>
          Product added to cart!
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
