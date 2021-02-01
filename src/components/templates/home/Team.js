import React from "react";
import styled from "styled-components";
import TitleInfo from "../../ui/atoms/TitleInfo";
import NewUser from "../../ui/organisms/teams/NewUser";

import TableTeam from "../../ui/organisms/teams/TableTeam";

export default function Team() {
    return (
        <TeamContainer>
            <HeaderContainer>
                <TitleInfo label="Marketing" />
                <NewUser />
            </HeaderContainer>
            <TableTeam />
        </TeamContainer>
    );
}

const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`;
