import { Link } from "react-router-dom";

interface PokemonProps {
  pokemon: {
    name: string;
    height: string;
    weight: string;
    types: string[];
  };
  idx: number;
}

const PokemonItem = (props: PokemonProps) => {
  const pokemon = props.pokemon;
  const idx = props.idx;
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    idx + 1
  }.png`;
  return (
    <Link to={`/${idx}`}>
      <div className="card">
        <img src={imageSrc} alt=""></img>
        <div className="info-wrapper">
          <h2>{pokemon.name}</h2>
          <p>height: {pokemon.height} dm</p>
          <p>weight: {pokemon.weight} hg</p>
          <p>types: {pokemon.types.join(", ")}</p>
        </div>
      </div>
    </Link>
  );
};
export default PokemonItem;
