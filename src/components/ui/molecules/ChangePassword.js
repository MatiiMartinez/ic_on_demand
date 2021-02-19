import React, { useState } from "react";
import styled from "styled-components";

import { Button, TextField } from "@material-ui/core";
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
            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Cambiar Contraseña
            </Button>
            <Text>
                Te recomendamos que elijas una contraseña única que no uses para
                conectarte a otras cuentas.
            </Text>
            <ModalForm
                isOpen={isOpen}
                handleClose={handleClose}
                title="Cambiar contraseña"
            >
                <Body>
                    <FakeTextField
                        label="Contraseña actual"
                        size="small"
                        variant="outlined"
                        color="secondary"
                        type="password"
                    />
                    <FakeTextField
                        label="Contraseña nueva"
                        size="small"
                        variant="outlined"
                        color="secondary"
                        type="password"
                    />
                    <FakeTextField
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
    flex-direction: column-reverse;
    align-items: flex-start;
    row-gap: 1rem;
`;

const Text = styled.span`
    font-size: 1rem;
    font-weight: 300;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

const FakeTextField = styled(TextField)`
    width: 100%;
`;
