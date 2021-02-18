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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const FakeLogo = styled.img`
  width: auto;
  height: 60px;
`;
