import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <HeaderContainer>
      <Title>Reportes</Title>
      {props.children}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fbfbfb;
  padding: 2rem;
`;
const Title = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  color: #ababab;
`;
