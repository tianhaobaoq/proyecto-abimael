import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "./Juego.css";

const VozOrdenes = ({ updatePosition }) => {
  const [message, setMessage] = useState('');

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center', 
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px', 
    margin: '4px 2px', 
    cursor: 'pointer', 
    borderRadius: '8px', 
  };

  const commands = [
    {
      command: 'Izquierda',
      callback: () => {
        setMessage('Moviendo hacia la izquierda');
        updatePosition('left');
      },
    },
    {
      command: 'Derecha',
      callback: () => {
        setMessage('Moviendo hacia la derecha');
        updatePosition('right');
      },
    },
    {
      command: 'Arriba',
      callback: () => {
        setMessage('Moviendo hacia arriba');
        updatePosition('up');
      },
    },
    {
      command: 'Abajo',
      callback: () => {
        setMessage('Moviendo hacia abajo');
        updatePosition('down');
      },
    },
  ];

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({continuous:true});
    }
  }, [browserSupportsSpeechRecognition]);

  if (!browserSupportsSpeechRecognition) {
    return <div>La detección de voz no es compatible en este navegador.</div>;
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}style={buttonStyle}>Dar Instrucción</button>
      <div className="instrucciones">
      <p>Mensaje: {transcript}</p>
      <p>Respuesta: {message}</p>
      </div>
    </div>
  );
};



export default VozOrdenes;
