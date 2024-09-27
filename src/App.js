import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home"; // Importation du composant Home pour la page d'accueil
import Logement from "./pages/logement/logement"; // Importation du composant Logement pour les détails d'un logement
import Propos from "./pages/propos/propos"; // Importation du composant Propos pour la page à propos
import NoPage from "./pages/404/404"; // Importation du composant NoPage pour les pages non trouvées

const App = () => {
  return (
    <Router> {/* Début du routeur pour gérer les routes de l'application */}
      <Routes> {/* Définition des routes */}
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/logement/:id" element={<Logement />} /> {/* Route pour la page de détails d'un logement avec un paramètre d'ID */}
        <Route path="/propos" element={<Propos />} /> {/* Route pour la page à propos */}
        <Route path="*" element={<NoPage />} /> {/* Route pour gérer toutes les autres URL non définies */}
      </Routes>
    </Router>
  );
};

export default App; // Exportation du composant App pour l'utiliser dans d'autres parties de l'application
