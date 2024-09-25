import React, { useState, useRef, useEffect } from "react";
import flecheHaut from '../../assets/flèches/fleche-haut.png';
import flecheBas from '../../assets/flèches/fleche-bas.png';
import './collaps.css';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  // Gestion dynamique la transition
  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.opacity = 1;
      } else {
        contentRef.current.style.opacity = 0;
      }
    }
  }, [isOpen]);

  return (
    <div className="collapse_container">
      <div className="collapse_title" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <p>
          <img
            src={isOpen ? flecheBas : flecheHaut}
            alt={isOpen ? "Flèche vers le bas" : "Flèche vers le haut"}
            className={isOpen ? "arrow-down" : "arrow-up"}
          />
        </p>
      </div>
      <div
        ref={contentRef}
        className={`collapse_content ${isOpen ? "open" : ""}`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Collapse;

