import type { PokemonResult } from "../components/types";

export const getPokemonApi = async (url: string): Promise<PokemonResult> => {
  const response = await fetch(url);
  const pokemon = (await response.json()) as PokemonResult;
  return pokemon;
};
