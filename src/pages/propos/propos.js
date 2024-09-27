import React from "react";  // Importation de la bibliothèque React
import './propos.css';  // Importation du fichier CSS pour la page "About"
import Header from '../../compo/header/header';  // Importation du composant Header pour l'en-tête
import Footer from '../../compo/footer';  // Importation du composant Footer pour le pied de page
import Banner from "../../compo/banner/banner";  // Importation du composant Banner pour l'en-tête de la page
import imgAbout from "../../assets/banner/Home.png";  // Importation de l'image pour le Banner
import Collaps from '../../compo/collaps/collaps';  // Importation du composant Collaps pour les sections déroulantes
import Data from "../../pages/propos/data.json";  // Importation des données pour les sections collapsibles

const About = () => {
  return (
    <div className="about">  {/* Conteneur principal de la page */}
      <Header />  {/* Affiche l'en-tête de la page */}
      <main>  {/* Conteneur principal du contenu de la page */}
        <Banner image={imgAbout} titre="" />  {/* Affiche le banner avec l'image importée */}

        <div className="collapse">  {/* Conteneur pour les éléments de la section collapsible */}
          <div className="collapse_down">  {/* Conteneur pour le contenu collapsible */}
            {Data.map((item) => {  // Examine chaque élément des données importées
              return (
                <div key={item.id}>  {/* Utilisation de l'id comme clé pour chaque élément */}
                  <Collaps content={item.content} title={item.title} />  {/* Affiche chaque section collapsible avec le contenu et le titre */}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />  {/* Affiche le pied de page de la page */}
    </div>
  );
};

export default About;  /* Exportation du composant About pour utilisation ailleurs */