import React from "react";
import styled from "styled-components";

import { DeleteOutlined } from "@material-ui/icons";

export default function Card(props) {
    const { email, register, estado } = props.item;

    return (
        <CardContainer>
            <IconButton>
                <DeleteOutlined />
            </IconButton>
            <Email>{email}</Email>
            <Estado estado={estado}>{estado.toUpperCase()}</Estado>
            <Register confirm={register === "" ? false : true}>
                {register === "" ? "Sin confirmar" : register}
            </Register>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    background: #ffffff;
    box-shadow: 0 2px 4px #00000020;
    display: grid;
    grid-template-columns: 1fr 6fr 1fr 2fr;
    padding: 0.5rem 1rem;
    align-items: center;
`;

const IconButton = styled.button`
    cursor: pointer;
    background: transparent;
    text-align: start;
    width: max-content;

    :hover > svg {
        color: #b6241d;
    }
`;

const Email = styled.span`
    font-weight: 300;
    margin: 0;
    padding: 0;
`;

const Estado = styled.span`
    padding: 0.25rem 0.5rem;
    font-size: 0.5rem;
    font-weight: 900;
    color: #ffffff;
    background-color: ${(props) =>
        props.estado === "activo"
            ? "#28a745"
            : props.estado === "inactivo"
            ? "#dc3545"
            : "#ffc107"};
    width: max-content;
    border-radius: 5px;
`;

const Register = styled.span`
    font-weight: 300;
    color: #6c757d;
    font-size: 0.8rem;
    text-align: end;
`;
