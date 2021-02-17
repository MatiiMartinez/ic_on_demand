import React from "react";
import styled from "styled-components";

import Logo from "../../../assets/Bantrab.jpg";
import UserMenu from "./components/UserMenu";

const Navegation = () => {
    return (
        <NavegationContainer>
            <FakeLogo src={Logo} alt="logo" />
            <UserMenu />
        </NavegationContainer>
    );
};

export default Navegation;

const NavegationContainer = styled.div`
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 60px;
`;

const FakeLogo = styled.img`
    width: auto;
    height: 60px;
`;
