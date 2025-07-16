import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="layout">
        {}
        <header className="header">
          <div className="logo">🛒 ShopZee</div>
          <div className="nav-buttons">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </header>

        {}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        {}
        <footer className="footer">
          © {new Date().getFullYear()} Zeeshan E-Commerce App. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
