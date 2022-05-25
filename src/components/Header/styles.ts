import { Link as LinkComponent, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

export const Header = styled.header`
  height: 92px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.third};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img``;

export const NavBar = styled.nav``;

export const NavList = styled.ul`
  list-style-type: none;
`;

export const NavItem = styled.li`
  display: inline-block;

  & + & {
    margin-left: ${({ theme }) => theme.spacings.xsmall};
  }
`;

export const Link = styled(LinkComponent)`
  text-decoration: none;

  ${({ theme, to }) => {
    const current = useLocation().pathname === to;

    return css`
      font-size: ${theme.typography.sizes.h4};
      color: ${theme.colors.dark};
      border-bottom: ${current && `solid ${theme.colors.dark} 3px`};
    `;
  }}
`;
