import React, { useState } from "react";
import styled from "styled-components";

import { Button, TextField } from "@material-ui/core";
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
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                style={{ marginLeft: "auto" }}
            >
                Agregar
            </Button>
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
                        <Button outlined={true} onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button>Guardar</Button>
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
