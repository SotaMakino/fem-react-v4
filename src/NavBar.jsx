import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import colors from "./colors.jsx";

const Container = styled("header")`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => (
  <Container>
    <NavLink to="/">
      <h1>Adopt Me!</h1>
    </NavLink>
    <NavLink to="search-params">
      <span aria-label="search" role="img">
        🔍
      </span>
    </NavLink>
  </Container>
);

export default NavBar;
