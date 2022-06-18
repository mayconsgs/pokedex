import styled from "styled-components";
import { PageContainer } from "../../components/PageContainer";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.danger};
`;

export const Container = styled(PageContainer)``;
