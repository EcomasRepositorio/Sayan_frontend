import React, { useState, useEffect } from 'react';
import './StylePresentation.css';  // Asegúrate de importar los estilos CSS

const TypingAnimation = ({ texto }) => {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedText((prevText) => prevText + texto[index]);
      index++;

      if (index == texto.length) {
        clearInterval(interval);
      }
    }, 100);  // Puedes ajustar la velocidad de la animación según tus preferencias

    return () => clearInterval(interval);
  }, [texto]);

  return <span className="typing-animation">{animatedText}</span>;
};

export default TypingAnimation;
