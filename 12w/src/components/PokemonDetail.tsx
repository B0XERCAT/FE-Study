import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_POKEMONS = gql`
  query GetPokemons($gqlIndex: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $gqlIndex } }) {
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      base_experience
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
        }
        base_stat
      }
    }
  }
`;

const PokemonDetail = () => {
  const index = Number(useParams().detailIndex);
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    index + 1
  }.png`;
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { gqlIndex: index + 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const pokemonData = data.pokemon_v2_pokemon[0];

  return (
    <>
      <div className="overflow-hidden border border-solid border-[theme(colors.primary-color)] aspect-square rounded-full">
        <img className="object-contain" src={imageSrc} alt={pokemonData.name} />
      </div>
      <table className="border-collapse p-4 border border-solid border-[theme(colors.border-light)] rounded-lg block overflow-hidden text-base">
        <tbody>
          {[
            { label: "Name", value: pokemonData.name },
            { label: "Height", value: pokemonData.height },
            { label: "Weight", value: pokemonData.weight },
            {
              label: "Types",
              value: pokemonData.pokemon_v2_pokemontypes
                .map((type: any) => type.pokemon_v2_type.name)
                .join(", "),
            },
            { label: "Base Experience", value: pokemonData.base_experience },
            ...pokemonData.pokemon_v2_pokemonstats.map((stat: any) => ({
              label: stat.pokemon_v2_stat.name,
              value: stat.base_stat,
            })),
            {
              label: "Abilities",
              value: pokemonData.pokemon_v2_pokemonabilities
                .map((ability: any) => ability.pokemon_v2_ability.name)
                .join(", "),
            },
          ].map((item, index) => (
            <tr
              className={`border-b ${
                index === data.length - 1 ? "border-b-0" : ""
              } border-solid border-[theme(colors.border-light)]`}
              key={item.label}
            >
              <td className="capitalize font-bold p-3">{item.label}</td>
              <td className="text-right text-[theme(colors.text-color-light)] p-3">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default PokemonDetail;
