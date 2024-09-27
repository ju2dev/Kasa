import React, { useEffect, useState } from 'react';  // Importation des hooks React et de la bibliothèque React
import './home.css';  // Importation du fichier CSS pour styliser la page d'accueil
import Carte from '../../compo/cartes/carte';  // Importation du composant Carte pour afficher les logements
import Banner from '../../compo/banner/banner';  // Importation du composant Banner pour afficher la bannière
import Header from '../../compo/header/header';  // Importation du composant Header pour l'en-tête
import Footer from '../../compo/footer';  // Importation du composant Footer pour le pied de page
import Gallerie from '../../compo/Gallerie/gallerie';  // Importation du composant Gallerie pour afficher la galerie
import imgbannerHome from "../../assets/banner/bannerHome.png";  // Importation de l'image de la bannière

function Home() {
    const [logementsData, setLogementsData] = useState([]);  // État pour stocker les données des logements
    const [isLoading, setIsLoading] = useState(true);  // État pour indiquer si les données sont en cours de chargement
    const [error, setError] = useState(null);  // État pour gérer les erreurs potentielles

    useEffect(() => {
        // Effet pour charger les données des logements lorsque le composant est monté
        fetch("/logement.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement du fichier logement.json");  // Lancer une erreur si la réponse est incorrecte
                }
                return response.json();  // Convertir la réponse en JSON
            })
            .then((data) => {
                setLogementsData(data);  // Mettre à jour l'état avec les données des logements
                setIsLoading(false);  // Fin du chargement
            })
            .catch((error) => {
                setError(error.message);  // Mettre à jour l'état en cas d'erreur
                setIsLoading(false);  // Fin du chargement
            });
    }, []);  // Tableau de dépendances vide : l'effet s'exécute uniquement lors du premier rendu

    // Contenu à afficher en fonction du statut de chargement ou de l'erreur
    const galleryContent = isLoading ? (
        <p>Chargement des logements...</p>  // Message de chargement
    ) : error ? (
        <p>Erreur : {error}</p>  // Message d'erreur
    ) : (
        logementsData.map((logement) => (
            <Carte key={logement.id} logement={logement} />  // Affichage des logements sous forme de cartes
        ))
    );

    return (
        <div className="home">
            <Header />  {/* Affiche l'en-tête */}
            <main>
                <Banner texte="Chez vous, partout et ailleurs" image={imgbannerHome} />  {/* Affiche la bannière avec le texte et l'image */}
            </main>
            <Gallerie className="carte">
                {galleryContent}  {/* Affiche le contenu de la galerie */}
            </Gallerie>
            <Footer />  {/* Affiche le pied de page */}
        </div>
    );
}

export default Home;  // Exportation du composant Home pour qu'il puisse être utilisé ailleurs
