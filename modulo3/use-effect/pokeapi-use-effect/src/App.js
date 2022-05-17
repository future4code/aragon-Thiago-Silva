import { useState, useEffect } from "react";
import PokeCard from "./components/PokeCard";
import axios from "axios";
import "./style.css"

function App() {

  const [pokemons, setPokemons] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {

    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        console.log(res.data)
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [])



  const changePokeName = (event) => {
    setPokeName(event.target.value)
  };

  const pokeOptions = pokemons.map((pokemon) => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}
      </option>

    );
  });

  const pokemon = true && <PokeCard pokeName={pokeName} />;

  return (
    <div>
      <header>
        <h1>Qual é esse Pokémon?</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
        <select id={"select-pokemon"} onChange={changePokeName} >
          <option value={""}>Nenhum</option>
          {pokeOptions}
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </div>
  );
}

export default App;