import styled from "styled-components";
import { TypeNames } from "../../services/models/types";

export const Card = styled.article<{ type?: TypeNames }>`
  background: ${({ type, theme }) => {
    if (type === "grass") return theme.colors.green;

    if (type === "fire") return theme.colors.orange;

    return theme.colors.grey;
  }};
`;

export const Image = styled.img``;
