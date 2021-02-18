import React from "react";
import styled from "styled-components";

import { contentMock } from "../../../../mocks/contentMock";

const MenuContent = (props) => {
  const { open, handleClose } = props;

  return (
    <MenuContentContainer open={open}>
      {contentMock.map((content, index) => (
        <MenuItem key={index} onClick={handleClose}>
          <MenuItemTitle>{content.title}</MenuItemTitle>
        </MenuItem>
      ))}
    </MenuContentContainer>
  );
};

export default MenuContent;

const MenuContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 2rem;
  background-color: #f3f6f9;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(${(props) => (props.open ? "5rem" : "2.5rem")});
  opacity: ${(props) => (props.open ? "1" : "0")};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  z-index: 1;
  transition: all 0.5s ease;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f6f9;
  padding: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;

  :hover {
    background-color: #ffffff;
  }
`;

const MenuItemTitle = styled.h2`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
`;
