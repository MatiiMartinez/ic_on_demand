import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Button } from "@material-ui/core";
import UsersTable from "./UsersTable";

const FirstStep = (props) => {
    const { nextStep } = props;
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true);
    }, []);

    return (
        <FirstStepContainer fade={fade}>
            <Title>Asignar Contenido</Title>
            <Text>Asigna el material necesario al personal de tu empresa</Text>
            <UsersTable />
            <FakeButton
                variant="contained"
                color="primary"
                size="small"
                onClick={nextStep}
            >
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
    opacity: ${(props) => (props.fade ? 1 : 0)};
    transition: opacity 600ms ease;
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
