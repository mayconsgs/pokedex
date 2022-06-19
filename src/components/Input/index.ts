import styled, { css } from "styled-components";

export const InputText = styled.input`
  padding: 1rem 2rem;
  border-radius: 3rem;
  width: 100%;
  box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);

  ${({ theme }) => css`
    font-family: ${theme.typography.family.text};
    font-size: ${theme.typography.sizes.p};
    background-color: ${theme.colors.white};
  `};
`;
