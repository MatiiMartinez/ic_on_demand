import React from "react";
import styled from "styled-components";

export default function MenuContent(props) {
  const { menu, handleSetMenu, content } = props;

  return (
    <MenuContentContainer>
      {content.map((item, index) => (
        <MenuButton
          key={index}
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

const MenuButton = styled.button`
  font-size: 1rem;
  background-color: ${(props) => props.menu};
  border: 1px solid ${(props) => props.menu};
  color: ${(props) => (props.menu ? "#ffffff" : "#b6241d")};

  :hover {
    color: #ffffff;
    background-color: #b6241d;
  }
`;
