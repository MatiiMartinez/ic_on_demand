import React from "react";
import styled from "styled-components";

import LayoutPage from "../components/layout/LayoutPage";
import Filters from "../components/ui/organisms/analytics/Filters";
import Header from "../components/ui/organisms/analytics/Header";
import AnalyticFour from "../mocks/analytics/AnalyticFour";
import AnalyticOne from "../mocks/analytics/AnalyticOne";
import AnalyticThree from "../mocks/analytics/AnalyticThree";
import AnalyticTwo from "../mocks/analytics/AnalyticTwo";

const Analytics = () => {
    return (
        <LayoutPage
            header={
                <Header>
                    <Filters />
                </Header>
            }
        >
            <GridAnalytics>
                <AnalyticTwo />
                <AnalyticThree />
                <AnalyticOne />
                <AnalyticFour />
            </GridAnalytics>
        </LayoutPage>
    );
};

export default Analytics;

const GridAnalytics = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
`;
