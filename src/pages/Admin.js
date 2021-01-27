import { TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import AdenButton from "../components/common/AdenButton";
import InputDisabled from "../components/common/InputDisabled";
import TitleHeader from "../components/ui/atoms/TitleHeader";
import ChangePassword from "../components/ui/molecules/ChangePassword";

export default function Admin() {
    return (
        <div>
            <TitleHeader
                title="Administrador"
                subtitle="Edita tu nombre, email, etc."
            />
            <DataContainer>
                <InputContainer>
                    <TextField
                        label="Responsable"
                        variant="outlined"
                        size="small"
                        color="secondary"
                    />
                    <InputDisabled id="lastname" label="Email" />
                </InputContainer>
                <ButtonContainer>
                    <AdenButton>Actualizar</AdenButton>
                </ButtonContainer>
                <ChangePassword />
            </DataContainer>
        </div>
    );
}

const DataContainer = styled.div`
    padding: 3rem 6rem;
    background-color: #ffffff;
    box-shadow: 0 2px 4px #00000020;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 1.5rem;
    border-radius: 5px;
`;

const InputContainer = styled.div`
    grid-column: span 2;
    display: grid;
    row-gap: 1.5rem;
    width: 60%;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    grid-column: span 2;
    width: 60%;
`;
