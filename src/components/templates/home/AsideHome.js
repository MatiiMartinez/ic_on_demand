import React, { useState } from "react";
import styled from "styled-components";

import {
    AssessmentRounded,
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
import { Link } from "react-router-dom";

import Logo from "../../../assets/Bantrab.jpg";

const useStyles = makeStyles({
    drawerPaper: {
        width: "20%",
        zIndex: "-1",
    },
});

export default function AsideHome(props) {
    const { openAside, handleToggleAside } = props;

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
                <CompanyLogo src={Logo} alt="company" />
                <IconButton onClick={handleToggleAside}>
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
                        <Link to="/company">
                            <ListItem
                                button
                                style={{
                                    paddingLeft: "3rem",
                                }}
                            >
                                <ListItemIcon>
                                    <LocationCityRounded />
                                </ListItemIcon>
                                <ListItemText primary="Empresa" />
                            </ListItem>
                        </Link>
                        <Link to="/admin">
                            <ListItem
                                button
                                style={{
                                    paddingLeft: "3rem",
                                }}
                            >
                                <ListItemIcon>
                                    <SupervisorAccountRounded />
                                </ListItemIcon>
                                <ListItemText primary="Administrador" />
                            </ListItem>
                        </Link>
                    </List>
                </Collapse>
                <Link to="/teams">
                    <ListItem button>
                        <ListItemIcon>
                            <GroupRounded />
                        </ListItemIcon>
                        <ListItemText primary="Equipos" />
                    </ListItem>
                </Link>
                <Link to="/content">
                    <ListItem button>
                        <ListItemIcon>
                            <TocRounded />
                        </ListItemIcon>
                        <ListItemText primary="Contenido" />
                    </ListItem>
                </Link>
                <Link to="/analytics">
                    <ListItem button>
                        <ListItemIcon>
                            <AssessmentRounded />
                        </ListItemIcon>
                        <ListItemText primary="Analítica" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <Link to="/config">
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsRounded />
                        </ListItemIcon>
                        <ListItemText primary="Configuracion" />
                    </ListItem>
                </Link>
                <Link to="/">
                    <ListItem button>
                        <ListItemIcon>
                            <ExitToAppRounded />
                        </ListItemIcon>
                        <ListItemText primary="Salir" />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    );
}

const DrawerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
`;

const CompanyLogo = styled.img`
    border-radius: 25%;
    width: auto;
    height: 4rem;
`;
