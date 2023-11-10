import { useParams } from "react-router-dom";
import { data } from "../data";

const PokemonDetail = () => {
  const index = Number(useParams().detailIndex);
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    index + 1
  }.png`;
  const pokemon = data[index];

  const pokemonInfo = Object.entries(pokemon).map(
    ([pokemonKey, pokemonValue], index) => {
      if (typeof pokemonValue === "object")
        pokemonValue = pokemonValue.join(", ");
      return (
        <tr key={index}>
          <td>{pokemonKey}</td>
          <td>{pokemonValue}</td>
        </tr>
      );
    }
  );

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
