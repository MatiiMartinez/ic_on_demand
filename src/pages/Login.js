import React from "react";
import styled from "styled-components";

import AsideLogin from "../components/templates/login/AsideLogin";

export default function Login() {
    return (
        <LoginContainer className="bg-login">
            <div />
            <AsideLogin />
        </LoginContainer>
    );
}

const LoginContainer = styled.main`
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 100vh;
`;
