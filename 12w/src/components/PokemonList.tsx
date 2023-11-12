import PokemonItem from "./PokemonItem";
import axios from "axios";
import { useEffect, useState } from "react";

export interface PokemonMain {
  name: string;
  height: string;
  weight: string;
  types: { type: { name: string } }[];
}

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<PokemonMain[]>([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      let pokemonResult = response.data.results;
      const promises = [];

      for (let i = 0; i < pokemonResult.length; i++) {
        promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}`));
      }

      Promise.all(promises)
        .then((responses) => {
          const newPokemons = responses.map((response) => response.data);
          setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
        })
        .catch((error) => {
          console.error("Error fetching Pokemon data:", error);
        });
    });
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto w-full ">
      {pokemons.map((pokemon, dataIndex) => (
        <PokemonItem
          itemIndex={dataIndex}
          pokemon={pokemon}
          key={dataIndex}
          pokemonLength={pokemons.length}
        />
      ))}
    </div>
  );
};
export default PokemonList;
