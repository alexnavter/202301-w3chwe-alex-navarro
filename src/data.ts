export interface PokemonListStructure {
  count: number;
  next: number;
  previous: undefined;
  results: ResultsStructure;
}

export interface ResultsStructure {
  name: string;
  url: string;
}
