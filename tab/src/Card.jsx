/* eslint-disable react/prop-types */
import React from 'react';
import '../src/tabs.css';

const Card = ({ title, subtitle, text, buttonLabel }) => (
  <div className="card">
    <h2>{title}</h2>
    <div className="card-content">
      <h2>{subtitle}</h2>
      <span>{text}</span>
    </div>
    <button>{buttonLabel}</button>
  </div>
);

export default Card;

