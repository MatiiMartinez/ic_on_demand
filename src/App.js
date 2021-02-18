import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { StylesProvider, ThemeProvider } from "@material-ui/core";
import { theme } from "./assets/theme/MaterialTheme";

// PAGES
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import Teams from "./pages/Teams";
import Content from "./pages/Content";
import Analytics from "./pages/Analytics";
import Team from "./pages/Team";
import Plans from "./pages/Plans";
import Account from "./pages/Account";

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Layout>
              {/** MAIN ROUTES */}
              <Route exact path="/account" component={Account} />
              <Route exact path="/teams" component={Teams} />
              <Route exact path="/content" component={Content} />
              <Route exact path="/analytics" component={Analytics} />
              <Route exact path="/plans" component={Plans} />
              {/** COMPONENT ROUTES */}
              <Route exact path="/teams/:id" component={Team} />
            </Layout>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
