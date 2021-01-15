import React, { useContext, useState } from "react";
import styled from "styled-components";

import {
  ChevronLeftRounded,
  ContactsRounded,
  ExitToAppRounded,
  GroupRounded,
  LocationCityRounded,
  SettingsRounded,
  SupervisorAccountRounded,
  TocRounded,
} from "@material-ui/icons";
import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import asideContext from "../../../context/asideContext/asideContext";

const useStyles = makeStyles({
  drawerPaper: {
    width: "20%",
  },
});

export default function AsideHome(props) {
  const asideContextState = useContext(asideContext);

  const { openAside, handleCloseAside } = asideContextState;

  const { page, handleChangePage } = props;

  const [account, setAccount] = useState(false);

  function handleSetAccount() {
    setAccount(!account);
  }

  const classes = useStyles();

  return (
    <Drawer
      variant="persistent"
      archor="left"
      open={openAside}
      style={{ flexShrink: 0 }}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <DrawerHeader>
        <IconButton onClick={handleCloseAside}>
          <ChevronLeftRounded />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem button open={account} onClick={handleSetAccount}>
          <ListItemIcon>
            <ContactsRounded />
          </ListItemIcon>
          <ListItemText primary="Cuenta" />
        </ListItem>
        <Collapse in={account} timeout="auto" unmountOnExit>
          <List>
            <ListItem
              button
              style={{
                paddingLeft: "3rem",
              }}
              onClick={() => handleChangePage("company")}
            >
              <ListItemIcon>
                <LocationCityRounded
                  color={page === "company" ? "secondary" : "inherit"}
                />
              </ListItemIcon>
              <ListItemText primary="Empresa" />
            </ListItem>
            <ListItem
              button
              style={{
                paddingLeft: "3rem",
              }}
              onClick={() => handleChangePage("admin")}
            >
              <ListItemIcon>
                <SupervisorAccountRounded
                  color={page === "admin" ? "secondary" : "inherit"}
                />
              </ListItemIcon>
              <ListItemText primary="Administrador" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleChangePage("team")}>
          <ListItemIcon>
            <GroupRounded color={page === "team" ? "secondary" : "inherit"} />
          </ListItemIcon>
          <ListItemText primary="Equipo" />
        </ListItem>
        <ListItem button onClick={() => handleChangePage("content")}>
          <ListItemIcon>
            <TocRounded color={page === "content" ? "secondary" : "inherit"} />
          </ListItemIcon>
          <ListItemText primary="Contenido" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsRounded />
          </ListItemIcon>
          <ListItemText primary="Configuracion" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppRounded />
          </ListItemIcon>
          <ListItemText primary="Salir" />
        </ListItem>
      </List>
    </Drawer>
  );
}

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
