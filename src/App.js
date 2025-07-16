import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <Router>
      <div style={{padding: "2rem"}}>
        <nav style={{marginBottom: "1rem"}}>
          <Link to="/" style={{marginRight: 10}}>Home</Link>
          <Link to="/Produtcs" style={{marginRight: 10}}>Produtcs</Link>
          <Link to="/Cart">Cart</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </div>
    </Router>
  );
}
export default App;
