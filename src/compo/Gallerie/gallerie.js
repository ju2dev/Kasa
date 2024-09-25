import React from "react";
import './gallerie.css'; 
import { Link } from "react-router-dom";
import Carte from '../../compo/cartes/carte'; 
import logements from '../../data/logement.json'; 

const Gallerie = () => {
    return (
      <div className="fond">
        <div className="Gallerie">
          {logements.map((logement) => (
            <article key={logement.id} className="gallerie-item">
              <Link to={`/logement/${logement.id}`}>
                <Carte image={logement.cover} title={logement.title} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    );
};

export default Gallerie;