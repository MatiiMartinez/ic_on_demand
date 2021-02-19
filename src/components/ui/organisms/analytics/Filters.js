import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Filters = () => {
  return (
    <FiltersContainer>
      <FakeFormControl variant="outlined" size="small" color="primary">
        <InputLabel id="group-select">Grupo</InputLabel>
        <Select labelId="group-select" id="group-select" label="Grupo">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Marketing</MenuItem>
          <MenuItem value={20}>Diseño</MenuItem>
          <MenuItem value={30}>Gestión Comercial</MenuItem>
        </Select>
      </FakeFormControl>
    </FiltersContainer>
  );
};

export default Filters;

const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

const FakeFormControl = styled(FormControl)`
  min-width: 200px;
`;
