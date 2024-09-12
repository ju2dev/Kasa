import React from 'react';
import './carte.css';

function Carte({image, title}) {
    return (
      <div className="carte">
        <img src={image} alt={title} className="carte_img" />
        <div className="carte_overlay"></div>

        <h2 className="carte_title">{title}</h2>
      </div>
    );
}

export default Carte;