import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../../data/products.json';
import styles from './ProductDetails.module.css';
import { useCart } from '../../context/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h2>Product not found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/products')} className={styles.backButton}>
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add multiple items based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= 10) {
      setQuantity(value);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <button onClick={() => navigate('/products')} className={styles.backButton}>
          ← Back to Products
        </button>
      </div>
      
      <div className={styles.productContainer}>
        <div className={styles.imageSection}>
          <img 
            src={product.image} 
            alt={product.name} 
            className={styles.productImage}
          />
        </div>
        
        <div className={styles.detailsSection}>
          <h1 className={styles.title}>{product.name}</h1>
          
          <div className={styles.priceSection}>
            <span className={styles.price}>₹{product.price.toLocaleString()}</span>
            <span className={styles.originalPrice}>₹{(product.price * 1.2).toLocaleString()}</span>
            <span className={styles.discount}>20% OFF</span>
          </div>
          
          <div className={styles.description}>
            <h3>Product Description</h3>
            <p>
              Experience the perfect blend of style and comfort with our premium {product.name.toLowerCase()}. 
              Made with high-quality materials and designed for everyday use, this product offers exceptional 
              value for money. Whether you're looking for functionality or fashion, this item delivers on both fronts.
            </p>
          </div>
          
          <div className={styles.features}>
            <h3>Key Features</h3>
            <ul>
              <li>Premium quality materials</li>
              <li>Comfortable and durable design</li>
              <li>Available in multiple sizes</li>
              <li>Easy to maintain and clean</li>
              <li>1 year warranty included</li>
            </ul>
          </div>
          
          <div className={styles.quantitySection}>
            <label htmlFor="quantity">Quantity:</label>
            <div className={styles.quantityControls}>
              <button 
                onClick={decreaseQuantity} 
                className={styles.quantityBtn}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max="10"
                className={styles.quantityInput}
              />
              <button 
                onClick={increaseQuantity} 
                className={styles.quantityBtn}
                disabled={quantity >= 10}
              >
                +
              </button>
            </div>
          </div>
          
          <div className={styles.actionButtons}>
            <button 
              onClick={handleAddToCart} 
              className={styles.addToCartButton}
            >
              Add to Cart ({quantity})
            </button>
            <button 
              onClick={() => navigate('/cart')} 
              className={styles.viewCartButton}
            >
              View Cart
            </button>
          </div>
          
          {showMessage && (
            <div className={styles.successMessage}>
              ✅ {quantity} {quantity === 1 ? 'item' : 'items'} added to cart!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
