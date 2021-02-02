import React, { useState } from "react";
import styled from "styled-components";

import { Badge, Collapse, IconButton } from "@material-ui/core";
import { ShoppingCartRounded } from "@material-ui/icons";
import LeftCart from "../../molecules/content/LeftCart";
import RightCart from "../../molecules/content/RightCart";

const ContentCart = () => {
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
                <CartContainer>
                    <Column>
                        <LeftCart />
                    </Column>
                    <Column>
                        <RightCart />
                    </Column>
                </CartContainer>
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
`;

const CartIcon = styled(IconButton)`
    position: absolute !important;
    right: 1rem !important;
    top: -4rem !important;
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
