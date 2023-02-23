
import React from "react";

import PokeCard from "./pokecard";

const Pokedex = ({pokemons}) => {
    return(
        <>
        {pokemons.map(p =>  <PokeCard 
        Key={p.id}
        name={p.name}
        type={p.type}
        base_experience={p.base_experience}
        img={p.img}

        />)}
        </>
    )
}

export default Pokedex;