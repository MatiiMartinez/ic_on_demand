import React from "react";
import styled from "styled-components";

import Logo from "../assets/Bantrab.jpg";

import InputDisabled from "../components/common/InputDisabled";
import FormCountries from "../components/ui/molecules/FormCountries";
import TitleHeader from "../components/ui/atoms/TitleHeader";
import { Button } from "@material-ui/core";

export default function Company() {
    return (
        <div>
            <TitleHeader
                title="Empresa"
                subtitle="Edita los datos de tu empresa."
            />
            <DataContainer>
                <InputContainer>
                    <InputDisabled id="razon_social" label="Razón Social" />
                    <FormCountries label="País" />
                    <ButtonContainer>
                        <Button variant="contained" color="primary">
                            Aceptar
                        </Button>
                    </ButtonContainer>
                </InputContainer>
                <LogoContainer>
                    <CompanyLogo src={Logo} alt="company" />
                    <Button variant="contained" color="primary">
                        Subir Imagen
                    </Button>
                </LogoContainer>
            </DataContainer>
        </div>
    );
}

const DataContainer = styled.div`
    padding: 3rem 6rem;
    background-color: #ffffff;
    box-shadow: 0 2px 4px #00000020;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    border-radius: 5px;
`;

const InputContainer = styled.div`
    grid-column: span 2;
    display: grid;
    row-gap: 1.5rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5rem;
`;

const CompanyLogo = styled.img`
    border-radius: 25%;
    width: 100%;
    height: auto;
`;
