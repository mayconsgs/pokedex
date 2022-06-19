import { darken } from "polished";
import styled, { css } from "styled-components";
import { TypeNames } from "../../services/models/types";

export const Container = styled.article<{ type?: TypeNames }>`
  display: flex;
  border-radius: 16px;

  ${({ theme, type = "normal" }) => css`
    background: linear-gradient(
      to bottom,
      ${darken(0.4, theme.pokemonTypeColor[type])},
      ${darken(0.2, theme.pokemonTypeColor[type])}
    );
  `}
`;

export const ImageContainer = styled.figure<{ type?: TypeNames }>`
  background-color: ${({ theme, type = "normal" }) =>
    darken(0.2, theme.pokemonTypeColor[type])};
`;

export const Image = styled.img``;

export const InfoContainer = styled.div``;

export const Header = styled.header``;

export const InfoBody = styled.main``;

export const Point = styled.div``;

export const WhiteCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;
