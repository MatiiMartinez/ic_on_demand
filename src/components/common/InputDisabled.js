import React, { useState } from "react";

import { TextField } from "@material-ui/core";
import styled from "styled-components";
import ButtonAsLink from "./ButtonAsLink";

export default function InputDisabled(props) {
  const { id, label } = props;

  const [disabled, setDisabled] = useState(true);

  function handleDisabled(e) {
    e.preventDefault();
    setDisabled(!disabled);
  }

  return (
    <InputDisabledContainer>
      <TextField
        id={id}
        label={label}
        variant="outlined"
        color="secondary"
        size="small"
        disabled={disabled}
      />
      <ButtonAsLink onClick={handleDisabled}>Cambiar</ButtonAsLink>
    </InputDisabledContainer>
  );
}

const InputDisabledContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    align-self: flex-end;
    margin-top: 0.25rem;
  }
`;
