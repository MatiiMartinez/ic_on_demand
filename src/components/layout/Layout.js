import React, { useState } from "react";
import styled from "styled-components";

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { MenuRounded } from "@material-ui/icons";

// COMPONENTS
import AsideHome from "../templates/home/AsideHome";

export default function Layout(props) {
    const [openAside, setOpenAside] = useState(true);

    function handleToggleAside() {
        setOpenAside(!openAside);
    }

    return (
        <>
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
                        <Typography variant="h6" noWrap>
                            Sebastian Maidana
                        </Typography>
                    </Toolbar>
                </AppBar>
                <MainContainer>{props.children}</MainContainer>
            </LayoutContainer>
        </>
    );
}

const LayoutContainer = styled.div`
    margin-left: ${(props) => (props.openAside ? "20%" : "0")};
`;

const MainContainer = styled.div`
    position: relative;
    padding: 3rem;
`;