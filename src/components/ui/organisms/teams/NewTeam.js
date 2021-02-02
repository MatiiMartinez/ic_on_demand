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
            <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={handleOpen}
            >
                NUEVO EQUIPO
            </Button>
            <ModalForm
                isOpen={isOpen}
                handleClose={handleClose}
                title="Crear equipo"
            >
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
