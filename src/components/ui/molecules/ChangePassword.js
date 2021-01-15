import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";

import AdenButton from "../../common/AdenButton";
import ButtonAsLink from "../../common/ButtonAsLink";
import FormModal from "../../common/FormModal";

export default function ChangePassword() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <PasswordContainer>
      <ButtonAsLink onClick={handleOpen}>Cambiar Contraseña</ButtonAsLink>
      <span>
        Te recomendamos que elijas una contraseña única que no uses para
        conectarte a otras cuentas.
      </span>
      <FormModal
        isOpen={isOpen}
        handleClose={handleClose}
        title="Cambiar contraseña"
      >
        <Body>
          <TextField
            label="Contraseña actual"
            size="small"
            variant="outlined"
            color="secondary"
            type="password"
          />
          <TextField
            label="Contraseña nueva"
            size="small"
            variant="outlined"
            color="secondary"
            type="password"
          />
          <TextField
            label="Repetir contraseña nueva"
            size="small"
            variant="outlined"
            color="secondary"
            type="password"
          />
          <ButtonContainer>
            <AdenButton outlined={true} onClick={handleClose}>
              Cancelar
            </AdenButton>
            <AdenButton>Guardar</AdenButton>
          </ButtonContainer>
        </Body>
      </FormModal>
    </PasswordContainer>
  );
}

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;

  button {
    font-size: 1rem;
  }

  span {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 300;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 1rem 20%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;

  button {
    width: 100%;
  }
`;
