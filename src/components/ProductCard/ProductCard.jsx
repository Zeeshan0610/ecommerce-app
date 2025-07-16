import React from "react";
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
    return (
        <div className={styles.card}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className={styles.price}>₹ {product.price}</p>
        <button>Add to Cart</button>
        </div>
    );
}

export default ProductCard;