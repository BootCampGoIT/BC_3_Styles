import styled from "styled-components";

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    background-color: ${(props) => props.getTheme().colors.navigation};
  }

  li {
    text-transform: uppercase;
    margin: 0 10px;
    color: ${(props) => props.getTheme().colors.links};
  }

  li.active {
    color: red;
  }

  li:hover {
      
  }
`;

// const List = styled.ul`
//   list-style: none;
//   display: flex;
//   background-color: ${(props) => (props.th ? "pink" : "gray")};
// `;

// const ListItem = styled.li`
//   text-transform: uppercase;
//   margin: 0 10px;
//   color: ${(props) => (props.th ? "black" : "white")};
// `;

export { Nav };
// export { Nav, List, ListItem };
