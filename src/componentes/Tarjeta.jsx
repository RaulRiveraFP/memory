import React from 'react';
import { useClicks } from './Context';

const Tarjeta = ({ nombre, imagen }) => {
  const { tarjetaClicks, incrementTarjetaClicks, incrementTotalClicks } = useClicks(); // Obtenemos las funciones y los estados del contexto

  const handleClick = () => {
    incrementTarjetaClicks(nombre); 
    incrementTotalClicks(); 
  };

  return (
    <div className="w-[300px] h-[400px] rounded overflow-hidden shadow-lg bg-slate-200 p-5" onClick={handleClick}>
      <img
        className="max-w-48 cursor-pointer"
        src={`../assets/${imagen}`}
        alt={imagen}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{nombre}</div>
        <p>Contador de clics individuales: {tarjetaClicks[nombre] || 0}</p>
      </div>
    </div>
  );
}

export default Tarjeta;
