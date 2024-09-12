import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Logement from "./pages/logement/logement";
import Propos from "./pages/propos/propos";
import NoPage from "./pages/404/404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
