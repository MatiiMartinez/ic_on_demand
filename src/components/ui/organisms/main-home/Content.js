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
  color: #6c757d;
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin: 0;
`;

const SubTitle = styled.p`
  color: #6c757d;
  font-size: 0.75rem;
  margin: 0.75rem 0 2rem;
`;

const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.5rem;
`;
