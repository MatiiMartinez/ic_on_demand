import React from "react";
import styled from "styled-components";

import Logo from "../../../../assets/company.png";

import InputDisabled from "../../../common/InputDisabled";
import AdenButton from "../../../common/AdenButton";
import FormCountries from "../../molecules/FormCountries";

export default function Company() {
  return (
    <div>
      <Title>Empresa</Title>
      <SubTitle>Edita los datos de tu empresa.</SubTitle>
      <DataContainer>
        <InputContainer>
          <InputDisabled id="razon_social" label="Razón Social" />
          <FormCountries label="País" />
          <ButtonContainer>
            <AdenButton>Aceptar</AdenButton>
          </ButtonContainer>
        </InputContainer>
        <LogoContainer>
          <CompanyLogo src={Logo} alt="company" />
          <AdenButton>Subir Imagen</AdenButton>
        </LogoContainer>
      </DataContainer>
    </div>
  );
}

const Title = styled.h1`
  color: #b31d15;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1rem;
  margin: 0;
`;

const SubTitle = styled.p`
  color: #616161;
  font-size: 1rem;
  margin: 1rem 0;
`;

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
  max-width: 100px;
  height: auto;
`;
