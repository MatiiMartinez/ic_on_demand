import React, { useState } from "react";
import styled from "styled-components";

import { ExpandMore } from "@material-ui/icons";
import MenuContent from "./MenuContent";

const Header = () => {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <HeaderContainer>
      <MenuButton onClick={toggleOpen}>
        <MenuText>Contenido</MenuText>
        <ExpandMore fontSize="small" />
      </MenuButton>
      <MenuContent open={open} handleClose={handleClose} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
  padding: 2rem;
  position: relative;
`;

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
  padding: 0.5rem 1rem;
  width: max-content;
  cursor: pointer;

  :hover {
    background-color: #f3f6f9;
  }
`;

const MenuText = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
`;
