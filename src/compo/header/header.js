import React from 'react';
import './header.css';  // Importation du fichier CSS pour styliser l'en-tête
import { NavLink } from 'react-router-dom';  // Importation de "NavLink" pour la navigation avec gestion de l'état actif
import logo from "../../assets/logo/LOGO.svg";  // Importation du logo de l'application depuis les assets

// Déclaration du composant fonctionnel Header
function Header() {
  return (
    <header className="header">  {/* Conteneur principal de l'en-tête avec la classe "header" */}
      <div>
        {/* Utilisation de "NavLink" pour rendre le logo cliquable, redirigeant vers la page d'accueil */}
        <NavLink to="/">
          {/* Affichage du logo avec son chemin source et son texte alternatif */}
          <img className="header_logo" src={logo} alt="Logo Kasa" />
        </NavLink>
      </div>
      {/* Section de navigation principale */}
      <nav className="header_nav">
        <ul className="header_nav_">  {/* Liste des éléments de navigation */}
          <li>
            {/* Lien de navigation vers la page d'accueil, avec gestion de l'état actif */}
            <NavLink 
              className={({ isActive }) => 
                isActive ? "header_list active" : "header_list"
              }  // Si le lien est actif, on lui applique la classe "active" en plus de "header_list"
              to="/"
            >
              Accueil  {/* Texte du lien vers la page d'accueil */}
            </NavLink>
          </li>
          <li>
            {/* Lien de navigation vers la page "A propos", avec gestion de l'état actif */}
            <NavLink 
              className={({ isActive }) => 
                isActive ? "header_list active" : "header_list"
              }  // Application conditionnelle de la classe "active" si ce lien est actif
              to="/propos"
            >
              A propos  {/* Texte du lien vers la page "A propos" */}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;  // Exportation du composant Header pour pouvoir l'utiliser ailleurs dans l'application