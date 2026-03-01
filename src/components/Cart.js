import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, applyCoupon } from '../redux/actions';

const Cart = () => {
  const { cart, discount } = useSelector(state => state);
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = () => {
    if (couponCode === 'DISCOUNT10') {
      dispatch(applyCoupon(10)); // 10% discount
      alert('Coupon Applied!');
    } else {
      alert('Invalid Coupon Code');
    }
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  return (
    <div className="cart-container" style={{ marginTop: '40px' }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '10px 0' }}>
              <div>
                <h4>{item.name}</h4>
                <p>Rs {item.price} x {item.quantity}</p>
              </div>
              <div>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(removeFromCart(item.id))} style={{ marginLeft: '10px', color: 'red' }}>Remove</button>
              </div>
            </div>
          ))}
          
          <div style={{ marginTop: '20px' }}>
            <input 
              type="text" 
              placeholder="Enter code (e.g. DISCOUNT10)" 
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button onClick={handleApplyCoupon}>Apply</button>
          </div>

          <h3>Subtotal: Rs {subtotal.toFixed(2)}</h3>
          {discount > 0 && <h3 style={{ color: 'green' }}>Discount: - Rs {discountAmount.toFixed(2)} ({discount}%)</h3>}
          <h2>Total: Rs {total.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
