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

const NavegationContainer = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 1rem;
  z-index: 1;
`;

const FakeLogo = styled.img`
  width: auto;
  height: 60px;
`;
