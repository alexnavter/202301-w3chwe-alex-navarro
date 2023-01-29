import Component from "../Component/Component.js";
import type { PokemonStructure } from "../types.js";

class PokemonCard extends Component {
  pokemon: PokemonStructure;
  constructor(parentElement: Element, pokemon: PokemonStructure) {
    super(parentElement, "pokedex-card card", "div");
    this.pokemon = pokemon;
  }

  render() {
    super.render();

    this.domElement.innerHTML = `
    <img class="card__image" src="${this.pokemon.image}" alt="Pokemon image">
    <h2 class="card__name">${this.pokemon.name}</h2>
    <p class="card__id">ID: ${this.pokemon.id}</p>
    `;
  }
}

export default PokemonCard;
