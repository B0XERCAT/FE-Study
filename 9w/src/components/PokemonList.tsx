import PokemonItem from "./PokemonItem";
import { data } from "../data";

const PokemonList = () => {
  return (
    <div className="card-wrapper">
      {data.map((pokemon, index) => (
        <PokemonItem idx={index} pokemon={pokemon} key={index}/>
      ))}
    </div>
  );
};
export default PokemonList;
