import React, { useState } from 'react';
import "../css/AddToCart.css";

function AddToCart({ name, description, price }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    // Here you can implement the logic to add the item to the cart
    setIsAddedToCart(true);
  };

  return (
    <div className="food-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="price">Rs. {price}</span>
      {!isAddedToCart ? (
        <button onClick={handleAddToCart}>Add to Cart</button>
      ) : (
        <span>Added to Cart</span>
      )}
    </div>
  );
}

export default AddToCart;
