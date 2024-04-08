import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul className='flex gap-4 py-8 m-auto w-full justify-center'>
        <li className='border p-4'><Link to="/">Home</Link></li>
        <li className='border p-4'><Link to="/pokemons-memory">Pokemons Memory</Link></li>
        <li className='border p-4'><Link to="/marvel-memory">Marvel Memory</Link></li>
        <li className='border p-4'><Link to="/about">Acerca De</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
