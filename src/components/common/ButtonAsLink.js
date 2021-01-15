import React from "react";
import styled from "styled-components";

export default function ButtonAsLink(props) {
  const { onClick } = props;

  return (
    <ButtonAsLinkContainer onClick={onClick}>
      {props.children}
    </ButtonAsLinkContainer>
  );
}

const ButtonAsLinkContainer = styled.button`
  background-color: transparent;
  color: #b6241d;
  padding: 0;
`;
