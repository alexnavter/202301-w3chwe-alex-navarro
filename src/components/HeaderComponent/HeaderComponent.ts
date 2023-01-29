import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "pokedex-header header", "div");
  }

  render() {
    super.render();

    this.domElement.innerHTML = `
    <img class="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon image">
    `;
  }
}

export default HeaderComponent;
