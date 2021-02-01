import React, { useState } from "react";
import styled from "styled-components";

import Card from "../../ui/molecules/Card";
import New from "../../ui/molecules/NewTeam";

import { teamMock } from "../../../mocks/teamMock";
import { Button, Divider } from "@material-ui/core";
import { ForwardRounded, ReplyRounded } from "@material-ui/icons";

export default function Team() {
    const [isFirst, setIsFirst] = useState(true);

    function toggleIsFirst() {
        setIsFirst(!isFirst);
    }

    return (
        <div>
            <Header>
                <Title>Equipo</Title>
                <Button
                    onClick={toggleIsFirst}
                    endIcon={isFirst ? <ForwardRounded /> : <ReplyRounded />}
                >
                    {isFirst ? "Ir a Cursos" : "Volver"}
                </Button>
                <New />
            </Header>
            <Grid>
                <HeaderGrid>
                    <span></span>
                    <span>Email</span>
                    <span>Estado</span>
                    <span>Última conexión</span>
                </HeaderGrid>
                <Divider />
                {teamMock.map((item, index) => (
                    <Card item={item} key={index} />
                ))}
            </Grid>
        </div>
    );
}

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
`;

const Title = styled.h1`
    color: #b31d15;
    font-size: 2rem;
    font-weight: 900;
    line-height: 1rem;
    margin: 0;
`;

const Grid = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;

const HeaderGrid = styled.span`
    display: grid;
    grid-template-columns: 1fr 6fr 1fr 2fr;
    padding: 0 1rem;

    span:nth-child(4) {
        text-align: end;
    }
`;
