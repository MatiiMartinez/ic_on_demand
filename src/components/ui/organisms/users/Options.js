import React from "react";
import styled from "styled-components";

import { Button, TextField } from "@material-ui/core";

const Options = () => {
    return (
        <OptionsContainer>
            <ButtonsWrapper>
                <Button variant="contained" size="small">
                    Exportar Excel
                </Button>
            </ButtonsWrapper>
            <SearchWrapper>
                <TextField
                    variant="outlined"
                    color="primary"
                    size="small"
                    placeholder="Buscar usuario"
                />
            </SearchWrapper>
        </OptionsContainer>
    );
};

export default Options;

const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ButtonsWrapper = styled.div``;

const SearchWrapper = styled.div``;
