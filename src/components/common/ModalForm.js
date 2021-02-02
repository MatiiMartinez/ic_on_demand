import React from "react";
import styled from "styled-components";

import { Button, IconButton, Modal } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";

export default function ModalForm(props) {
    const { isOpen, handleClose, title } = props;

    return (
        <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
            <ModalContainer>
                <Header>
                    <Title>{title}</Title>
                    <IconButton size="small" onClick={handleClose}>
                        <CloseRounded />
                    </IconButton>
                </Header>
                <Body>
                    {props.children}
                    <ButtonContainer>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleClose}
                        >
                            Cancelar
                        </Button>
                        <Button variant="contained" color="primary">
                            Finalizar
                        </Button>
                    </ButtonContainer>
                </Body>
            </ModalContainer>
        </Modal>
    );
}

const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    border: none;
    background-color: #ffffff;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eff0f3;
    padding: 0.5rem 1rem;
`;

const Title = styled.h1`
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
`;

const Body = styled.div`
    padding: 1.5rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    column-gap: 1rem;
    margin-top: 1.5rem;
`;
