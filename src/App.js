import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { StylesProvider, ThemeProvider } from "@material-ui/core";
import { theme } from "./assets/theme/MaterialTheme";

import AdenLoading from "./components/common/AdenLoading";

// PAGES
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import Admin from "./pages/Admin";
import Teams from "./pages/Teams";
import Content from "./pages/Content";
import Analytics from "./pages/Analytics";
import Team from "./components/templates/home/Team";
import Plans from "./pages/Plans";
import Account from "./pages/Account";

function App() {
    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Layout>
                                <Suspense fallback={<AdenLoading />}>
                                    {/** MAIN ROUTES */}
                                    <Route
                                        exact
                                        path="/account"
                                        component={Account}
                                    />
                                    <Route
                                        exact
                                        path="/admin"
                                        component={Admin}
                                    />
                                    <Route
                                        exact
                                        path="/teams"
                                        component={Teams}
                                    />
                                    <Route
                                        exact
                                        path="/content"
                                        component={Content}
                                    />
                                    <Route
                                        exact
                                        path="/analytics"
                                        component={Analytics}
                                    />
                                    <Route
                                        exact
                                        path="/plans"
                                        component={Plans}
                                    />
                                    {/** COMPONENT ROUTES */}
                                    <Route
                                        exact
                                        path="/teams/:id"
                                        component={Team}
                                    />
                                </Suspense>
                            </Layout>
                        </Switch>
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </StylesProvider>
    );
}

export default App;
