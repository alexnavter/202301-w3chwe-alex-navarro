import getPokemons from "./getPokemons.js";
import PageComponent from "./components/PageComponent.ts/PageComponent.js";
import Component from "./components/Component/Component.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";

const url = "https://pokeapi.co/api/v2/pokemon/";

export const image: HTMLImageElement = document.createElement("img");
image.src = "pokemon-logo.png";

const rootContainer = document.querySelector(".root");

const mainContainer = new PageComponent(rootContainer);
mainContainer.render();

const headerContainer = new HeaderComponent(mainContainer.domElement);
headerContainer.render();
