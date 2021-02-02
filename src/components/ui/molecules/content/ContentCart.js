import React, { useState } from "react";
import styled from "styled-components";

import { Badge, Collapse, IconButton } from "@material-ui/core";
import { ShoppingCartRounded } from "@material-ui/icons";

import CartContainer from "./CartContainer";

const ContentCart = (props) => {
    const { content } = props;

    const [cartOpen, setCartOpen] = useState(false);

    function handleSetCartOpen() {
        setCartOpen(!cartOpen);
    }

    return (
        <ContentCartContainer>
            <CartIcon onClick={handleSetCartOpen}>
                <Badge color="primary" badgeContent={3}>
                    <ShoppingCartRounded />
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
    left: 0;
    right: 0;
    background-color: #ffffff;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    z-index: 9999;
`;

const CartIcon = styled(IconButton)`
    position: absolute !important;
    right: 1rem !important;
    top: -4rem !important;
`;
