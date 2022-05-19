import { useQuery } from "react-query";
import { client } from "../../services/client";
import * as S from "./styles";

export const LandingPage = () => {
  const { isLoading, data } = useQuery(
    "onix",
    async () => await client.get("pokemon/onix")
  );

  if (isLoading) return <div>Carregando...</div>;

  return (
    <S.Container aria-busy="true">
      <img width={200} src={data?.data.sprites.front_default} />
    </S.Container>
  );
};
