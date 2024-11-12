import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ imageUrl, title, description, iconClass }) => {
  return (
    <div className="service-card">
      <div className="service-card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="service-card-content">
        <div className="service-card-icon">
          <i className={iconClass}></i>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="learn-more">Tìm hiểu</button>
      </div>
    </div>
  );
};

export default ServiceCard;
