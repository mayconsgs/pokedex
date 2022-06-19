import { TypeNames } from "./types";

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type PokemonMoveVersion = {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
};

type PokemonMove = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: PokemonMoveVersion[];
};

type PokemonSprites = {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string;
      front_female: string | null;
    };
    home: {
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string;
    };
  };
};

type StatNames =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed"
  | "accuracy"
  | "evasion";

type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: StatNames;
    url: string;
  };
};

type PokemonType = {
  slot: 1;
  type: {
    name: TypeNames;
    url: string;
  };
};

export type Pokemon = {
  id: string;
  name: string;
  base_experience: string;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  moves: PokemonMove[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
};

export type PokemonRef = {
  name: string;
  url: string;
};

export type PokemonList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonRef[];
};
