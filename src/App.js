
import React from 'react';
import pokemons from "./pokemons";
import Pokedex from './Pokedex';



function App() {
  return (
    <div className="App">
      <Pokedex  pokemons={pokemons}/>
    </div>
  );
}

export default App;
