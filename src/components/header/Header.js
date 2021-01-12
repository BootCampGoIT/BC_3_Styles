import React from "react";
import { Nav, List, ListItem } from "./HeaderStyled";

const Header = ({ getTheme }) => {

  return (
    <header>
      <Nav getTheme={getTheme}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </Nav>
    </header>
  );
};

export default Header;
