import type { ComponentStructure } from "../types";

class Component implements ComponentStructure {
  domElement: HTMLElement;

  constructor(
    private readonly parentElement: Element,
    className: string,
    tag = "div"
  ) {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;
  }

  render(): void {
    this.parentElement.appendChild(this.domElement);
  }
}

export default Component;
