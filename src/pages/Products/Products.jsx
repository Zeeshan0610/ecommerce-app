import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import productsData from '../../data/products.json';
import styles from "./Products.module.css";

function Products() {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(productsData);
        }, 500);
    }, []);
    return (
        <div>
            <h2>All Products</h2>
            <div className={StyleSheet.grid}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;