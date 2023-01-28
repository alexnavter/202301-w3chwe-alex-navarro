import Component from "../Component/Component.js";
import { image } from "../../index.js";

class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "pokedex-header header", "div");
  }

  render() {
    super.render();

    this.domElement.innerHTML = `<h1>Poke dex</h1>`;
    this.domElement.appendChild(image);
  }
}

export default HeaderComponent;
