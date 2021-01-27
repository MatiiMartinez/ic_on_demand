import React from "react";
import styled from "styled-components";

import Button from "../atoms/Button";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

export default function TeamCard() {
    return (
        <TeamCardContainer>
            <h1>Marketing</h1>
            <AvatarGroup max={5}>
                <Avatar alt=""></Avatar>
                <Avatar alt=""></Avatar>
                <Avatar alt=""></Avatar>
                <Avatar alt=""></Avatar>
                <Avatar alt=""></Avatar>
                <Avatar alt=""></Avatar>
                <Avatar alt=""></Avatar>
                <Avatar alt=""></Avatar>
            </AvatarGroup>
            <ButtonGroup>
                <Button variant="contained" size="small" color="primary">
                    Ir a Configuración
                </Button>
            </ButtonGroup>
        </TeamCardContainer>
    );
}

const TeamCardContainer = styled.div`
    background-color: #ffffff;
    box-shadow: 0 2px 4px #00000020;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    border-radius: 0.25rem;
    padding: 1rem 2rem;

    h1 {
        font-size: 1rem;
        font-weight: 700;
        margin: 0;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
`;
