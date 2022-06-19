import { useMemo, useState } from "react";
import { usePokemonById } from "../../services/requests";
import { Modal } from "../Modal";
import { PokemonModalCard } from "../PokemonModalCard";
import { Typography } from "../Typography";
import * as S from "./PokemonCard.styles";

type PokemonCardProps = {
  name: string;
};

export const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {
  const [showModal, setShowModal] = useState(false);

  const { pokemon } = usePokemonById(name);

  const attack = useMemo(
    () => pokemon?.stats.find((e) => e.stat.name === "attack"),
    [pokemon?.stats]
  );

  const defense = useMemo(
    () => pokemon?.stats.find((e) => e.stat.name === "defense"),
    [pokemon?.stats]
  );

  return (
    <>
      <S.Card onClick={() => setShowModal(true)}>
        <S.InfoContainer>
          <S.PokemonName as="h1" textStyle="Title5">
            {pokemon?.name}
          </S.PokemonName>

          <div>
            <S.StatContainer>
              <S.Stats>
                <Typography textStyle="Paragraph" as="span">
                  {attack?.base_stat}
                </Typography>
              </S.Stats>
              <Typography as="span" textStyle="Title6">
                Attack
              </Typography>
            </S.StatContainer>

            <S.StatContainer>
              <S.Stats>
                <Typography textStyle="Paragraph" as="span">
                  {defense?.base_stat}
                </Typography>
              </S.Stats>
              <Typography as="span" textStyle="Title6">
                Defense
              </Typography>
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
          loading="lazy"
          type={pokemon?.types[0].type.name}
          src={pokemon?.sprites.other["official-artwork"].front_default}
        />
      </S.Card>

      <Modal visible={showModal} handleClose={() => setShowModal(false)}>
        <PokemonModalCard name={pokemon?.name!} />
      </Modal>
    </>
  );
};
