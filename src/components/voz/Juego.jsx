import React, {useState} from "react";
import VozOrdenes from "./VozComando";

const Juego = () => {
  //Creo y establezco la posición del coche en la pantalla
  const [posicionCoche, setPosicionCoche] = useState({
    top: Math.random() * (window.innerHeight - 100), 
    left: Math.random() * (window.innerWidth - 100), 
  });

  //Creo y establezco la posición de la meta en la pantalla
  const [posicionMeta] = useState({
    top: Math.random() * (window.innerHeight - 100), 
    left: Math.random() * (window.innerWidth - 100), 
  });

  // Actualizo la posición en función del comando de voz
const updatePosition = (direction) => {
  setPosicionCoche((prevPos) => {
    switch (direction) {
      case "left":
        return { ...prevPos, left: Math.max(0, prevPos.left - 100) };
      case "right":
        return {
          ...prevPos,
          left: Math.min(window.innerWidth - 100, prevPos.left + 100),
        };
      case "up":
        return { ...prevPos, top: Math.max(0, prevPos.top - 100) };
      case "down":
        return {
          ...prevPos,
          top: Math.min(window.innerHeight - 100, prevPos.top + 100),
        };
      default:
        return prevPos;
    }
  });
};


  return (
    <div className="juego">
      <VozOrdenes updatePosition={updatePosition} />
      <p className="posicion">Posición del coche: {posicionCoche.left}px, {posicionCoche.top}px</p>
      <div>
        <img
          src="/coche.png"
          alt="Coche"
          className="imagenCoche"
          style={{
            position: "absolute",
            top: posicionCoche.top,
            left: posicionCoche.left,
          }}
        />
        <img
          src="/meta.png"
          alt="Meta"
          style={{
            position: "absolute",
            top: posicionMeta.top,
            left: posicionMeta.left,
          }}
        />

        {posicionCoche.left < posicionMeta.left + 50 &&
          posicionCoche.left + 50 > posicionMeta.left &&
          posicionCoche.top < posicionMeta.top + 50 &&
          posicionCoche.top + 50 > posicionMeta.top && (
            alert("Felicidades, ¡has alcanzado la meta!")
          )}
      </div>
    </div>
  );
};

export default Juego;
