import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Marketing</Title>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background-color: #fbfbfb;
  padding: 2rem;
`;
const Title = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  color: #ababab;
`;
