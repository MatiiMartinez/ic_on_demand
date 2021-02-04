import React, { useState } from "react";
import styled from "styled-components";

import { TextField } from "@material-ui/core";
import ButtonAsLink from "../../common/ButtonAsLink";
import ModalForm from "../../common/ModalForm";

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
            <ModalForm
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
                </Body>
            </ModalForm>
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
