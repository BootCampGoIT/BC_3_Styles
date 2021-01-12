import React from "react";
import users from "../data";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import { dark } from "../themes/dark";
import { light } from "../themes/light";

const getTheme = () => {
  return dark;
};

const App = () => {
  return (
    <>
      <Header getTheme={getTheme} />
      <Main getTheme={getTheme} users={users} title='User info:' />
      {/* <Footer /> */}
    </>
  );
};

export default App;
