import React from "react";
import styled from "styled-components";

import { Fade, IconButton, Modal } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";

export default function FormModal(props) {
  const { isOpen, handleClose, title } = props;

  return (
    <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
      <Fade in={isOpen}>
        <ModalContainer>
          <Header>
            <Title>{title}</Title>
            <IconButton onClick={handleClose}>
              <CloseRounded />
            </IconButton>
          </Header>
          {props.children}
        </ModalContainer>
      </Fade>
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
  border-radius: 5px;
  padding: 1.5rem;
  width: 50%;
  box-shadow: 0 2px 4px #00000020;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 900;
  margin: 0;
`;
