import React, { useState } from "react";
import styled from "styled-components";

import { contentMock } from "../mocks/contentMock";
import MenuContent from "../components/ui/molecules/MenuContent";
import ContentCard from "../components/ui/molecules/content/ContentCard";
import ContentCart from "../components/ui/molecules/content/ContentCart";

export default function Content() {
    const [menu, setMenu] = useState("");

    function handleSetMenu(menu) {
        setMenu(menu);
    }

    return (
        <ContentContainer>
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
