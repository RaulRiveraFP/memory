import React from 'react'
import Tarjeta from './Tarjeta'
import { useClicks } from './Context';

const GrupoTarjetas = ({ arrayPersonajes }) => {

  const { totalClicks } = useClicks(); 

  return (
    <>
    <h2>Clics totales = {totalClicks}</h2>
    <div className="flex flex-wrap justify-center gap-2 p-5">
      {arrayPersonajes.map(personaje => (
        <Tarjeta
          key={personaje.id}
          nombre={personaje.nombre}
          imagen={personaje.imagen}
        />
      ))}
    </div>
    </>
  )
}

export default GrupoTarjetas
