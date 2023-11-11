import { Link } from "react-router-dom";
import { PokemonMain } from "./PokemonList";

interface PokemonProps {
  pokemon: PokemonMain;
  itemIndex: number;
  pokemonLength: number;
}

const PokemonItem = (props: PokemonProps) => {
  const pokemon = props.pokemon;
  const index = props.itemIndex;
  if (index >= props.pokemonLength / 2) return <></>;
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    index + 1
  }.png`;
  return (
    <Link to={`/${index}`}>
      <div className="card">
        <img src={imageSrc} alt=""></img>
        <div className="info-wrapper">
          <h2>{pokemon.name}</h2>
          <p>height: {pokemon.height} dm</p>
          <p>weight: {pokemon.weight} hg</p>
          <p>types: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
        </div>
      </div>
    </Link>
  );
};
export default PokemonItem;
