import React from "react";
import styled from "styled-components";

import Card from "../../molecules/Card";
import New from "../../molecules/NewTeam";

import { teamMock } from "../../../../mocks/teamMock";
import { deleteItem } from "../../../../mocks/funciones";
import { Divider } from "@material-ui/core";

export default function Team() {
    return (
        <div>
            <Header>
                <Title>Equipo</Title>
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
                    <Card item={item} key={index} deleteItem={deleteItem} />
                ))}
            </Grid>
        </div>
    );
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
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
    row-gap: 1rem;
`;

const HeaderGrid = styled.span`
    display: grid;
    grid-template-columns: 1fr 6fr 1fr 2fr;
    padding: 0 1rem;

    span:nth-child(4) {
        text-align: end;
    }
`;
