export interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  addListeners?: () => void;
}

export interface PokemonDetails {
  id: number;
  name: string;
  types: Type;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export interface Type {
  name: string;
}

export interface PokemonStructure {
  name: string;
  id: number;
  image: string;
}

export interface PokemonResult {
  count: number;
  next: string;
  previous: undefined;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
