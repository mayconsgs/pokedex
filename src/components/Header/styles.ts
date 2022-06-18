import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Header = styled.header`
  height: 92px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.third};

  & + * {
    margin-top: 92px;
  }
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

export const Link = styled(NavLink)`
  text-decoration: none;

  ${({ theme }) => css`
    font-size: ${theme.typography.sizes.h4};
    color: ${theme.colors.dark};

    &.active {
      border-bottom: solid ${theme.colors.dark} 3px;
    }
  `}
`;
