import React from 'react';

function ProductCard({ product }) {
  const imageUrl = product.image.startsWith('http')
    ? product.image
    : `http://localhost:8000${product.image}`;

  return (
    <div
      className="product-card"
      style={{
        border: '1px solid #ddd',
        padding: '16px',
        borderRadius: '8px',
        width: '220px',
        textAlign: 'center',
        margin: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: '#f9f9f9',
          borderRadius: '4px',
          marginBottom: '10px',
        }}
      >
        <img
          src={imageUrl}
          alt={product.name}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
      <h3 style={{ fontSize: '16px', margin: '8px 0' }}>{product.name}</h3>
      <p
        style={{
          fontSize: '14px',
          color: '#444',
          height: '40px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          marginBottom: '8px',
        }}
        title={product.description}
      >
        {product.description}
      </p>
      <p style={{ margin: '4px 0', fontSize: '14px', color: '#666' }}>
        Category:{' '}
        <strong>
          {product.category?.name || product.category || 'Uncategorized'}
        </strong>
      </p>
      <p style={{ fontWeight: 'bold', color: '#333' }}>${product.price}</p>
    </div>
  );
}

export default ProductCard;
