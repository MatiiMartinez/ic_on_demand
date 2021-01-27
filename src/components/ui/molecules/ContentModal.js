import React from "react";
import styled from "styled-components";

import { Dialog } from "@material-ui/core";
import Button from "../atoms/Button";

const ContentModal = (props) => {
    const { isOpenModal, handleCloseModal } = props;

    return (
        <Dialog open={isOpenModal} onClose={handleCloseModal}>
            <ModalContainer>
                <BodyContainer>
                    <h1>Nombre del curso completo</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam eu nisl ut leo rhoncus dapibus. Quisque vitae enim
                        diam. Maecenas tempus, nunc ac ultrices tempus, quam leo
                        egestas metus, nec feugiat nisi justo vel arcu. Donec et
                        tortor mollis, aliquam leo imperdiet, bibendum turpis.
                        Sed posuere non metus nec efficitur. Praesent
                        scelerisque, dui et rutrum tincidunt, enim lacus auctor
                        mauris, sed tincidunt turpis massa vel massa. Sed id mi
                        arcu.{" "}
                    </p>
                </BodyContainer>
                <ButtonContainer>
                    <Button size="small" handleClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="contained" size="small" color="primary">
                        Agregar Curso
                    </Button>
                </ButtonContainer>
            </ModalContainer>
        </Dialog>
    );
};

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 2rem 2rem;
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
        text-align: center;
    }

    p {
        font-size: 1rem;
        font-weight: 300;
        margin: 0;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    column-gap: 1rem;
`;

export default ContentModal;
