import React from 'react';
import emptyStar from "../../assets/start/startVide.png";  // Étoile vide
import fullStar from "../../assets/start/startRempli.png";  // Étoile remplie


function Rate(props) {
  const score = props.score;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rate-contenair">
      {notes.map((note) =>
        score >= note ? (
          <img
            key={note.toString()}
            className="etoile"
            src={fullStar}   // Affiche l'étoile remplie si score >= note
            alt="star"
          />
        ) : (
          <img
            key={note.toString()}
            className="etoile"
            src={emptyStar}  // Affiche l'étoile vide sinon
            alt="star"
          />
        )
      )}
    </div>
  );
}

export default Rate;