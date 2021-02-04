import React from "react";
import styled from "styled-components";

import PlanCard from "../components/ui/molecules/plans/PlanCard";

const Plans = () => {
    return (
        <PlansContainer>
            <PlanCard />
            <PlanCard />
        </PlansContainer>
    );
};

export default Plans;

const PlansContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
    grid-gap: 1rem;
`;
