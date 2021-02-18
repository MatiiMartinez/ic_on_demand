import React from "react";
import styled from "styled-components";
import LayoutPage from "../components/layout/LayoutPage";

import TitleInfo from "../components/ui/atoms/TitleInfo";
import NewTeam from "../components/ui/organisms/teams/NewTeam";
import TableTeams from "../components/ui/organisms/teams/TableTeams";

export default function Teams() {
  return (
    <LayoutPage>
      <TeamsContainer>
        <HeaderWrapper>
          <TitleInfo label="Equipos" />
          <NewTeam />
        </HeaderWrapper>
        <TableTeams />
      </TeamsContainer>
    </LayoutPage>
  );
}

const TeamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;
