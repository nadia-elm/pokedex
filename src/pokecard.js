
import React from 'react'




const PokeCard = (props) => {
    console.log(props.id)
    let imgSrc =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`
      
    return (
    <div>
        <img src={imgSrc} alt="pokemon_image"/>
        <ul>
            <li>name: {props.name}</li>
            <li>type: {props.type}</li>
            <li>base_experience: {props.base_experience}</li>
        </ul>
    </div>
    );
}




export default PokeCard;
