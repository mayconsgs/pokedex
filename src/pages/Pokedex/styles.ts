import styled from "styled-components";
import { Typography } from "../../components";

export const FilterContainer = styled.div`
  margin: 2rem 0;
  padding: 0 1rem;
`;

export const Title = styled(Typography)`
  margin-bottom: 2rem;
  text-align: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 2rem;
`;
