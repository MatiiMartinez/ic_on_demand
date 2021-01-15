import React, { useContext, useState } from "react";
import styled from "styled-components";

import AsideHome from "../components/templates/home/AsideHome";
import MainHome from "../components/templates/home/MainHome";

import { IconButton } from "@material-ui/core";
import { MenuOutlined } from "@material-ui/icons";
import asideContext from "../context/asideContext/asideContext";

export default function Home() {
  const asideContextState = useContext(asideContext);

  const { openAside, handleOpenAside } = asideContextState;

  const [page, setPage] = useState("team");

  function handleChangePage(newPage) {
    setPage(newPage);
  }

  return (
    <div>
      <AsideHome page={page} handleChangePage={handleChangePage} />
      <MainHomeContainer openAside={openAside}>
        <MenuButtonContainer>
          {openAside ? (
            ""
          ) : (
            <IconButton onClick={handleOpenAside}>
              <MenuOutlined />
            </IconButton>
          )}
        </MenuButtonContainer>
        <MainHome page={page} />
      </MainHomeContainer>
    </div>
  );
}

const MainHomeContainer = styled.div`
  padding: 4rem 6rem;
  position: relative;
  margin-left: ${(props) => (props.openAside ? "20%" : "")};
`;

const MenuButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;
