import React from 'react';  // Importation de React
import './logement.css';  // Importation du fichier CSS pour styliser la fiche logement
import { useParams, useNavigate } from 'react-router-dom';  // Importation des hooks React Router pour gérer les paramètres d'URL et la navigation
import Carrousel from '../../compo/carrousel/carrousel';  // Importation du composant Carrousel pour afficher les images du logement
import Collaps from '../../compo/collaps/collaps';  // Importation du composant Collaps pour les sections déroulantes
import logements from '../../data/logement.json';  // Importation des données des logements
import Header from '../../compo/header/header';  // Importation du composant Header pour l'en-tête
import Footer from '../../compo/footer';  // Importation du composant Footer pour le pied de page
import Rate from "../../compo/Rate/Rate.js";  // Importation du composant Rate pour afficher la note du logement
import Host from "../../compo/host/host.js";  // Importation du composant Host pour afficher les informations du propriétaire

const FicheLogementDisplay = () => {
  const { id } = useParams();  // Récupération de l'id du logement depuis les paramètres de l'URL
  const navigate = useNavigate();  // Initialisation de la navigation

  // Recherche de la fiche logement correspondant à l'id
  const ficheLogement = logements.find((logement) => logement.id === id);

  // Si le logement n'existe pas, redirection vers la page 404
  if (!ficheLogement) {
    navigate('/404');
    return null;  // Arrête le rendu si la fiche n'existe pas
  }

  // Affichage des tags du logement
  const tagsLogement = ficheLogement.tags.map((tag, i) => (
    <div className="tag" key={i}>
      {tag}
    </div>
  ));

  // Affichage des équipements du logement
  const equipements = ficheLogement.equipments.map((equipment, i) => (
    <li key={i}>{equipment}</li>
  ));

  return (
    <>
      <Header />  {/* Affichage de l'en-tête */}
      <div className="Fiche-container">
        <Carrousel slides={ficheLogement.pictures} />  {/* Affichage du carrousel avec les images du logement */}
        <section className="Fiche-logement">
          <div className="description-info">
            <div className="description-info_titletags">
              <div className="description-info_tags_title">
                <span className="titre-logement">{ficheLogement.title}</span>  {/* Titre du logement */}
                <span className="endroit-logement">{ficheLogement.location}</span>  {/* Localisation du logement */}
              </div>
              <div className="description-info_tags">
                {tagsLogement}  {/* Affichage des tags du logement */}
              </div>
            </div>
            <div className="description-info_proprietaire">
              <div className="description-info_proprietaire_nom">
                <Host
                  name={ficheLogement.host.name}  // Nom du propriétaire
                  picture={ficheLogement.host.picture}  // Photo du propriétaire
                />  
              </div>
              <div className="description-info_rate">
                <Rate score={ficheLogement.rating} />  {/* Affichage de la note du logement */}
              </div>
            </div>
          </div>
        </section>
        <div className="description-content">
          <div className="description-content_description">
            <Collaps title="Description" content={ficheLogement.description} />  {/* Affichage de la description du logement */}
          </div>
          <div className="description-content_equipement">
            <Collaps title="Équipements" content={<ul>{equipements}</ul>} />  {/* Affichage des équipements du logement */}
          </div>
        </div>
      </div>
      <Footer />  {/* Affichage du pied de page */}
    </>
  );
};

export default FicheLogementDisplay;  // Exportation du composant pour qu'il puisse être utilisé ailleurs
