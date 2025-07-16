import React from "react";
import styles from './ProductCard.module.css';
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${product.id}`);
    };
    return (
        <div 
        onClick={handleClick}
        style={{
            border: '1px solid black',
            margin: '10px',
            padding: '10px',
            cursor: 'pointer',
        }}
        >
        <h3>{product.name}</h3>
         <p>₹ {product.price}</p>
        </div>
    );
}

export default ProductCard;