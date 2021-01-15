import React from "react";
import styled from "styled-components";

import AdenButton from "../../common/AdenButton";
import Logo from "../../../assets/company.png";

import { Avatar, IconButton } from "@material-ui/core";
import { HelpOutline, InfoOutlined } from "@material-ui/icons";

const CartContainer = (props) => {
  const { items } = props;

  return (
    <CartContainerCollapse>
      <CartIcons>
        <Avatar src={Logo} alt="logo" />
        <CartIconsButtons>
          <IconButton>
            <InfoOutlined />
          </IconButton>
          <IconButton>
            <HelpOutline />
          </IconButton>
        </CartIconsButtons>
      </CartIcons>
      <ListContainer>
        <Title>Your Bag</Title>
        <ListContent>
          <ListContentHeader>Content</ListContentHeader>
          {items.map((item, index) => (
            <ItemList key={index}>{item.title}</ItemList>
          ))}
        </ListContent>
      </ListContainer>
      <Order>
        <AdenButton>Finalizar</AdenButton>
        <span>3 items</span>
      </Order>
    </CartContainerCollapse>
  );
};

export default CartContainer;

const CartContainerCollapse = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 3fr;
`;

const CartIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

const CartIconsButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 2rem 4rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  margin: 0;
`;

const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const ListContentHeader = styled.span`
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
`;

const ItemList = styled.div``;

const Order = styled.div`
  display: flex;
  flex-direction: column-reverse;
  row-gap: 1rem;
  padding: 2rem 4rem;

  span {
    background-color: #ff7e7750;
    padding: 1rem 1rem;
  }

  button {
    width: 100%;
  }
`;
