import React from 'react';
import './banner.css'; // Importation des styles CSS pour le composant Banner

// Définition du composant
function Banniere({ image, texte }) {
    return (
        <div className="banner"> {/* Conteneur principal de la bannière */}
            <img className="banner_img" src={image} alt="Bannière" /> {/* Image de la bannière */}
            <div className="banner_sombre"></div> {/* Couverture sombre pour améliorer la lisibilité du texte */}
            <h1 className="banner_text">{texte}</h1> {/* Texte affiché sur la bannière */}
        </div>
    );
}

export default Banniere; // Exportation du composant pour pouvoir l'utiliser dans d'autres parties de l'application