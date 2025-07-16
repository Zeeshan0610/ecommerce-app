import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';
import styles from './ProductDetails.module.css';
import { useCart } from '../../context/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div className={styles.container}>Product not found.</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{product.name}</h2>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>₹ {product.price}</p>
      <button className={styles.button} onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
