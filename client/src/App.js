import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

// Import pages
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';  // Import Cart page
import Payment from './pages/Payment';


// Import components
import Navbar from './components/Navbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);  // Cart state

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      axios.post('http://localhost:8000/api/token/verify/', { token })
        .then(() => setIsAuthenticated(true))
        .catch(() => setIsAuthenticated(false));
    }
  }, []);

  // Add product to cart (increase quantity if already exists)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart by id
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Dummy proceed to payment function
  const proceedToPayment = () => {
    alert('Proceeding to payment...');
    // Add your payment integration logic here
  };

  return (
    <Router>
      <div>
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cart={cart} 
                removeFromCart={removeFromCart} 
                proceedToPayment={proceedToPayment} 
              />
            } 
          />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route 
  path="/cart" 
  element={
    <Cart 
      cart={cart} 
      removeFromCart={removeFromCart} 
      // You can omit proceedToPayment here since Cart uses navigate internally
    />
  } 
/>

<Route 
  path="/payment" 
  element={
    <Payment cart={cart} />
  } 
/>


          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
