import React, { useState } from "react";
import styled from "styled-components";

import { Badge, Drawer, IconButton } from "@material-ui/core";
import { ShoppingCartRounded } from "@material-ui/icons";
import LeftCart from "../../molecules/content/LeftCart";
import RightCart from "../../molecules/content/RightCart";

const ContentCart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCartOpen() {
    setCartOpen(!cartOpen);
  }

  return (
    <ContentCartContainer>
      <CartIcon onClick={toggleCartOpen}>
        <Badge color="primary" badgeContent={3}>
          <ShoppingCartRounded color="primary" />
        </Badge>
      </CartIcon>
      <Drawer open={cartOpen} onClose={toggleCartOpen} anchor="bottom">
        <CartContainer>
          <Column>
            <LeftCart />
          </Column>
          <Column>
            <RightCart />
          </Column>
        </CartContainer>
      </Drawer>
    </ContentCartContainer>
  );
};

export default ContentCart;

const ContentCartContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  z-index: 99;
`;

const CartIcon = styled(IconButton)`
  position: absolute;
  right: 1rem;
  top: -4rem;
`;

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 8fr;
  padding: 2rem;
  column-gap: 2rem;
  background-color: #f3f6f9;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
