import React from "react";
import Section from "../section/Section";
import UserList from "../section/userList/UserLIst";

const Main = ({ users, title, getTheme}) => {
  return (
    <main>
      <Section title={title}>
        <UserList users={users} getTheme={getTheme} /> 
      </Section>
    </main>
  );
};

export default Main;


