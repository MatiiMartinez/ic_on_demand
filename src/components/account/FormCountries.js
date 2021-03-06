import React from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import styled from "styled-components";

export default function FormCountries(props) {
    const { label } = props;

    return (
        <FakeFormControl variant="outlined" size="small" color="secondary">
            <InputLabel id="demo-simple-select-outlined-label">
                {label}
            </InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label={label}
            >
                <MenuItem value={1}>Argentina</MenuItem>
                <MenuItem value={2}>Pánama</MenuItem>
                <MenuItem value={3}>Estados Unidos</MenuItem>
            </Select>
        </FakeFormControl>
    );
}

const FakeFormControl = styled(FormControl)`
    width: 50%;
`;
