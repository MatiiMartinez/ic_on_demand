import React, { useState } from "react";

import asideContext from "./asideContext";

const AsideState = (props) => {
  const [openAside, setOpenAside] = useState(true);

  function handleOpenAside() {
    setOpenAside(true);
  }

  function handleCloseAside() {
    setOpenAside(false);
  }

  return (
    <asideContext.Provider
      value={{ openAside, handleOpenAside, handleCloseAside }}
    >
      {props.children}
    </asideContext.Provider>
  );
};

export default AsideState;
