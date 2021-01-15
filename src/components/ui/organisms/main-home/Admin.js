import { TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import AdenButton from "../../../common/AdenButton";
import InputDisabled from "../../../common/InputDisabled";
import ChangePassword from "../../molecules/ChangePassword";

export default function Admin() {
  return (
    <div>
      <Title>Administrador</Title>
      <SubTitle>Edita tu nombre, email, etc.</SubTitle>
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

const Title = styled.h1`
  color: #6c757d;
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin: 0;
`;

const SubTitle = styled.p`
  color: #6c757d;
  font-size: 0.75rem;
  margin: 0.75rem 0;
`;

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
