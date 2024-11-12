// ProductCard.jsx
import React from 'react';
import './ProductCard.css';
import { useCart } from '../CartContext.component/CartContext.component';

const ProductCard = ({ image, name, price, rating, reviews, handleBuyNow }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const priceNumber = parseInt((price || '0').toString().replace(/\D/g, ''));
    addToCart({
      id: Date.now(),
      image,
      name,
      price: priceNumber,
      rating,
      reviews,
      quantity: 1 // Default quantity is 1
    });
  };

  const displayPrice = price ? parseInt(price.toString().replace(/\D/g, '')).toLocaleString('vi-VN') : '0';

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-title">{name}</h3>
      <div className="product-price">{displayPrice}₫</div>
      <button onClick={handleBuyNow} className="buy-now">Mua ngay</button>
      <i className="fa-solid fa-cart-shopping" onClick={handleAddToCart}>+</i>
    </div>
  );
};

export default ProductCard;
