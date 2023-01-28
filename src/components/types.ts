export interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  addListeners?: () => void;
}

export interface PokemonListStructure {
  results: ResultsStructure;
}

export interface ResultsStructure {
  name: string;
  url: string;
}
