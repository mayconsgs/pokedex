import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";

export const buttonTransform = {
  green: css`
    background-color: ${({ theme }) => theme.colors.green};
  `,
  yellow: css`
    background-color: ${({ theme }) => theme.colors.third};
  `,
};

export const Button = styled.button<ButtonProps>`
  padding: 1rem 3rem;
  padding-bottom: 1.3rem;
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  justify-content: center;

  min-width: 230px;
  border-radius: 12px;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);

  transition: all 0.1s;

  ${({ theme, color = "green" }) => css`
    ${buttonTransform[color]}
    font-size: ${theme.typography.sizes.h4};
    font-family: ${theme.typography.family.title};
    color: ${theme.colors.dark}; ;
  `}

  &:active {
    box-shadow: inset 0px 0px 0px rgba(0, 0, 0, 0.18);
    padding-bottom: 1rem;
    margin-top: 0.3rem;
    filter: brightness(0.9);
  }
`;
