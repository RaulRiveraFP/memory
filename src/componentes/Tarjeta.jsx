import React, { useState } from 'react';

const Tarjeta = ({ nombre, imagen }) => {
  const [contadorClicks, setContadorClicks] = useState(0);

  const handleClick = () => {
    setContadorClicks(contadorClicks + 1);
  };

  return (
    <div className="w-[300px] h-[400px] rounded overflow-hidden shadow-lg bg-slate-200 p-5" onClick={handleClick}>
      <img
        className="max-w-48 cursor-pointer"
        src={(`../assets/${imagen}`)}
        alt={imagen}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{nombre}</div>
        <p>Contador de clics: {contadorClicks}</p>
      </div>
    </div>
  );
}

export default Tarjeta;
