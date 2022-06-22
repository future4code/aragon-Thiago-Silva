import axios from "axios";
import { useEffect, useState } from "react"
import "../style.css"

export default function PokeCard(props) {

  const [pokemon, setPokemon] = useState({})
 
  useEffect (() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
      .then((res) => {
        console.log(res)
        setPokemon( res.data );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.pokeName])

  return (
    <figure>
   
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
      
      {pokemon.weight && <p>Peso: {pokemon.weight} lbs</p>}
    
      {pokemon.types && <p>Tipo: {pokemon.types[0].type.name }</p>}
     
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}

    </figure>
  )
}
