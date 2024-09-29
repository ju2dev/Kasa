import React from 'react'; // Importation de React pour utiliser JSX
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importation routing de react-router-dom
import Header from '../compo/header/header'; // Importation du composant Header pour l'en-tête de l'application
import Footer from '../compo/footer'; // Importation du composant Footer pour le pied de page de l'application
import Home from '../pages/home'; // Importation Home pour la page d'accueil
import FicheLogement from '../pages/logement'; // Importation FicheLogement pour les détails d'un logement
import APropos from '../pages/propos'; // Importation APropos pour la page à propos
import NotFound from '../pages/404'; // Importation NotFound pour les pages non trouvées

function AppRouter() {
  return (
    <Router> {/* Début du routeur pour gérer la navigation */}
      <Header /> {/* Affichage du composant Header en haut de chaque page */}
      <Routes> {/* Définition des routes pour l'application */}
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/logement/:id" element={<FicheLogement />} /> {/* Route pour la page de détails d'un logement avec un paramètre d'ID */}
        <Route path="/a-propos" element={<APropos />} /> {/* Route pour la page à propos */}
        <Route path="*" element={<NotFound />} /> {/* Route pour gérer toutes les autres URL non définies et afficher une page 404 */}
      </Routes>
      <Footer /> {/* Affichage du composant Footer en bas de chaque page */}
    </Router>
  );
}

export default AppRouter; // Exportation du composant AppRouter pour l'utiliser dans d'autres parties de l'application