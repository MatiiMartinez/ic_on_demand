import React from "react";
import styled from "styled-components";

import { IconButton } from "@material-ui/core";
import {
  FavoriteBorderRounded,
  ScheduleRounded,
  ShareRounded,
} from "@material-ui/icons";

const ContentCard = (props) => {
  const { item } = props;

  console.log(item);

  return (
    <ContentCardContainer>
      <Title>{item.title}</Title>
      <Grid>
        {item.content.map((item, index) => (
          <MiniCard key={index}>
            <Category>Marketing</Category>
            <MiniCardImage src={item.image} alt="" />
            <MiniCardBody>
              <MiniCardBodyLeft>
                <MiniCardTitle>{item.title}</MiniCardTitle>
                <MiniCardBodyLeftBottom>
                  <MiniCardAutor>
                    Por <span>Leandro Suárez</span>
                  </MiniCardAutor>
                  <MiniCardTime>
                    <ScheduleRounded fontSize="small" /> {item.time}
                  </MiniCardTime>
                </MiniCardBodyLeftBottom>
              </MiniCardBodyLeft>
              <MiniCardBodyRight>
                <IconButton>
                  <FavoriteBorderRounded />
                </IconButton>
                <IconButton>
                  <ShareRounded />
                </IconButton>
              </MiniCardBodyRight>
            </MiniCardBody>
          </MiniCard>
        ))}
      </Grid>
    </ContentCardContainer>
  );
};

const ContentCardContainer = styled.div`
  height: max-content;
`;

const Category = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #cd1f17;
  border-radius: 5px;
  padding: 0.25rem 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 3rem 0 3rem -2rem;
  text-transform: capitalize;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 2rem;
`;

const MiniCard = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 5fr 5fr;
  background-color: #ffffff;
  box-shadow: 0 2px 4px #00000020;
  height: 300px;
  grid-column: span 4;
`;

const MiniCardImage = styled.div`
  background-size: cover;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
`;

const MiniCardBody = styled.div`
  display: grid;
  grid-template-columns: 9fr 1fr;
  padding: 1rem;
`;

const MiniCardBodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MiniCardTitle = styled.h2`
  font-size: 1rem;
  text-transform: capitalize;
  margin: 0;
  color: #cd1f17;
`;

const MiniCardBodyLeftBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const MiniCardAutor = styled.p`
  font-size: 0.9rem;
  font-weight: 300;

  span {
    color: #cd1f17;
  }
`;

const MiniCardTime = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 300;

  svg {
    margin-right: 0.5rem;
  }
`;

const MiniCardBodyRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;

  button {
    padding: 0;
  }

  button span svg {
    color: #cd1f17;
  }
`;

export default ContentCard;
