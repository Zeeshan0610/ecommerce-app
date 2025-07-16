import React, { useContext, useState } from 'react';
import { useCart } from '../../context/CartContext';
import styles from './Cart.module.css';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill in all the details!');
      return;
    }
    setOrderPlaced(true);
    clearCart();
  };

  const grandTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>

      {orderPlaced ? (
        <div className={styles.successMessage}>
          <h3>🎉 Order Placed Successfully!</h3>
          <p>Congratulations and happy shopping, {formData.name}!</p>
        </div>
      ) : (
        <>
          {cart.length === 0 ? (
            <p className={styles.emptyCart}>🛒 Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} className={styles.cartImage}/>
                  <div className={styles.itemDetails}>
                    <h4>{item.name}</h4>
                    <p>₹ {item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>Remove</button>
                </div>
              ))}

              <div className={styles.totalSection}>
                <strong>Grand Total: ₹ {grandTotal}</strong>
              </div>

              <div className={styles.orderForm}>
                <h3>Enter your details to place order</h3>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange}/>
                <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange}/>
                <textarea name="address" placeholder="Shipping Address" value={formData.address} onChange={handleInputChange} rows="3"/>
                <button onClick={handlePlaceOrder} className={styles.placeOrderBtn}>Place Order</button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
