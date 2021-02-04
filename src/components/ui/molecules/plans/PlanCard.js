import React from "react";
import styled from "styled-components";

import { Divider } from "@material-ui/core";
import ImageSvg from "../../../../assets/Clipboard.svg";

const PlanCard = () => {
    return (
        <PlanCardContainer>
            <ImageContainer>
                <Image src={ImageSvg} />
                <PlanTitle>SmallTeam</PlanTitle>
            </ImageContainer>
            <DataContainer>
                <PlanTitle>Información</PlanTitle>
                <Columns>
                    <Column>
                        <ColumnTitle>Totales</ColumnTitle>
                        <ColumnText>100</ColumnText>
                    </Column>
                    <Divider orientation="vertical" flexItem />
                    <Column>
                        <ColumnTitle>Disponibles</ColumnTitle>
                        <ColumnText>25</ColumnText>
                    </Column>
                    <Divider orientation="vertical" flexItem />
                    <Column>
                        <ColumnTitle>Usadas</ColumnTitle>
                        <ColumnText>75</ColumnText>
                    </Column>
                    <Divider orientation="vertical" flexItem />
                    <Column>
                        <ColumnTitle>Vencimiento</ColumnTitle>
                        <ColumnText>09/09/2021</ColumnText>
                    </Column>
                </Columns>
                <Actions>
                    <PlanTitle
                        style={{
                            textDecoration: "underline",
                            color: "#B31D15",
                        }}
                    >
                        Acción
                    </PlanTitle>
                    <PlanTitle
                        style={{
                            textDecoration: "underline",
                            color: "#B31D15",
                        }}
                    >
                        Acción
                    </PlanTitle>
                </Actions>
            </DataContainer>
        </PlanCardContainer>
    );
};

export default PlanCard;

const PlanCardContainer = styled.div`
    display: flex;
    column-gap: 2rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px #00000020;
    padding: 1rem;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 0.5rem;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px #00000020;
`;

const Image = styled.img`
    width: 50px;
`;

const PlanTitle = styled.h1`
    font-size: 0.8rem;
    font-weight: 700;
    margin: 0;
`;

const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

const Columns = styled.div`
    display: flex;
    column-gap: 1rem;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;

const ColumnTitle = styled.span`
    font-size: 0.8rem;
    font-weight: 300;
    text-transform: uppercase;
    margin: 0;
`;

const ColumnText = styled.span`
    font-size: 0.8rem;
    margin: 0;
`;

const Actions = styled.div`
    display: flex;
    column-gap: 1rem;
`;
