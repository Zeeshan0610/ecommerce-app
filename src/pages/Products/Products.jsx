import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import productsData from '../../data/products.json';
import styles from "./Products.module.css";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(productsData);
        }, 500);
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>All Products</h2>
            <div className={styles.grid}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;
