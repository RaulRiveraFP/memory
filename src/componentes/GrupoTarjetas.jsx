import React from 'react'
import Tarjeta from './Tarjeta'

const GrupoTarjetas = ({ arrayPersonajes }) => {
console.log(arrayPersonajes.map(personaje=>(
    console.log(personaje.imagen)
)))
  return (
    <div className="flex flex-wrap justify-center gap-2 p-5">
      {arrayPersonajes.map(personaje => (
        <Tarjeta
          key={personaje.id}
          nombre={personaje.nombre}
          imagen={personaje.imagen}
        />
      ))}
    </div>
  )
}

export default GrupoTarjetas
