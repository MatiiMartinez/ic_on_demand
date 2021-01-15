import React from "react";
import styled from "styled-components";

import { Button } from "@material-ui/core";

export default function MenuContent(props) {
  const { menu, handleSetMenu, content } = props;

  return (
    <MenuContentContainer>
      {content.map((item, index) => (
        <MenuButton
          key={index}
          style={{ fontSize: "0.75rem" }}
          variant="outlined"
          color="primary"
          menu={menu === item.id ? "#b6241d" : ""}
          onClick={() => handleSetMenu(item.id)}
        >
          {item.title}
        </MenuButton>
      ))}
    </MenuContentContainer>
  );
}

const MenuContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  margin-bottom: 2rem;
`;

const MenuButton = styled(Button)`
  font-size: 0.7rem !important;
  border-width: 2px !important;
  background-color: ${(props) => props.menu} !important;
  color: ${(props) => (props.menu ? "#ffffff" : "#b6241d")} !important;
  text-transform: uppercase !important;

  :hover {
    color: #ffffff !important;
    background-color: #b6241d !important;
  }
`;
