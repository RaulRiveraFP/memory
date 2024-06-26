import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './vistas/Home';
import About from './vistas/AcercaDe';
import Juego from './vistas/Juego';
import Header from './componentes/Header';
import { ClicksProvider } from './componentes/Context'; 

const App = () => {
  return (
    <Router>
      <ClicksProvider> 
        <div>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/pokemons-memory" element={<Juego />} />
            <Route path="/marvel-memory" element={<Juego />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ClicksProvider>
    </Router>
  );
};

export default App;
