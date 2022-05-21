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

  if (isLoading) return <div>Carregando...</div>;

  return (
    <S.Card type={pokemon?.types[0].type.name}>
      <S.Image src={pokemon?.sprites.other["official-artwork"].front_default} />
    </S.Card>
  );
};
