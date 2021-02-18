import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuLink = (props) => {
  const { to, label, icon } = props;

  return (
    <FakeMenuLink to={to}>
      {icon}
      <Label>{label}</Label>
    </FakeMenuLink>
  );
};

export default MenuLink;

const FakeMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 1rem;

  svg {
    color: #ababab;
  }

  div {
    width: 24px;
    height: 24px;
    font-size: 1rem;
  }

  :hover {
    background-color: #f3f6f9;
  }
`;

const Label = styled.span``;
