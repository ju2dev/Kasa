import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../compo/header/header';
import Footer from '../compo/footer';
import Home from '../pages/home';
import FicheLogement from '../pages/logement';
import APropos from '../pages/propos';
import NotFound from '../pages/404';

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;