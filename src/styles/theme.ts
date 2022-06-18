import { TypeNames } from "../services/models/types";

const colors = {
  primary: "#F2B807",
  secondary: "#F28F16",
  third: "#F5DB13",
  white: "#F2F2F2",
  danger: "#D93E30",
  dark: "#212121",

  blue: "#76AADB",
  lightBlue: "#A2CFF0",
  green: "#73D677",
  grey: "#A1A1A1",
  orange: "#F76545",
  brown: "#9B897B",
  purple: "#A974BC",
  yellow: "#F7C545",
} as const;

const pokemonTypeColor: { [key in TypeNames]: string } = {
  steel: colors.grey,
  dark: colors.grey,
  rock: colors.grey,
  grass: colors.green,
  bug: colors.green,
  ice: colors.lightBlue,
  water: colors.lightBlue,
  fire: colors.orange,
  fighting: colors.orange,
  dragon: colors.orange,
  flying: colors.blue,
  normal: colors.blue,
  ghost: colors.blue,
  poison: colors.purple,
  psychic: colors.purple,
  fairy: colors.purple,
  shadow: colors.purple,
  ground: colors.brown,
  electric: colors.yellow,
  unknown: colors.blue,
} as const;

export const theme = {
  colors,
  pokemonTypeColor,

  typography: {
    sizes: {
      h1: "4.5rem",
      h2: "4rem",
      h3: "2.25rem",
      h4: "1.5rem",
      h5: "1.125rem",
      h6: "0.75rem",
      p: "1rem",
    },
    family: {
      title: "'Karla', sans-serif",
      text: "'Source Sans Pro', sans-serif",
    },
  },

  spacings: {
    xsmall: "32px",
    small: "64px",
    medium: "80px",
    large: "96px",
    xlarge: "120px",
  },
} as const;
