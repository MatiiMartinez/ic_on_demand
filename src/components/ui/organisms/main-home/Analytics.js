import React from "react";
import styled from "styled-components";

import AnalyticFour from "../../../../mocks/analytics/AnalyticFour";
import AnalyticOne from "../../../../mocks/analytics/AnalyticOne";
import AnalyticThree from "../../../../mocks/analytics/AnalyticThree";
import AnalyticTwo from "../../../../mocks/analytics/AnalyticTwo";
import TitleHeader from "../../atoms/TitleHeader";

const Analytics = () => {
    return (
        <div>
            <TitleHeader title="Analítica" subtitle="Analytics" />
            <GridAnalytics>
                <AnalyticTwo />
                <AnalyticThree />
                <AnalyticOne />
                <AnalyticFour />
            </GridAnalytics>
        </div>
    );
};

const GridAnalytics = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 2rem;
`;

export default Analytics;
