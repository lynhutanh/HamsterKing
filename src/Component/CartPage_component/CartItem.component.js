// CartItem.component
import React from 'react';
import './CartItem.component.css';
import { useCart } from '../CartContext.component/CartContext.component';

const CartItem = ({ id, imgSrc, name, size, price, quantity }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const handleRemove = () => {
    removeFromCart(id);
  };

  const handleIncrease = () => {
    increaseQuantity(id);
  };

  const handleDecrease = () => {
    decreaseQuantity(id);
  };

  return (
    <div className="Cart-card">
      <img src={imgSrc} alt={name} />
      <div className="info">
        <div className="name-product">{name}</div>
        <div className="product-details">
          <span>{size}</span>
          <span>Đơn giá: {price.toLocaleString('vi-VN')}₫</span>
        </div>
      </div>
      <div className="quantity-controls">
        <span className="quantity">{quantity}</span>
        <div className="buttons">
          <button id='quantity-up' onClick={handleIncrease}><i className="fa-solid fa-caret-up"></i></button>
          <button id='quantity-down' onClick={handleDecrease}><i className="fa-solid fa-caret-down"></i></button>
        </div>
      </div>
      <div className="price">{(price * quantity).toLocaleString('vi-VN')}₫</div>
      <button className="delete-item" onClick={handleRemove}><i className="fa-regular fa-trash-can"></i></button>
    </div>
  );
};

export default CartItem;
