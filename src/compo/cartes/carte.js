import React from 'react'; // Importation de React pour créer des composants
import './carte.css'; // Importation des styles CSS pour le composant Carte

function Carte({ image, title }) { // Définition du composant Carte avec des props pour l'image et le titre
    return (
        <div className="carte"> {/* Conteneur principal pour la carte */}
            <img src={image} alt={title} className="carte_img" /> {/* Affichage de l'image de la carte avec le titre comme texte alternatif */}

            <h2 className="carte_title">{title}</h2> {/* Titre de la carte affiché en bas */}
        </div>
    );
}

export default Carte; // Exportation du composant Carte pour utilisation dans d'autres parties de l'application