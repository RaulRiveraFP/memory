import '../App.css'
import { arrayPersonajes } from '../bd/Test'
import GrupoTarjetas from '../componentes/GrupoTarjetas'
function Juego() {

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
      Juego
    </h1>
    <GrupoTarjetas arrayPersonajes={arrayPersonajes} />
    </>
  )
}

export default Juego
