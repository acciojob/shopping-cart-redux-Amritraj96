import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../redux/actions';

const mockProducts = [
  { id: 1, name: "Blue Denim Shirt", category: "SHIRT - BLUE", price: 1799 },
  { id: 2, name: "Red Hoodie", category: "HOODIE - RED", price: 3599 },
  { id: 3, name: "Navy T-Shirt", category: "T-SHIRT - NAVY", price: 1599 },
  { id: 4, name: "Black Chino Pants", category: "CHINO PANTS - BLACK", price: 6599 },
];

const Products = () => {
  const dispatch = useDispatch();

  return (
    <div className="products-container">
      <h2>All Products</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {mockProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px' }}>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>Rs {product.price}</p>
            <button onClick={() => dispatch(addToCart(product))} style={{ background: '#0066cc', color: 'white', padding: '8px', border: 'none', cursor: 'pointer', width: '100%', marginBottom: '5px' }}>
              Add To Cart
            </button>
            <button onClick={() => dispatch(addToWishlist(product))} style={{ background: '#eee', padding: '8px', border: 'none', cursor: 'pointer', width: '100%' }}>
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
