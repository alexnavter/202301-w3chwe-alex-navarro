import type { PokemonListStructure } from "./components/types";
import type { ResultsStructure } from "./data.js";

const getPokemons = async (url: string) => {
  const response = await fetch(url);
  const pokemonList = (await response.json()) as ResultsStructure;
  return pokemonList;
};

export default getPokemons;
