import React from "react";
import styled from "styled-components";

import { Button, TextField } from "@material-ui/core";
import InputDisabled from "../common/InputDisabled";
import ChangePassword from "./ChangePassword";

const FormAdmin = () => {
    return (
        <DataContainer>
            <Title>Administrador</Title>
            <Body>
                <InputContainer>
                    <TextField
                        label="Responsable"
                        variant="outlined"
                        size="small"
                        color="secondary"
                    />
                    <InputDisabled id="lastname" label="Email" />
                    <ButtonContainer>
                        <Button variant="contained" color="primary">
                            Actualizar
                        </Button>
                    </ButtonContainer>
                </InputContainer>
                <ChangePassword />
            </Body>
        </DataContainer>
    );
};

export default FormAdmin;

const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 2rem;
    background-color: #ffffff;
    box-shadow: 0 2px 4px #00000020;
`;

const Title = styled.h1`
    font-size: 1rem;
    color: #ababab;
    text-transform: uppercase;
`;

const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4rem;
`;

const InputContainer = styled.div`
    grid-column: span 3;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;
