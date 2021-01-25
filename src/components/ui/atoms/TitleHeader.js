import React from "react";
import styled from "styled-components";

export default function TitleHeader(props) {
    const { title, subtitle } = props;
    return (
        <>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </>
    );
}

const Title = styled.h1`
    color: #b31d15;
    font-size: 2rem;
    font-weight: 900;
    line-height: 1rem;
    margin: 0;
`;

const SubTitle = styled.p`
    color: #616161;
    font-size: 1rem;
    margin: 1rem 0;
`;
