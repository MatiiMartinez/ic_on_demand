import React from "react";
import styled from "styled-components";

import { Button, TextField } from "@material-ui/core";
import InputDisabled from "../../../common/InputDisabled";
import ChangePassword from "../../molecules/ChangePassword";

const FormAdmin = () => {
    return (
        <DataContainer>
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
        </DataContainer>
    );
};

export default FormAdmin;

const DataContainer = styled.div`
    padding: 2rem;
    background-color: #ffffff;
    box-shadow: 0 2px 4px #00000020;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4rem;
    border-radius: 5px;
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
