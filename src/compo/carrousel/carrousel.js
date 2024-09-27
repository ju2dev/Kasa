import './carrousel.css'; // Importation des styles CSS pour le composant Carrousel
import React, { useState } from "react"; // Importation de React et du hook useState pour gérer l'état
import flecheRight from '../../assets/flèches/fleche-right.png'; // Importation de l'image pour la flèche droite
import flecheLeft from '../../assets/flèches/fleche-left.png'; // Importation de l'image pour la flèche gauche

function Carrousel({ slides = [] }) { // Définition du composant Carrousel avec les props 'slides' pour les images
  const [current, setCurrent] = useState(0); // État pour suivre l'index de l'image actuelle
  const length = slides.length; // Longueur du tableau d'images pour savoir combien d'images il y a

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // Si c'est la dernière image, revenir à la première ; sinon, passer à l'image suivante
  };

  // Fonction pour revenir à l'image précédente
  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // Si c'est la première image, aller à la dernière ; sinon, revenir à l'image précédente
  };

  // Vérifie si 'slides' est un tableau et s'il contient des images ; sinon, affiche un message d'erreur
  if (!Array.isArray(slides) || slides.length === 0) {
    return <div>Aucune image disponible</div>; // Affiche ce message si le tableau est vide ou invalide
  }

  return (
    <section className="slide"> {/* Conteneur principal du carrousel */}
      {length > 1 && ( // Affiche la flèche gauche uniquement s'il y a plus d'une image
        <p className="left-Arrow" onClick={prevImage}> {/* Flèche gauche pour revenir à l'image précédente */}
          <img src={flecheLeft} alt="Previous slide" /> {/* Image de la flèche gauche */}
        </p>
      )}
      {length > 1 && ( // Affiche la flèche droite uniquement s'il y a plus d'une image
        <p className="right-Arrow" onClick={nextImage}> {/* Flèche droite pour passer à l'image suivante */}
          <img src={flecheRight} alt="Next slide" /> {/* Image de la flèche droite */}
        </p>
      )}
      {slides.map((image, index) => { // Parcours du tableau d'images pour créer les diapositives
        return (
          <div
            key={index} // Utilisation de l'index comme clé unique pour chaque diapositive
            className={index === current ? "slider active" : "slider"} /* Classe active pour l'image actuellement affichée */
          >
            {index === current && ( // Affiche uniquement l'image courante
              <>
                <img
                  src={image} // URL de l'image pour la diapositive actuelle
                  alt={`Slide ${index + 1}`} // Texte alternatif pour l'image
                  className="slide_image" // Classe CSS pour l'image du carrousel
                />
                {length > 1 && ( // Affiche la numérotation des diapositives uniquement s'il y a plus d'une image
                  <span className="slider_number"> {/* Affichage du numéro de la diapositive */}
                    {current + 1}/{length} {/* Affichage de la position actuelle et du nombre total d'images */}
                  </span>
                )}
              </>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carrousel; // Exportation du composant Carrousel pour utilisation dans d'autres parties de l'application

