import React, { useContext, useState } from "react";
import styled from "styled-components";

import { Badge, Collapse, IconButton } from "@material-ui/core";
import { MenuBookRounded } from "@material-ui/icons";

import CartContainer from "./CartContainer";
import asideContext from "../../../context/asideContext/asideContext";

const ContentCart = (props) => {
  const asideContextState = useContext(asideContext);

  const { openAside } = asideContextState;

  const { content } = props;

  const [cartOpen, setCartOpen] = useState(false);

  function handleSetCartOpen() {
    setCartOpen(!cartOpen);
  }

  return (
    <ContentCartContainer openAside={openAside}>
      <CartIcon onClick={handleSetCartOpen}>
        <Badge color="primary" badgeContent={3}>
          <MenuBookRounded />
        </Badge>
      </CartIcon>
      <Collapse in={cartOpen} timeout="auto" unmountOnExit>
        <CartContainer items={content[0].content[0].content} />
      </Collapse>
    </ContentCartContainer>
  );
};

export default ContentCart;

const ContentCartContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.openAside ? "20%" : "0")};
  right: 0;
  background-color: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

const CartIcon = styled(IconButton)`
  position: absolute !important;
  right: 1rem !important;
  top: -4rem !important;
`;
