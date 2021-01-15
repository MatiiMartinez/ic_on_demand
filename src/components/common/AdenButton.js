import React from "react";
import styled from "styled-components";

export default function AdenButton(props) {
  const { onClick, outlined } = props;

  return (
    <SaveButton onClick={onClick} outlined={outlined}>
      {props.children}
    </SaveButton>
  );
}

const SaveButton = styled.button`
  background-color: ${(props) => (props.outlined ? "#ffffff" : "#b6241d")};
  color: ${(props) => (props.outlined ? "#b6241d" : "#ffffff")};
  border: ${(props) => (props.outlined ? "1px solid #b6241d" : "none")};
  padding: 0.75rem 2rem;
  font-weight: 600;
  width: max-content;
`;
