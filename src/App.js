import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";
import { theme } from "./assets/theme/MaterialTheme";

import AdenLoading from "./components/common/AdenLoading";

// PAGES
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
const Company = lazy(() => import("./pages/Company"));
const Admin = lazy(() => import("./pages/Admin"));
const Teams = lazy(() => import("./pages/Teams"));
const Content = lazy(() => import("./pages/Content"));
const Analytics = lazy(() => import("./pages/Analytics"));

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Layout>
                            <Suspense fallback={<AdenLoading />}>
                                <Route
                                    exact
                                    path="/company"
                                    component={Company}
                                />
                                <Route exact path="/admin" component={Admin} />
                                <Route exact path="/teams" component={Teams} />
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
                            </Suspense>
                        </Layout>
                    </Switch>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
