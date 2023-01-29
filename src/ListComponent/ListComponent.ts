import Component from "../components/Component/Component.js";

class ListComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "list-container", "ul");
  }

  render() {
    super.render();

    this.domElement.innerHTML = `
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    `;
  }
}
