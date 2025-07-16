import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from '../../data/products.json';
import { CartContext } from "../../context/CardContext";
 
function ProductDetails() {
    const { id } = useParams();
    const product = products.find((p) => p/id === parseInt(id));
    const { addToCart} = useContext(CartContext);

    if (!product) {
    return <h2>Product not found!</h2>;
}
return (
    <div style={{ padding: '20px' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width={150} />
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ₹ {product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>}
    </div>
  );
}

export default ProductDetails;