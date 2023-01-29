import type { PokemonDetails } from "../components/types";
import type { PokemonStructure } from "../components/types";
import type { PokemonResult } from "../components/types";

const getPokemons = async (
  pokemonList: PokemonResult
): Promise<PokemonStructure[]> => {
  const pokemons = [];

  for await (const pokemon of pokemonList.results) {
    const response = await fetch(pokemon.url);
    const onePokemon = (await response.json()) as PokemonDetails;

    const getPokemonData: PokemonStructure = {
      name: onePokemon.name,
      id: onePokemon.id,
      image: onePokemon.sprites.other.dream_world.front_default,
    };

    pokemons.push(getPokemonData);
  }

  return pokemons;
};

export default getPokemons;
