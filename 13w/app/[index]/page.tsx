import { data } from "../data";
import Image from "next/image";

export function generateMetadata({ params }: any){
  const name = data[Number(params.index)].name;
  return {
    title: `${name} - Pokemon List`,
    description: `information of ${name}`,
  }
};

const PokemonDetail = ({ params }: any) => {
  const index = Number(params.index);
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    index + 1
  }.png`;
  const pokemon = data[index];

  const pokemonInfo = Object.entries(pokemon).map(
    ([pokemonKey, pokemonValue], index) => {
      if (typeof pokemonValue === "object")
        pokemonValue = pokemonValue.join(", ");
      return (
        <tr
          className={`border-b border-solid border-[theme(colors.border-light)]`}
          key={index}
        >
          <td className="capitalize font-bold p-3">{pokemonKey}</td>
          <td className="text-right text-[theme(colors.text-color-light)] p-3">
            {pokemonValue}
          </td>
        </tr>
      );
    }
  );

  return (
    <>
      <div className="overflow-hidden border border-solid border-[theme(colors.primary-color)] aspect-square rounded-full">
        <Image
          className="object-contain"
          src={imageSrc}
          alt={pokemon.name}
          width={500}
          height={500}
          
        ></Image>
      </div>
      <h2 className="text-3xl">{pokemon.name}</h2>
      <table className="border-collapse p-4 border border-solid border-[theme(colors.border-light)] rounded-lg block overflow-hidden text-base">
        <tbody>{pokemonInfo}</tbody>
      </table>
    </>
  );
};
export default PokemonDetail;
