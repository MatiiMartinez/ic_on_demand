import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { StylesProvider, ThemeProvider } from "@material-ui/core";
import { theme } from "./assets/theme/MaterialTheme";

// PAGES
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import Groups from "./pages/Groups";
import Content from "./pages/Content";
import Analytics from "./pages/Analytics";
import Group from "./pages/Group";
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
              <Route exact path="/groups" component={Groups} />
              <Route exact path="/content" component={Content} />
              <Route exact path="/analytics" component={Analytics} />
              <Route exact path="/plans" component={Plans} />
              {/** COMPONENT ROUTES */}
              <Route exact path="/teams/:id" component={Group} />
            </Layout>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
