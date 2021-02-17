import React, { useState } from "react";
import styled from "styled-components";

import {
    AssessmentRounded,
    ChevronLeftRounded,
    ContactsRounded,
    ExitToAppRounded,
    GroupRounded,
    HelpOutlineOutlined,
    LocationCityRounded,
    PaymentRounded,
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
    Tooltip,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import Logo from "../../../assets/Bantrab.jpg";

const useStyles = makeStyles({
    drawerPaper: {
        width: "18%",
        zIndex: "1",
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
                <Link to="/account">
                    <ListItem button>
                        <ListItemIcon>
                            <ContactsRounded />
                        </ListItemIcon>
                        <ListItemText primary="Cuenta" />
                        <Tooltip title="Editar información de cuenta y empresa">
                            <HelpOutlineOutlined fontSize="small" />
                        </Tooltip>
                    </ListItem>
                </Link>
                <Link to="/teams">
                    <ListItem button>
                        <ListItemIcon>
                            <GroupRounded />
                        </ListItemIcon>
                        <ListItemText primary="Equipos" />
                        <Tooltip title="Información de grupos">
                            <HelpOutlineOutlined fontSize="small" />
                        </Tooltip>
                    </ListItem>
                </Link>
                <Link to="/content">
                    <ListItem button>
                        <ListItemIcon>
                            <TocRounded />
                        </ListItemIcon>
                        <ListItemText primary="Contenido" />
                        <Tooltip title="Cursos disponibles">
                            <HelpOutlineOutlined fontSize="small" />
                        </Tooltip>
                    </ListItem>
                </Link>
                <Link to="/analytics">
                    <ListItem button>
                        <ListItemIcon>
                            <AssessmentRounded />
                        </ListItemIcon>
                        <ListItemText primary="Analítica" />
                        <Tooltip title="Panel de estadísticas">
                            <HelpOutlineOutlined fontSize="small" />
                        </Tooltip>
                    </ListItem>
                </Link>
                <Link to="/plans">
                    <ListItem button>
                        <ListItemIcon>
                            <PaymentRounded />
                        </ListItemIcon>
                        <ListItemText primary="Planes" />
                        <Tooltip title="Panel de planes">
                            <HelpOutlineOutlined fontSize="small" />
                        </Tooltip>
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
