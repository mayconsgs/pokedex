import { useMemo } from "react";
import { TypeTag, Typography } from "..";
import { usePokemonById } from "../../services/requests";
import * as S from "./PokemonModalCard.styles";
import { PokemonModalCardProps } from "./PokemonModalCard.types";

export const PokemonModalCard: React.FC<PokemonModalCardProps> = ({ name }) => {
  const { pokemon } = usePokemonById(name);

  const type = useMemo(() => pokemon?.types[0].type.name, [pokemon?.types]);

  return (
    <S.Container type={type}>
      <S.ImageContainer type={type}>
        <S.Image
          src={pokemon?.sprites.other["official-artwork"].front_default}
        />
        {pokemon?.types.map((type, index) => (
          <TypeTag key={index} type={type.type.name}>
            {type.type.name}
          </TypeTag>
        ))}
      </S.ImageContainer>
      <S.InfoContainer>
        <S.Header>
          <Typography>{pokemon?.name}</Typography>
          <S.Point>{pokemon?.base_experience}</S.Point>
        </S.Header>
        <S.InfoBody>
          <S.WhiteCard>
            <Typography>Abilities</Typography>
            {pokemon?.abilities.map((a, index) => (
              <Typography key={index}>{a.ability.name}</Typography>
            ))}
          </S.WhiteCard>
        </S.InfoBody>
      </S.InfoContainer>
    </S.Container>
  );
};
