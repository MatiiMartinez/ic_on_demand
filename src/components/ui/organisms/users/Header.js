import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContainer>
            <Title>Usuarios</Title>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    background-color: #fbfbfb;
    height: 100px;
`;

const Title = styled.h1`
    font-size: 1rem;
    font-weight: 700;
    color: #ababab;
`;
