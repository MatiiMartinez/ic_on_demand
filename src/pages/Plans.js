import React from "react";
import styled from "styled-components";
import SimpleHeader from "../components/common/SimpleHeader";
import LayoutPage from "../components/layout/LayoutPage";

import PlanCard from "../components/plans/PlanCard";

const Plans = () => {
    return (
        <LayoutPage header={<SimpleHeader title="Licencias" />}>
            <PlansContainer>
                <PlanCard />
            </PlansContainer>
        </LayoutPage>
    );
};

export default Plans;

const PlansContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
    grid-gap: 1rem;
`;
