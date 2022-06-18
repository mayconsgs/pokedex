import styled from "styled-components";
import { PageContainer } from "../../components/PageContainer";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.danger};
`;

export const Container = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageAndTextContainer = styled.div`
  height: fit-content;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text404 = styled.img`
  width: 100%;
`;

export const Image = styled.img`
  height: 100%;

  margin: 25px;

  position: absolute;
`;

export const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacings.small};
`;
