import styled from "styled-components";
import { TypeNames } from "../../services/models/types";

export const Card = styled.article`
  display: flex;
  height: 137px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
`;

export const InfoContainer = styled.main`
  aspect-ratio: 1;
  height: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PokemonName = styled.h1`
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.sizes.h5};
  text-transform: capitalize;
`;

export const StatContainer = styled.fieldset`
  display: inline-flex;
  align-items: center;
  flex-direction: column;

  & + & {
    margin-left: 1rem;
  }
`;

export const Stats = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: solid ${({ theme }) => theme.colors.dark} 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatsText = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.p};
`;

export const StatsLegend = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.h6};
`;

export const TypeContainer = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.h6};
`;

export const TypeTag = styled.span<{ type: TypeNames }>`
  background-color: ${({ theme, type }) => theme.pokemonTypeColor[type]};
  border-radius: 1rem;
  padding: 0.15rem 0.5rem;
  text-transform: capitalize;
  box-shadow: inset 0 -3px rgba(0, 0, 0, 0.2);

  & + & {
    margin-left: 0.5rem;
  }
`;

export const Image = styled.img<{ type?: TypeNames }>`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 0 8px 8px 0;

  background-color: ${({ theme, type }) => {
    if (!type) return theme.colors.blue;

    return theme.pokemonTypeColor[type];
  }};
`;
