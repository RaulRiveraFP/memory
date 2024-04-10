import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tarjeta from './Tarjeta';
import { useClicks } from './Context';

const GrupoTarjetas = () => {
  const { totalClicks } = useClicks();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const pokemonIds = generateRandomIds(9);
        const pokemonDataPromises = pokemonIds.map(id =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        );
        const pokemonDataResponses = await Promise.all(pokemonDataPromises);
        const pokemonData = pokemonDataResponses.map(response => ({
          id: response.data.id,
          nombre: response.data.name,
          imagen: response.data.sprites.front_default
        }));
        setPokemons(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    }

    fetchPokemonData();
  }, []);

  const generateRandomIds = (count) => {
    const ids = [];
    while (ids.length < count) {
      const id = Math.floor(Math.random() * 898) + 1; // Pokedex has 898 Pokèmons
      if (!ids.includes(id)) {
        ids.push(id);
      }
    }
    return ids;
  };

  return (
    <>
      <h2>Clics totales = {totalClicks}</h2>
      <div className="flex flex-wrap justify-center gap-2 p-5">
        {pokemons.map(pokemon => (
          <Tarjeta
            key={pokemon.id}
            nombre={pokemon.nombre}
            imagen={pokemon.imagen}
          />
        ))}
      </div>
    </>
  );
};

export default GrupoTarjetas;
