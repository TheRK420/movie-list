import React from "react";
import "./card.css";

function Card({ title, subtitle, description, image, rating }) {
  return (
    <div className="movie-card">
      <div className="left">
        <img src={image} alt={title} />
        <div className="movie-details">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{description}</p>
          <div>Rating: {rating}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
