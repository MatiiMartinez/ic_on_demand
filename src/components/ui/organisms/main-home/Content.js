import React, { useState } from "react";
import styled from "styled-components";

import { contentMock } from "../../../../mocks/contentMock";
import MenuContent from "../../molecules/MenuContent";
import ContentCard from "../../molecules/ContentCard";
import ContentCart from "../../molecules/ContentCart";
import TitleHeader from "../../atoms/TitleHeader";

export default function Content() {
    const [menu, setMenu] = useState("");

    function handleSetMenu(menu) {
        setMenu(menu);
    }

    return (
        <ContentContainer>
            <TitleHeader
                title="Contenido"
                subtitle="Accede a nuestra red educativa internacional"
            />
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

const DataContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.5rem;
`;
