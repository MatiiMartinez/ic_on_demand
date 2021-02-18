import React, { useState } from "react";

import { Button, TextField } from "@material-ui/core";
import ModalForm from "../../../common/ModalForm";
import styled from "styled-components";

export default function NewTeam() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <NewTeamButton onClick={handleOpen}>Nuevo Equipo</NewTeamButton>
      <ModalForm isOpen={isOpen} handleClose={handleClose} title="Crear equipo">
        <NewTeamContainer>
          <TextField
            label="Nombre"
            size="small"
            variant="outlined"
            color="primary"
            type="email"
          />
        </NewTeamContainer>
      </ModalForm>
    </>
  );
}

const NewTeamContainer = styled.div`
  display: flex;
`;

const NewTeamButton = styled.button`
  color: #ababab;
  border: 1px solid #ababab;
  padding: 0.5rem 1rem;

  :hover {
    background-color: #f3f6f9;
  }
`;
