import React from "react";
import styled from "styled-components";

import Logo from "../../../assets/aden-logo-white.png";
import LoginForm from "../../ui/molecules/LoginForm";

export default function AsideLogin() {
    return (
        <AsideContainer>
            <LogoImg src={Logo} alt="logo" />
            <LoginForm />
        </AsideContainer>
    );
}

const AsideContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20%;
`;

const LogoImg = styled.img`
    width: 300px;
    height: auto;
`;
