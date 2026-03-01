import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, addToCart } from '../redux/actions';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="wishlist-container" style={{ marginTop: '40px' }}>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? <p>Your wishlist is empty.</p> : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {wishlist.map(item => (
            <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '10px 0', width: '300px' }}>
              <span>{item.name} (Rs {item.price})</span>
              <div>
                 <button onClick={() => {
                   dispatch(addToCart(item));
                   dispatch(removeFromWishlist(item.id));
                 }} style={{ marginRight: '5px' }}>Move to Cart</button>
                 <button onClick={() => dispatch(removeFromWishlist(item.id))} style={{ color: 'red' }}>X</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
