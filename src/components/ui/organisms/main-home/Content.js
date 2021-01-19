import React, { useState } from "react";
import styled from "styled-components";

import { contentMock } from "../../../../mocks/contentMock";
import MenuContent from "../../molecules/MenuContent";
import ContentCard from "../../molecules/ContentCard";
import ContentCart from "../../molecules/ContentCart";

export default function Content() {
  const [menu, setMenu] = useState("");

  function handleSetMenu(menu) {
    setMenu(menu);
  }

  return (
    <ContentContainer>
      <Title>Contenido</Title>
      <SubTitle>Accede a nuestra red educativa internacional</SubTitle>
      <MenuContent
        content={contentMock}
        menu={menu}
        handleSetMenu={handleSetMenu}
      />
      <DataContainer>
        {contentMock[0].content.map((item, index) => (
          <ContentCard item={item} key={index} />
        ))}
      </DataContainer>
      <ContentCart content={contentMock} />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  position: relative;
`;

const Title = styled.h1`
  color: #b31d15;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1rem;
  margin: 0;
`;

const SubTitle = styled.p`
  color: #616161;
  font-size: 1rem;
  margin: 1rem 0;
`;

const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.5rem;
`;
