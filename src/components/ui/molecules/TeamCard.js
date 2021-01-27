import React from "react";
import styled from "styled-components";

import Button from "../atoms/Button";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { GroupOutlined } from "@material-ui/icons";

export default function TeamCard(props) {
    const { title, color } = props;

    return (
        <TeamCardContainer>
            <Header color={color}>
                <GroupOutlined fontSize="small" htmlColor="#ffffff" />
                <Title>{title}</Title>
            </Header>
            <Body>
                <AvatarGroup max={4}>
                    <Avatar alt=""></Avatar>
                    <Avatar alt=""></Avatar>
                    <Avatar alt=""></Avatar>
                    <Avatar alt=""></Avatar>
                    <Avatar alt=""></Avatar>
                    <Avatar alt=""></Avatar>
                    <Avatar alt=""></Avatar>
                    <Avatar alt=""></Avatar>
                </AvatarGroup>
                <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    style={{ width: "100%" }}
                >
                    Ir a Configuración
                </Button>
            </Body>
        </TeamCardContainer>
    );
}

const TeamCardContainer = styled.div`
    background-color: #ffffff;
    box-shadow: 0 2px 4px #00000020;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    border-radius: 0.25rem;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.color};
    border-radius: 0.25rem 0.25rem 0 0;
    padding: 1rem 1rem;
`;

const Title = styled.h2`
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    color: #ffffff;
`;

const Body = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;
