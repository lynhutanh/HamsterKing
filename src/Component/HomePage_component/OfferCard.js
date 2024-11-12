import React from 'react';
import './OfferCard.css';

const OfferCard = ({ title, imageUrl, specialOffer, buttonLabel }) => {
  return (
    <div className="offer-card">
      {specialOffer && <img src={specialOffer} alt="Special Offer" className="special-offer" />}
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <h3>{title}</h3>
      <button>{buttonLabel}</button>
    </div>
  );
};

export default OfferCard;
