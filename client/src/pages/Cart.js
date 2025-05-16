import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) return <div style={{ textAlign: 'center', marginTop: '40px' }}>Your cart is empty.</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Your Cart</h1>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cart.map(item => (
          <li key={item.id} style={{
            marginBottom: '30px',
            padding: '20px',
            border: '1px solid #eee',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            backgroundColor: '#fdfdfd',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <img src={item.image} alt={item.name} style={{ width: '100px', borderRadius: '8px' }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0 0 10px' }}>{item.name}</h3>
              <p style={{ margin: '4px 0' }}>Quantity: {item.quantity}</p>
              <p style={{ margin: '4px 0' }}>Price per item: ${item.price}</p>
              <p style={{ margin: '4px 0' }}>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: '#e74c3c',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'background 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#c0392b'}
                onMouseOut={(e) => e.currentTarget.style.background = '#e74c3c'}
              >
                Remove from Cart
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h2 style={{ textAlign: 'right', marginTop: '20px' }}>Total: ${totalPrice.toFixed(2)}</h2>

      <div style={{ textAlign: 'right' }}>
        <button
          onClick={() => navigate('/payment')}
          style={{
            background: 'linear-gradient(to right, #f857a6, #ff5858)',
            color: '#fff',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
