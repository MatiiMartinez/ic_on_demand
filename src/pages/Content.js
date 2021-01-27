import React, { useState } from "react";
import styled from "styled-components";

import { contentMock } from "../mocks/contentMock";
import MenuContent from "../components/ui/molecules/MenuContent";
import ContentCard from "../components/ui/molecules/ContentCard";
import ContentCart from "../components/ui/molecules/ContentCart";
import ContentModal from "../components/ui/molecules/ContentModal";

export default function Content() {
    const [menu, setMenu] = useState("");
    const [isOpenModal, setIsOpenModal] = useState(false);

    function handleSetMenu(menu) {
        setMenu(menu);
    }

    function handleOpenModal() {
        setIsOpenModal(true);
    }

    function handleCloseModal() {
        setIsOpenModal(false);
    }

    return (
        <ContentContainer>
            <ContentModal
                isOpenModal={isOpenModal}
                handleCloseModal={handleCloseModal}
            />
            <MenuContent
                content={contentMock}
                menu={menu}
                handleSetMenu={handleSetMenu}
            />
            <DataContainer>
                {contentMock[0].content.map((item, index) => (
                    <ContentCard
                        item={item}
                        key={index}
                        handleOpenModal={handleOpenModal}
                    />
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
