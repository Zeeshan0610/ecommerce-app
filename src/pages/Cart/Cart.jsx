import { useContext } from "react";
import { CartContext } from "../../context/CardContext";

function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);

    if (cartItems.length === 0) {
    return <h2>Your cart is empty.</h2>;
    }

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.map((item) => (
 <div key={item.id} style={{ border: '1px solid gray', marginBottom: '10px', padding: '10px' }}>
          <h3>{item.name}</h3>
          <p>₹ {item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;