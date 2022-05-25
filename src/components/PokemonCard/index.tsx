import { useMemo } from "react";
import { useQuery } from "react-query";
import { client } from "../../services/client";
import { Pokemon } from "../../services/models/pokemon";
import * as S from "./styles";

type PokemonCardProps = {
  name: string;
};

export const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {
  const { isLoading, data: pokemon } = useQuery(
    `pokemon-${name}`,
    async () =>
      await client.get<Pokemon>(`pokemon/${name}`).then((res) => res.data)
  );

  const attack = useMemo(
    () => pokemon?.stats.find((e) => e.stat.name === "attack"),
    [pokemon?.stats]
  );

  const defense = useMemo(
    () => pokemon?.stats.find((e) => e.stat.name === "defense"),
    [pokemon?.stats]
  );

  if (isLoading) return <div>Carregando...</div>;

  return (
    <S.Card>
      <S.InfoContainer>
        <S.PokemonName>{pokemon?.name}</S.PokemonName>

        <div>
          <S.StatContainer>
            <S.Stats>
              <S.StatsText>{attack?.base_stat}</S.StatsText>
            </S.Stats>
            <S.StatsLegend>Attack</S.StatsLegend>
          </S.StatContainer>

          <S.StatContainer>
            <S.Stats>
              <S.StatsText>{defense?.base_stat}</S.StatsText>
            </S.Stats>
            <S.StatsLegend>Defense</S.StatsLegend>
          </S.StatContainer>
        </div>

        <S.TypeContainer>
          {pokemon?.types.map((type, index) => (
            <S.TypeTag key={index} type={type.type.name}>
              {type.type.name}
            </S.TypeTag>
          ))}
        </S.TypeContainer>
      </S.InfoContainer>
      <S.Image
        type={pokemon?.types[0].type.name}
        src={pokemon?.sprites.other["official-artwork"].front_default}
      />
    </S.Card>
  );
};
