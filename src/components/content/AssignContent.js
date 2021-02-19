import React, { useState } from "react";
import styled from "styled-components";

import FirstStep from "./FirstStep";
import { Button, Modal } from "@material-ui/core";
import SecondStep from "./SecondStep";

const AssignContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [steps, setSteps] = useState(true);

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
                size="small"
                color="primary"
                onClick={handleOpen}
            >
                Asignar curso
            </Button>
            <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
                <ModalContainer>
                    {steps ? <FirstStep /> : <SecondStep />}
                </ModalContainer>
            </Modal>
        </>
    );
};

export default AssignContent;

const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    border: none;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 2rem;
    width: 80%;
    height: 90%;
`;
