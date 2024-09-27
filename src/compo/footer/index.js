import React from 'react';
import logo from "../../assets/logo/LOGO.svg"; // Importation du logo utilisé dans le footer
import './footer.css'; // Importation des styles CSS spécifiques au footer

// Composant Footer qui affiche le logo et les informations de copyright
const Footer = () => {
    return (
      <footer className="footer"> {/* Conteneur principal du footer */}
        <img src={logo} alt="Logo Kasa" className="footer_logo" /> {/* Affichage du logo Kasa */}
        <p className="footer_text">
          © 2020 Kasa. All rights reserved {/* Texte de copyright */}
        </p>
      </footer>
    );
}

export default Footer; // Exportation du composant Footer pour l'utiliser dans d'autres parties de l'application