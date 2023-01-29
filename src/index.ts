import getPokemons from "./utils/getPokemons.js";
import PageComponent from "./components/PageComponent.ts/PageComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import { getPokemonApi } from "./utils/getPokemonApi.js";
import type { PokemonStructure } from "./components/types.js";

export const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=0";

const pokemons = await getPokemonApi(pokeApiUrl);

const pokemonsList = await getPokemons(pokemons);

const rootContainer = document.querySelector(".root");

const mainContainer = new PageComponent(rootContainer);
mainContainer.render();

const headerContainer = new HeaderComponent(mainContainer.domElement);
headerContainer.render();
