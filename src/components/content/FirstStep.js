import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import UsersTable from "./UsersTable";

const FirstStep = () => {
    return (
        <FirstStepContainer>
            <Title>Asignar Contenido</Title>
            <Text>Asigna el material necesario al personal de tu empresa</Text>
            <UsersTable />
            <FakeButton variant="contained" color="secondary" size="small">
                Siguiente
            </FakeButton>
        </FirstStepContainer>
    );
};

export default FirstStep;

const FirstStepContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.5rem;
    color: #ababab;
`;

const Title = styled.h1`
    font-size: 1.5rem;
`;

const Text = styled.p`
    font-size: 1rem;
    font-weight: 300;
`;

const FakeButton = styled(Button)`
    margin-left: auto;
`;
