import React from "react";
import styled from "styled-components";

import TitleInfo from "../../atoms/TitleInfo";
import { contentMock } from "../../../../mocks/contentMock";
import { IconButton } from "@material-ui/core";
import { DeleteOutlineOutlined } from "@material-ui/icons";

const RightCart = () => {
    return (
        <>
            <TitleInfo label="Resumen de Pedido" />
            <OptionsContainer>
                <Subtitle>Cursos</Subtitle>
                {contentMock[0].content.map((content, index) => (
                    <CourseInCart key={index}>
                        <CourseInfo>
                            <CourseTitle>{content.title}</CourseTitle>
                            <CourseUnity>{contentMock[0].title}</CourseUnity>
                        </CourseInfo>
                        <IconButton>
                            <DeleteOutlineOutlined />
                        </IconButton>
                    </CourseInCart>
                ))}
            </OptionsContainer>
        </>
    );
};

export default RightCart;

const OptionsContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    background-color: #ffffff;
    border-radius: 8px;
    height: 100%;
`;

const Subtitle = styled.h2`
    font-size: 0.9rem;
    color: #00000075;
    margin: 0;
`;

const CourseInCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        color: #dc3545;
    }
`;

const CourseInfo = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
`;

const CourseTitle = styled.h2`
    font-size: 1rem;
    margin: 0;
`;

const CourseUnity = styled.span`
    font-size: 0.9rem;
    font-style: italic;
    margin: 0;
`;
