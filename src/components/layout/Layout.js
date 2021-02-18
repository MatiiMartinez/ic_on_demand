import React from "react";
import styled from "styled-components";

// COMPONENTS
import Navegation from "./navegation/Navegation";
import Aside from "./aside/Aside";

export default function Layout(props) {
  return (
    <>
      <Navegation />
      <Aside />
      <BodyContainer>{props.children}</BodyContainer>
    </>
  );
}

const BodyContainer = styled.main`
  padding-top: 60px;
  padding-left: calc(250px + 2rem);
`;
