import styled, { css } from "styled-components";
import { TranformerType, TypographyProps } from "./Typography.types";

const tranformer: TranformerType = {
  Title1: css`
    font-size: ${({ theme }) => theme.typography.sizes.h1};
  `,
  Title2: css`
    font-size: ${({ theme }) => theme.typography.sizes.h2};
  `,
  Title3: css`
    font-size: ${({ theme }) => theme.typography.sizes.h3};
  `,
  Title4: css`
    font-size: ${({ theme }) => theme.typography.sizes.h4};
  `,
  Title5: css`
    font-size: ${({ theme }) => theme.typography.sizes.h5};
  `,
  Title6: css`
    font-size: ${({ theme }) => theme.typography.sizes.h6};
  `,

  Paragraph: css`
    font-size: ${({ theme }) => theme.typography.sizes.p};
  `,
};

export const Texto = styled.p<TypographyProps>`
  ${({ textStyle, theme, color = "dark", family = "text" }) => css`
    ${textStyle && tranformer[textStyle]}

    font-family: ${theme.typography.family[family]};
    color: ${theme.colors[color]};
  `}
`;
