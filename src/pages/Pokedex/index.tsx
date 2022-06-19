import { PageContainer, InputText, PokemonCard } from "../../components";
import { usePokemons } from "../../services/requests";
import * as S from "./styles";

function Pokedex() {
  const { pokemonList } = usePokemons();

  return (
    <PageContainer>
      S
      <S.FilterContainer>
        <S.Title textStyle="Title3" family="title" as="h1">
          {pokemonList?.count} <strong>Pokemons</strong> for you to choose your
          favorite
        </S.Title>

        <InputText placeholder="Encuentra tu pokémon..." />
      </S.FilterContainer>
      <S.GridContainer>
        {pokemonList?.results.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} />
        ))}
      </S.GridContainer>
    </PageContainer>
  );
}

export default Pokedex;
