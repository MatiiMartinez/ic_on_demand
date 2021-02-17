import React, { useState } from "react";
import styled from "styled-components";

import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { MenuRounded } from "@material-ui/icons";

// COMPONENTS
import AsideHome from "../templates/home/AsideHome";
import BreadCrumbs from "../../utils/BreadCrumbs";
import Navegation from "./navegation/Navegation";

export default function Layout(props) {
    const [openAside, setOpenAside] = useState(true);

    function handleToggleAside() {
        setOpenAside(!openAside);
    }

    return (
        <>
            <Navegation />
            <AsideHome
                openAside={openAside}
                handleToggleAside={handleToggleAside}
            />
            <LayoutContainer openAside={openAside}>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            onClick={handleToggleAside}
                            style={{
                                marginRight: "1rem",
                                display: `${openAside ? "none" : "block"}`,
                            }}
                        >
                            <MenuRounded htmlColor="#ffffff" />
                        </IconButton>
                        <BreadCrumbs />
                    </Toolbar>
                </AppBar>
                <MainContainer>{props.children}</MainContainer>
            </LayoutContainer>
        </>
    );
}

const LayoutContainer = styled.div`
    margin-left: ${(props) => (props.openAside ? "18%" : "0")};
`;

const MainContainer = styled.div`
    position: relative;
    padding: 2rem;
`;
