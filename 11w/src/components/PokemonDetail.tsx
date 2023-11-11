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
      <div className="img-wrapper">
        <img src={imageSrc} alt={pokemonData.name} />
      </div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{pokemonData.name}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{pokemonData.height}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{pokemonData.weight}</td>
          </tr>
          <tr>
            <td>Types</td>
            <td>
              {pokemonData.pokemon_v2_pokemontypes
                .map((type: any) => type.pokemon_v2_type.name)
                .join(", ")}
            </td>
          </tr>
          <tr>
            <td>Base Experience</td>
            <td>{pokemonData.base_experience}</td>
          </tr>
          {pokemonData.pokemon_v2_pokemonstats.map((stat: any) => (
            <tr key={stat.pokemon_v2_stat.name}>
              <td>{stat.pokemon_v2_stat.name}</td>
              <td>{stat.base_stat}</td>
            </tr>
          ))}
          <tr>
            <td>Abilities</td>
            <td>
              {pokemonData.pokemon_v2_pokemonabilities
                .map((ability: any) => ability.pokemon_v2_ability.name)
                .join(", ")}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default PokemonDetail;
