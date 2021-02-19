import React from "react";

import { Avatar, TextField } from "@material-ui/core";
import MenuList from "./MenuList";
import MenuLink from "./MenuLink";
import styled from "styled-components";

const MenuListGroups = () => {
    return (
        <MenuList title="Grupos">
            <FakeTextField
                type="search"
                placeholder="Filtrar"
                helperText="Ingresá el nombre del equipo"
                variant="outlined"
                size="small"
                color="secondary"
            />
            <MenuLink
                to="/teams/Marketing"
                label="Marketing"
                icon={<Avatar variant="rounded">M</Avatar>}
            />
            <MenuLink
                to="/teams/Marketing"
                label="Diseño"
                icon={<Avatar variant="rounded">D</Avatar>}
            />
            <MenuLink
                to="/teams/Marketing"
                label="Gestión Comercial"
                icon={<Avatar variant="rounded">G</Avatar>}
            />
            <MenuLink
                to="/teams/Marketing"
                label="Logística"
                icon={<Avatar variant="rounded">L</Avatar>}
            />
        </MenuList>
    );
};

export default MenuListGroups;

const FakeTextField = styled(TextField)`
    margin-bottom: 1rem;
`;
