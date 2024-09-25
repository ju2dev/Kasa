import React from "react";
import './propos.css'; 
import Header from '../../compo/header/header';
import Footer from '../../compo/footer';
import Banner from "../../compo/banner/banner";
import imgAbout from "../../assets/banner/Home.png";
import Collaps from '../../compo/collaps/collaps';
import Data from "../../pages/propos/data.json";


const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner image={imgAbout} titre="" />

        <div className="collapse">
          <div className="collapse_down">
            {Data.map((item) => {
              return (
                <div key={item.id}>
                  <Collaps content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;