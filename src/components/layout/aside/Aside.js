import React from "react";
import styled from "styled-components";

import { Apps, Assessment, Group, Payment } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

import MenuLink from "./components/MenuLink";
import MenuList from "./components/MenuList";

const Aside = () => {
  return (
    <AsideContainer>
      <MenuList title="General">
        <MenuLink to="/analytics" label="Reportes" icon={<Assessment />} />
        <MenuLink to="/plans" label="Planes" icon={<Payment />} />
        <MenuLink to="/content" label="Contenido" icon={<Apps />} />
        <MenuLink to="/groups" label="Grupos" icon={<Group />} />
      </MenuList>
      <MenuList title="Grupos">
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
    </AsideContainer>
  );
};

export default Aside;

const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: fixed;
  height: 100%;
  margin-top: 60px;
  width: 250px;
  z-index: 1;
`;
