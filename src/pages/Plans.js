import React from "react";
import styled from "styled-components";
import LayoutPage from "../components/layout/LayoutPage";

import PlanCard from "../components/ui/molecules/plans/PlanCard";
import Header from "../components/ui/organisms/plans/Header";

const Plans = () => {
  return (
    <LayoutPage header={<Header />}>
      <PlansContainer>
        <PlanCard />
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
