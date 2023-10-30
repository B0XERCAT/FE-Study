import PokemonItem from "./PokemonItem";
import { data } from "../data";

const PokemonList = () => {
  return (
    <div className="card-wrapper">
      {data.map((pokemon, dataIndex) => (
        <PokemonItem itemIndex={dataIndex} pokemon={pokemon} key={dataIndex} />
      ))}
    </div>
  );
};
export default PokemonList;
