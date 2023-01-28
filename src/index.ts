import getPokemons from "./getPokemons.js";
import PageComponent from "./components/PageComponent.ts/PageComponent.js";
import Component from "./components/Component/Component.js";

const url = "https://pokeapi.co/api/v2/pokemon/";

const rootContainer = document.querySelector(".root");

const mainContainer = new PageComponent(rootContainer);
mainContainer.render();
