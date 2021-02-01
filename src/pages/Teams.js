import React from "react";
import styled from "styled-components";

import TitleInfo from "../components/ui/atoms/TitleInfo";
import TableTeams from "../components/ui/organisms/teams/TableTeams";

export default function Teams() {
    return (
        <TeamsContainer>
            <TitleInfo label="Equipos" />
            <TableTeams />
        </TeamsContainer>
    );
}

const TeamsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;
