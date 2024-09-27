import React from 'react';

// Déclaration du composant fonctionnel Host
// Il reçoit des propriétés (props) pour afficher le nom et la photo de l'hôte
function Host(props) {
    return (
      <>
        {/* Affichage du nom du propriétaire avec la classe CSS "nom-proprietaire" */}
        <span className="nom-proprietaire">{props.name}</span>
        {/* Affichage de la photo du propriétaire avec la classe CSS "photo-proprietaire" */}
        <img
          className="photo-proprietaire"
          src={props.picture}  // L'URL de la photo est récupérée depuis les props
          alt="Propriétaire"  // Texte alternatif pour l'accessibilité
        />
      </>
    );
}

export default Host;  // Exportation du composant Host pour pouvoir l'utiliser dans d'autres parties de l'application