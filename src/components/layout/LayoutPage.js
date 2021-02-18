import React from "react";
import styled from "styled-components";

const LayoutPage = (props) => {
  return (
    <LayoutPageContainer>
      {props.header}
      <LayoutBody>{props.children}</LayoutBody>
    </LayoutPageContainer>
  );
};

export default LayoutPage;

const LayoutPageContainer = styled.div``;

const LayoutBody = styled.div`
  padding: 2rem;
`;
