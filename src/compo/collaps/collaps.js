import React, { useState, useRef, useEffect } from "react";
import flecheHaut from '../../assets/flèches/fleche-haut.png';
import flecheBas from '../../assets/flèches/fleche-bas.svg';
import './collaps.css';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  // Gestion dynamique de la transition
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.opacity = isOpen ? 1 : 0;
    }
  }, [isOpen]);

  return (
    <div className="collapse_container">
      <div className="collapse_title" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <img
          src={isOpen ? flecheBas : flecheHaut}
          alt={isOpen ? "Flèche vers le bas" : "Flèche vers le haut"}
          className={isOpen ? "arrow-down" : "arrow-up"}
        />
      </div>
      <div
        ref={contentRef}
        className={`collapse_content ${isOpen ? "open" : ""}`}
      >
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default Collapse;

