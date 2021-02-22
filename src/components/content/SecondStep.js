import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Button } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import UserTableFinal from "./UserTableFinal";
import ContentCardFinal from "./ContentCardFinal";

import { contentMock } from "../../mocks/contentMock";

const SecondStep = (props) => {
    const { backStep } = props;
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true);
    }, []);

    return (
        <FirstStepContainer fade={fade}>
            <Title>Resumen</Title>
            <Text>Confirma que los datos sean correctos</Text>
            <BodyWrapper>
                <UserTableFinal />
                <ContentCardFinal item={contentMock[0].content[0].content[0]} />
            </BodyWrapper>
            <BtnWrapper>
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={backStep}
                    startIcon={<ChevronLeft />}
                >
                    Volver
                </Button>
                <Button variant="contained" color="primary" size="small">
                    Finalizar
                </Button>
            </BtnWrapper>
        </FirstStepContainer>
    );
};

export default SecondStep;

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

const BodyWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
