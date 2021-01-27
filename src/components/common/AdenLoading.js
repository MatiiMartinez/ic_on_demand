/**
 * Falta transformar en loading de fetch
 */

import React from "react";
import styled from "styled-components";

import { CircularProgress } from "@material-ui/core";

import AdenLogoRed from "../../assets/aden-logo-red.png";

export default function AdenLoading() {
    return (
        <AdenLoadingContainer>
            <img src={AdenLogoRed} alt="logo" />
            <CircularProgress style={{ color: "#B31D15" }} />
        </AdenLoadingContainer>
    );
}

const AdenLoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 30px;

    img {
        width: 350px;
        height: auto;
    }
`;
