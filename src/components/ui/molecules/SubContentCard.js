import React, { useState } from "react";
import styled from "styled-components";

import { Checkbox, FormControlLabel } from "@material-ui/core";
import {
  CheckCircleRounded,
  RadioButtonUncheckedRounded,
} from "@material-ui/icons";

export default function SubContentCard(props) {
  const { item } = props;

  const [check, setCheck] = useState(false);

  function handleChange(e) {
    setCheck(e.target.checked);
  }

  return (
    <SubContentCardContainer>
      <CardCheck>
        <FormControlLabel
          control={
            <Checkbox
              icon={<RadioButtonUncheckedRounded fontSize="large" />}
              checkedIcon={<CheckCircleRounded fontSize="large" />}
              name="check"
              checked={check}
              onChange={handleChange}
            />
          }
        />
      </CardCheck>
      <CardBody check={check}>
        <Title>{item.title}</Title>
        <Grid>
          {item.content.map((item, index) => (
            <SpanContainer key={index}>
              <Span>{item.title}</Span>
              <Span>{item.time}</Span>
            </SpanContainer>
          ))}
        </Grid>
      </CardBody>
    </SubContentCardContainer>
  );
}

const SubContentCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
`;

const CardBody = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 4px #00000020;
  border-radius: 5px;
  padding: 1rem;
  color: ${(props) => (props.check ? "#f50057" : "#000000")};
`;

const CardCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

const SpanContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
  font-size: 1rem;
  font-weight: 300;
`;
