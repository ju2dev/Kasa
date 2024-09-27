import React from "react";
import './gallerie.css';  // Importation du fichier CSS pour styliser la galerie
import { Link } from "react-router-dom";  // Importation de "Link" pour permettre la navigation interne dans l'application
import Carte from '../../compo/cartes/carte';  // Importation du composant "Carte" pour afficher chaque logement
import logements from '../../data/logement.json';  // Importation des données des logements depuis un fichier JSON

// Déclaration du composant fonctionnel Gallerie
const Gallerie = () => {
    return (
      <div className="fond">  {/* Conteneur principal avec la classe "fond" */}
        <div className="Gallerie">  {/* Conteneur de la galerie avec la classe "Gallerie" */}
          {/* Boucle à travers chaque logement dans le fichier JSON pour créer un article pour chacun */}
          {logements.map((logement) => (
            <article key={logement.id} className="gallerie-item">  {/* Chaque article a une clé unique pour optimiser le rendu */}
              {/* Le composant "Link" permet de rendre chaque carte cliquable et redirige vers une page détaillée du logement */}
              <Link to={`/logement/${logement.id}`}>
                {/* Affichage du composant Carte avec l'image de couverture et le titre du logement */}
                <Carte image={logement.cover} title={logement.title} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    );
};

export default Gallerie;  // Exportation du composant Gallerie pour pouvoir l'utiliser dans d'autres fichiers