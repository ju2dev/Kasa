import React, { useEffect, useState } from 'react';
import './home.css'; 
import Carte from '../../compo/cartes/carte'; 
import Banner from '../../compo/banner/banner'; 
import Header from '../../compo/header/header';
import Footer from '../../compo/footer';
import Gallerie from '../../compo/Gallerie/gallerie';
import imgbannerHome from "../../assets/banner/bannerHome.png";

function Home() {
    const [logementsData, setLogementsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Indicateur de chargement
    const [error, setError] = useState(null); // Gestion des erreurs

    useEffect(() => {
        fetch("/logement.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement du fichier logement.json");
                }
                return response.json();
            })
            .then((data) => {
                setLogementsData(data);
                setIsLoading(false); // Fin du chargement
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false); // Fin du chargement en cas d'erreur
            });
    }, []);

    // Contenu affiché en fonction du statut de chargement ou de l'erreur
    const galleryContent = isLoading ? (
        <p>Chargement des logements...</p>
    ) : error ? (
        <p>Erreur : {error}</p>
    ) : (
        logementsData.map((logement) => (
            <Carte key={logement.id} logement={logement} />
        ))
    );

    return (
        <div className="home">
            <Header />
            <main>
                <Banner texte="Chez vous, partout et ailleurs" image={imgbannerHome} />
            </main>
            <Gallerie className="carte">
                {galleryContent}
            </Gallerie>
            <Footer />
        </div>
    );
}

export default Home;
