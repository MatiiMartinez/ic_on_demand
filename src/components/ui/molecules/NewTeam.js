import React, { useState } from "react";
import styled from "styled-components";

import AdenButton from "../../common/AdenButton";

import { TextField } from "@material-ui/core";
import FormModal from "../../common/FormModal";

const NewTeam = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <AdenButton onClick={handleOpen}>Agregar</AdenButton>
      <FormModal
        isOpen={isOpen}
        handleClose={handleClose}
        title="Agregar usuario"
      >
        <Body>
          <TextField
            label="Email"
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
    </>
  );
};

export default NewTeam;

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
