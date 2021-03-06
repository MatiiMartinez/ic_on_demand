import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Divider, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";

const UserMenu = () => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef();

    useEffect(() => {
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    function toggleOpen() {
        setOpen(!open);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleClickOutside(e) {
        if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
            return;
        }
        setOpen(false);
    }

    return (
        <UserMenuContainer>
            <Username>Administrador</Username>
            <IconButton onClick={toggleOpen}>
                <AccountCircle fontSize="large" htmlColor="#ababab" />
            </IconButton>
            <Menu open={open}>
                <MenuButton onClick={handleClose} to="/account">
                    Mi cuenta
                </MenuButton>
                <Divider />
                <MenuButton onClick={handleClose} to="/plans">
                    Licencias
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
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
`;

const Username = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    color: #ababab;
`;

const Menu = styled.div`
    display: flex;
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
    flex-direction: column;
    position: absolute;
    bottom: ${(props) => (props.open ? "-100px" : "-80px")};
    opacity: ${(props) => (props.open ? "1" : "0")};
    right: 0;
    background-color: #ffffff;
    z-index: 1;
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
