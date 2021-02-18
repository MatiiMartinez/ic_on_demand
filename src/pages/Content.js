import React from "react";
import styled from "styled-components";

import { contentMock } from "../mocks/contentMock";
import ContentCard from "../components/ui/molecules/content/ContentCard";
import ContentCart from "../components/ui/organisms/content/ContentCart";
import LayoutPage from "../components/layout/LayoutPage";
import Header from "../components/ui/organisms/content/Header";

export default function Content() {
  return (
    <LayoutPage header={<Header />}>
      <Grid>
        {contentMock[0].content[0].content.map((item, index) => (
          <ContentCard item={item} key={index} />
        ))}
        {contentMock[0].content[1].content.map((item, index) => (
          <ContentCard item={item} key={index} />
        ))}
      </Grid>
      <ContentCart />
    </LayoutPage>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;
