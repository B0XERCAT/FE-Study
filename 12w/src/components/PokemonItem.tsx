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
      <div className="flex items-center border border-solid border-[theme(colors.border-light)] rounded-lg p-4 gap-4 text-[theme(colors.text-color)] no-underline transition-all duration-200 ease-in-out hover:border-[theme(colors.primary-color)]">
        <img className="w-16 h-16" src={imageSrc} alt=""></img>
        <div className="flex flex-col gap-[0.3rem]">
          <h2 className="text-xl mb-[0.2rem] text-transform: capitalize">
            {pokemon.name}
          </h2>
          <p className="text-base font-thin text-[theme(colors.text-color-light)]">
            height: {pokemon.height} dm
          </p>
          <p className="text-base font-thin text-[theme(colors.text-color-light)]">
            weight: {pokemon.weight} hg
          </p>
          <p className="text-base font-thin text-[theme(colors.text-color-light)]">
            types: {pokemon.types.map((type) => type.type.name).join(", ")}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default PokemonItem;
