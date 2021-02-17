import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import InputDisabled from "../../../common/InputDisabled";
import FormCountries from "../../molecules/FormCountries";

import Logo from "../../../../assets/Bantrab.jpg";

const FormCompany = () => {
    return (
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
    );
};

export default FormCompany;

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

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 240px;
`;

const CompanyLogo = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: auto;
`;
