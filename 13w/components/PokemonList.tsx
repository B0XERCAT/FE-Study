"use client";
import PokemonItem from "./PokemonItem";
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
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();

        const requests = data.results.map((pokemon: any, index: number) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
        );

        const responses = await Promise.all(requests);
        const pokemonData = await Promise.all(
          responses.map((res) => res.json())
        );

        setPokemons(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 max-w-5xl mx-auto w-full ">
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
