import React from 'react';
import emptyStar from "../../assets/start/startVide.png";  // Importation de l'image de l'étoile vide
import fullStar from "../../assets/start/startRempli.png";  // Importation de l'image de l'étoile remplie

// Déclaration du composant fonctionnel Rate
// Ce composant reçoit un score via les props et affiche une note sous forme d'étoiles (pleines ou vides)
function Rate(props) {
  const score = props.score;  // Récupération du score à partir des props
  const notes = [1, 2, 3, 4, 5];  // Tableau représentant les 5 niveaux de notation

  return (
    <div className="rate-contenair">  {/* Conteneur principal pour les étoiles */}
      {/* Boucle sur les valeurs de notes pour générer 5 étoiles */}
      {notes.map((note) =>
        score >= note ? (
          // Si le score est supérieur ou égal à la note, on affiche une étoile remplie
          <img
            key={note.toString()}  // Clé unique pour chaque élément dans la boucle
            className="etoile"  // Classe CSS pour styliser l'étoile
            src={fullStar}  // Source de l'image de l'étoile remplie
            alt="star"  // Texte alternatif pour l'accessibilité
          />
        ) : (
          // Sinon, on affiche une étoile vide
          <img
            key={note.toString()}  // Clé unique pour chaque étoile
            className="etoile"  // Classe CSS pour styliser l'étoile
            src={emptyStar}  // Source de l'image de l'étoile vide
            alt="star"  // Texte alternatif pour l'accessibilité
          />
        )
      )}
    </div>
  );
}

export default Rate;  // Exportation du composant Rate pour pouvoir l'utiliser dans d'autres parties de l'application