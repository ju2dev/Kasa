import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo/LOGO.svg";

function Header() {
    return (
      <header className="header">
        <div>
          <NavLink to="/">
            <img className="header_logo" src={logo} alt="Logo Kasa"></img>
          </NavLink>
        </div>
        <nav className="header_nav">
          <ul className="header_nav_">
            <li>
              {/* Lien de navigation vers la page d'accueil */}
              <NavLink
                activeClassName="active"
                className="header_list"
                to="/"
              >Accueil
              </NavLink>
            </li>
            <li>
              {/* Lien de navigation vers la page À propos */}
              <NavLink
                activeClassName="active" 
                className="header_list"
                to="/propos"
              >A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;