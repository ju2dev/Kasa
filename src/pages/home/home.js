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

    useEffect(() => {
        fetch("/logement.json")
            .then((response) => response.json())
            .then((data) => setLogementsData(data))
            .catch((error) => console.error("Error fetching logements:", error));
    }, []);

    return (
        <div className="home">
            <Header />
            <main>
                <Banner texte="Chez vous, partout et ailleurs" image={imgbannerHome} />
            </main>
            <Gallerie className="carte">
                {logementsData.map((logement) => (
                    <Carte key={logement.id} logement={logement} />
                ))} 
                </Gallerie>
            <Footer />
        </div>
    );
}

export default Home;
