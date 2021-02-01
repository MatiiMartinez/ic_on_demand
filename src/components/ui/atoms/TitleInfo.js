import React from "react";
import styled from "styled-components";

export default function TitleInfo(props) {
    const { label } = props;

    return <Title>{label}</Title>;
}

const Title = styled.h1`
    font-size: 1rem;
    margin: 0;
`;
