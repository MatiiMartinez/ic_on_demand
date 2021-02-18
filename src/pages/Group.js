import React from "react";
import styled from "styled-components";

import LayoutPage from "../components/layout/LayoutPage";
import Options from "../components/ui/organisms/group/Options";
import Header from "../components/ui/organisms/group/Header";
import NewUser from "../components/ui/organisms/group/NewUser";
import TableTeam from "../components/ui/organisms/group/TableTeam";

const Group = () => {
  return (
    <LayoutPage
      header={
        <Header>
          <NewUser />
        </Header>
      }
    >
      <TeamContainer>
        <Options />
        <TableTeam />
      </TeamContainer>
    </LayoutPage>
  );
};

export default Group;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
