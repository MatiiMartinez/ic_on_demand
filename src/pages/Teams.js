import React from "react";
import styled from "styled-components";

import { IconButton } from "@material-ui/core";
import { AddCircleOutlined } from "@material-ui/icons";
import TeamCard from "../components/ui/molecules/TeamCard";

export default function Teams() {
    return (
        <TeamsContainer>
            <GridTeams>
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <AddCard>
                    <AddCircleOutlined fontSize="large" htmlColor="#e5e5e5" />
                </AddCard>
            </GridTeams>
        </TeamsContainer>
    );
}

const TeamsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

const GridTeams = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
`;

const AddCard = styled(IconButton)`
    background-color: #ffffff !important;
    box-shadow: 0 2px 4px #00000020 !important;
    display: flex;
    align-items: center;
    justify-items: center;
    border-radius: 0.25rem;
    padding: 1rem 2rem;

    :hover {
        background-color: #e5e5e5 !important;
    }

    :hover svg {
        color: #ffffff;
    }
`;
