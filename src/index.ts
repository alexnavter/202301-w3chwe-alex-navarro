import getPokemons from "./utils/getPokemons.js";
import PageComponent from "./components/PageComponent.ts/PageComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import { getPokemonApi } from "./utils/getPokemonApi.js";
import PokemonCard from "./components/PokemonCard/PokemonCard.js";

export const pokeApiUrl =
  "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";

const pokemons = await getPokemonApi(pokeApiUrl);

const pokemonsList = await getPokemons(pokemons);

const rootContainer = document.querySelector(".root");

const mainContainer = new PageComponent(rootContainer);
mainContainer.render();

const headerContainer = new HeaderComponent(mainContainer.domElement);
headerContainer.render();

pokemonsList.forEach((pokemon) => {
  const card = new PokemonCard(mainContainer.domElement, pokemon);
  card.render();
});
