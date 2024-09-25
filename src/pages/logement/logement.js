import React, { useState, useEffect } from 'react';
import './logement.css';
import { useParams, useNavigate } from 'react-router-dom';
import Carrousel from '../../compo/carrousel/carrousel';
import Collaps from '../../compo/collaps/collaps';
import logements from '../../data/logement.json'; 
import Header from '../../compo/header/header';
import Footer from '../../compo/footer';
import Rate from "../../compo/Rate/Rate.js";
import Host from "../../compo/host/host.js";

const FicheLogementDisplay = () => {
  // Récupère l'id du logement depuis les paramètres de l'URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Trouve la fiche logement correspondante à l'id
  const ficheLogement = logements.find((logement) => logement.id === id);

  // Si le logement n'existe pas, redirige vers la page 404
  if (!ficheLogement) {
    navigate('/404');
    return null; // Arrête le rendu si la fiche n'existe pas
  }

  // Affichage des tags
  const tagsLogement = ficheLogement.tags.map((tag, i) => (
    <div className="tag" key={i}>
      {tag}
    </div>
  ));

  // Affichage des équipements
  const equipements = ficheLogement.equipments.map((equipment, i) => (
    <li key={i}>{equipment}</li>
  ));

  return (
    <>
      <Header />
      <div className="Fiche-container">
        <Carrousel slides={ficheLogement.pictures} />
        <section className="Fiche-logement">
          <div className="description-info">
            <div className="description-info_titletags">
              <div className="description-info_tags_title">
                <span className="titre-logement">{ficheLogement.title}</span>
                <span className="endroit-logement">{ficheLogement.location}</span>
              </div>
              <div className="description-info_tags">
                {tagsLogement}
              </div>
            </div>
            <div className="description-info_proprietaire">
              <div className="description-info_proprietaire_nom">
                <Host
                  name={ficheLogement.host.name}
                  picture={ficheLogement.host.picture}
                />
              </div>
              <div className="description-info_rate">
                <Rate score={ficheLogement.rating} />
              </div>
            </div>
          </div>
        </section>
        <div className="description-content">
          <div className="description-content_description">
            <Collaps title="Description" content={ficheLogement.description} />
          </div>
          <div className="description-content_equipement">
            <Collaps title="Équipements" content={<ul>{equipements}</ul>} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FicheLogementDisplay;
