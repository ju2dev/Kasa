import React from 'react';
import './Erreur.css';
import { Link } from 'react-router-dom';
import Footer from "../../compo/footer";
import Header from "../../compo/header/header";

function Erreur() {
  return (
    <>
      <Header />
      <div className="container-error">
        <span className="container-error_error">404</span>
        <span className="container-error_message">
          Oups! La page que vous demandez n'existe pas.
        </span>
        <Link className="container-error_lien" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Erreur;