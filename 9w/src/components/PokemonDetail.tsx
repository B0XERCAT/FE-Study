import { useParams } from "react-router-dom";
import { data } from "../data";

const PokemonDetail = () => {
  const idx = Number(useParams().idx);
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    idx + 1
  }.png`;
  const pokemon = data[idx];

  const pokemonInfo = Object.entries(pokemon).map(([key, value]) => {
    if (typeof value === "object") value = value.join(", ");
    return (
      <tr>
        <td>{key}</td>
        <td>{value}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="img-wrapper">
        <img src={imageSrc} alt={pokemon.name}></img>
      </div>
      <h2>{pokemon.name}</h2>
      <table>
        <tbody>{pokemonInfo}</tbody>
      </table>
    </>
  );
};
export default PokemonDetail;
