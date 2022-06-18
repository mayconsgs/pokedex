import styled from "styled-components";
import { PageContainer } from "../../components/PageContainer";

export const Container = styled(PageContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 2rem;
`;
