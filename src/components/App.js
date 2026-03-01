import React from "react";
import Products from "./Products";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import '../styles/App.css'; 

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <h1 style={{ textAlign: 'center', padding: '20px', borderBottom: '1px solid #eee' }}>Shopping Cart Assignment</h1>
      <div style={{ padding: '20px' }}>
        <Products />
        <Wishlist />
        <Cart />
      </div>
    </div>
  )
}

export default App;
