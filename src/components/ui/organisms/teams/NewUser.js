import React, { useState } from "react";

import { Button, TextField } from "@material-ui/core";
import ModalForm from "../../../common/ModalForm";
import styled from "styled-components";

export default function NewUser() {
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
                NUEVO USUARIO
            </Button>
            <ModalForm
                isOpen={isOpen}
                handleClose={handleClose}
                title="Crear usuario"
            >
                <NewUserContainer>
                    <TextField
                        label="Correo electrónico"
                        size="small"
                        variant="outlined"
                        color="primary"
                        type="email"
                    />
                    <Button variant="contained" color="secondary" size="medium">
                        Verificar
                    </Button>
                </NewUserContainer>
            </ModalForm>
        </>
    );
}

const NewUserContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`;