import React, { useState, useRef, useEffect } from "react"; // Importation des hooks React
import flecheHaut from '../../assets/flèches/fleche-haut.png'; // Importation de l'image pour la flèche vers le haut
import flecheBas from '../../assets/flèches/fleche-bas.svg'; // Importation de l'image pour la flèche vers le bas
import './collaps.css'; // Importation des styles CSS pour le composant Collapse

const Collapse = ({ title, content }) => { // Définition du composant Collapse avec les props 'title' et 'content'
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture ou la fermeture du collapse
  const contentRef = useRef(null); // Référence pour le contenu du collapse

  // Gestion dynamique de la transition en fonction de l'état d'ouverture
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.opacity = isOpen ? 1 : 0; // Ajuste l'opacité en fonction de l'état d'ouverture
    }
  }, [isOpen]); // Dépend de 'isOpen' pour déclencher l'effet lorsque l'état change

  return (
    <div className="collapse_container"> {/* Conteneur principal du collapse */}
      <div className="collapse_title" onClick={() => setIsOpen(!isOpen)}> {/* Titre qui toggle l'ouverture du collapse */}
        <h2>{title}</h2> {/* Affichage du titre */}
        <img
          src={isOpen ? flecheBas : flecheHaut} // Changement de l'image de la flèche en fonction de l'état
          alt={isOpen ? "Flèche vers le bas" : "Flèche vers le haut"} // Texte alternatif pour l'image de la flèche
          className={isOpen ? "arrow-down" : "arrow-up"} // Classe pour la flèche en fonction de l'état
        />
      </div>
      <div
        ref={contentRef} // Référence pour accéder au contenu du collapse
        className={`collapse_content ${isOpen ? "open" : ""}`} // Classe dynamique pour le contenu en fonction de l'état
      >
        {typeof content === 'string' ? (
          <p>{content}</p> // Si le contenu est une chaîne de caractères, l'afficher dans un paragraphe
        ) : (
          content // Sinon, afficher le contenu tel quel (pour les éléments React)
        )}
      </div>
    </div>
  );
};

export default Collapse; // Exportation du composant Collapse pour utilisation ailleurs dans l'application
