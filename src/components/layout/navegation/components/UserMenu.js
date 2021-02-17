import React, { useState } from "react";
import styled from "styled-components";

import { Divider, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";

const UserMenu = () => {
    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <UserMenuContainer>
            <IconButton onClick={toggleOpen}>
                <AccountCircle fontSize="large" htmlColor="#ababab" />
            </IconButton>
            <Menu open={open}>
                <MenuButton onClick={handleClose} to="/account">
                    Mi cuenta
                </MenuButton>
                <Divider />
                <MenuButton onClick={handleClose} to="/">
                    Cerrar sesión
                </MenuButton>
            </Menu>
        </UserMenuContainer>
    );
};

export default UserMenu;

const UserMenuContainer = styled.div`
    position: relative;
`;

const Menu = styled.div`
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    bottom: ${(props) => (props.open ? "-100px" : "100px")};
    right: 0;
    background-color: #ffffff;
    z-index: 9999;
    border: 1px solid rgba(0, 0, 0, 0.12);
    transition: all 0.5s ease;
`;

const MenuButton = styled(Link)`
    padding: 1rem;
    width: 200px;

    :hover {
        background-color: #f3f6f9;
    }
`;
