import React from 'react';
import './banner.css';

function Banniere({ image, texte }) {
    return (
      <div className="banner">
        <img className="banner_img" src={image} alt="Bannière" />
        <div className="banner_sombre"></div>
        <span className="banner_text">{texte}</span>
      </div>
    );
  }
  
  export default Banniere;