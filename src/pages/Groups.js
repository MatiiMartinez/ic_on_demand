import React from "react";
import styled from "styled-components";

import LayoutPage from "../components/layout/LayoutPage";
import Header from "../components/ui/organisms/groups/Header";
import NewTeam from "../components/ui/organisms/groups/NewTeam";
import Options from "../components/ui/organisms/groups/Options";
import TableTeams from "../components/ui/organisms/groups/TableTeams";

const Groups = () => {
    return (
        <LayoutPage
            header={
                <Header>
                    <NewTeam />
                </Header>
            }
        >
            <TeamsContainer>
                <Options />
                <TableTeams />
            </TeamsContainer>
        </LayoutPage>
    );
};

export default Groups;

const TeamsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 1rem;
    background-color: #ffffff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
