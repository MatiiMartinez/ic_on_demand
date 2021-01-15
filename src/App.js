import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { CircularProgress } from "@material-ui/core";
import AdenLogoRed from "./assets/aden-logo-red.png";

import AsideState from "./context/asideContext/asideState";

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense
          fallback={
            <AdenLoadingContainer>
              <img src={AdenLogoRed} alt="logo" />
              <CircularProgress style={{ color: "#b6241d" }} />
            </AdenLoadingContainer>
          }
        >
          <Switch>
            <Route exact path="/" component={Login} />
            <AsideState>
              <Route path="/home" component={Home} />
            </AsideState>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

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
