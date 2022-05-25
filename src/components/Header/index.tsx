import logo from "../../assets/img/logo.svg";
import * as S from "./styles";

export const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Logo src={logo} />

        <S.NavBar>
          <S.NavList>
            <S.NavItem>
              <S.Link to="/">Home</S.Link>
            </S.NavItem>
            <S.NavItem>
              <S.Link to="/pokedex">Pokédex</S.Link>
            </S.NavItem>
            <S.NavItem>
              <S.Link to="/legendaries">Legendaries</S.Link>
            </S.NavItem>
            <S.NavItem>
              <S.Link to="/doc">Documentation</S.Link>
            </S.NavItem>
          </S.NavList>
        </S.NavBar>
      </S.Container>
    </S.Header>
  );
};
