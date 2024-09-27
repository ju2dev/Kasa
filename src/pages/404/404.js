import React from 'react';  // Importation de la bibliothèque React
import './Erreur.css';  // Importation du fichier CSS pour les styles de la page d'erreur
import { Link } from 'react-router-dom';  // Importation de Link pour la navigation interne
import Footer from "../../compo/footer";  // Importation du composant Footer
import Header from "../../compo/header/header";  // Importation du composant Header

// Déclaration du composant fonctionnel Erreur
function Erreur() {
  return (
    <>
      <Header />  {/* Affiche l'en-tête de la page */}
      <div className="container-error">  {/* Conteneur principal pour la page d'erreur */}
        <span className="container-error_error">404</span>  {/* Code d'erreur */}
        <span className="container-error_message">
          Oups! La page que vous demandez n'existe pas.
        </span>  {/* Message d'erreur */}
        <Link className="container-error_lien" to="/">  {/* Lien pour revenir à la page d'accueil */}
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />  {/* Affiche le pied de page */}
    </>
  );
}

export default Erreur;  // Exportation du composant Erreur pour qu'il puisse être utilisé ailleurs