import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showMsg, setShowMsg] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    addToCart(product);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000); 
  };

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>₹ {product.price}</p>
      <button onClick={handleAddToCart} className={styles.addToCartBtn}> Add to Cart</button>
      {showMsg && <div className={styles.toast}>✅ Product added to cart!</div>}
    </div>
  );
}

export default ProductCard;
