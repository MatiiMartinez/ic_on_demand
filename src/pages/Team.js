import React from "react";
import styled from "styled-components";

import LayoutPage from "../components/layout/LayoutPage";
import Header from "../components/ui/organisms/teams/Header";
import NewUser from "../components/ui/organisms/teams/NewUser";
import TableTeam from "../components/ui/organisms/teams/TableTeam";

export default function Team() {
  return (
    <LayoutPage
      header={
        <Header>
          <NewUser />
        </Header>
      }
    >
      <TeamContainer>
        <TableTeam />
      </TeamContainer>
    </LayoutPage>
  );
}

const TeamContainer = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
