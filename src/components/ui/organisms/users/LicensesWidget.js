import React from "react";
import styled from "styled-components";

const LicensesWidget = (props) => {
    const { bgColor, number, text, info } = props;

    return (
        <LicensesWidgetContainer bgColor={bgColor}>
            <TextWrapper>
                <Text>{text}</Text>
                <Info>{info}</Info>
            </TextWrapper>
            <Number>{number}</Number>
        </LicensesWidgetContainer>
    );
};

export default LicensesWidget;

const LicensesWidgetContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    background-color: ${(props) => props.bgColor};
    color: #ffffff;
    padding: 1rem;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Text = styled.h2``;

const Info = styled.p``;

const Number = styled.span``;
