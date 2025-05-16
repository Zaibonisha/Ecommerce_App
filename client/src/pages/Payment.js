import React, { useState } from 'react';

const Payment = ({ cart }) => {
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvc: '' });

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    if (paymentMethod === 'stripe') {
      if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvc) {
        alert('Please fill in all card details.');
        return;
      }
      alert(`Simulated Stripe payment of $${totalPrice.toFixed(2)} processed!`);
    } else if (paymentMethod === 'paypal') {
      alert(`Simulated PayPal payment of $${totalPrice.toFixed(2)} processed!`);
    }
  };

  return (
    <div style={{ maxWidth: '450px', margin: '40px auto', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Payment</h1>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Total Amount: <strong>${totalPrice.toFixed(2)}</strong>
      </p>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: '500' }}>
          <input
            type="radio"
            value="stripe"
            checked={paymentMethod === 'stripe'}
            onChange={() => setPaymentMethod('stripe')}
            style={{ marginRight: '8px' }}
          />
          Credit/Debit Card (Stripe)
        </label>
        <label style={{ display: 'block', fontWeight: '500' }}>
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
            style={{ marginRight: '8px' }}
          />
          PayPal
        </label>
      </div>

      {paymentMethod === 'stripe' && (
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px' }}>Card Details</h4>
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            value={cardDetails.number}
            onChange={handleInputChange}
            style={inputStyle}
          />
          <div style={{ display: 'flex', gap: '4%' }}>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={cardDetails.expiry}
              onChange={handleInputChange}
              style={{ ...inputStyle, width: '48%' }}
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={cardDetails.cvc}
              onChange={handleInputChange}
              style={{ ...inputStyle, width: '48%' }}
            />
          </div>
        </div>
      )}

      {paymentMethod === 'paypal' && (
        <div style={{ marginBottom: '20px', color: '#666' }}>
          <p>Redirecting to PayPal would happen here (simulated).</p>
        </div>
      )}

      <button
        onClick={handlePayment}
        style={{
          width: '100%',
          background: 'linear-gradient(to right, #f857a6, #ff5858)',
          color: '#fff',
          padding: '14px',
          fontSize: '16px',
          fontWeight: '600',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s ease'
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Pay Now
      </button>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '12px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '15px',
  outline: 'none',
};

export default Payment;
