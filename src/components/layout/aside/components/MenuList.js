import React from "react";
import styled from "styled-components";

const MenuList = (props) => {
  const { title } = props;

  return (
    <MenuListContainer>
      <Title>{title}</Title>
      {props.children}
    </MenuListContainer>
  );
};

export default MenuList;

const MenuListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #b31d15;
  margin-bottom: 1rem;
`;
