import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { HeaderStyled, Title } from "./Header.styled";

export const Header: FunctionComponent<unknown> = () => (
  <HeaderStyled>
    <Link to="/">
      <Title>Desempenho das Lojas</Title>
    </Link>
  </HeaderStyled>
);
