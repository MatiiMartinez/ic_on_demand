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

                    <FakeButton variant="contained" color="primary">
                        Finalizar
                    </FakeButton>
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
    min-width: 400px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f3f6f9;
    padding: 0.5rem 1rem;
`;

const Title = styled.h1`
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
`;

const Body = styled.div`
    padding: 2rem;
`;

const FakeButton = styled(Button)`
    margin-top: 2rem;
    width: 100%;
`;
