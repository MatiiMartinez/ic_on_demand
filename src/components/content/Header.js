import React from "react";
import styled from "styled-components";

import { Search } from "@material-ui/icons";
import { Divider, FormControl, MenuItem, Select } from "@material-ui/core";

const Header = () => {
    return (
        <HeaderContainer>
            <SearchWrapper>
                <Search htmlColor="#ababab" />
                <InputSearch type="search" placeholder="Buscar" />
                <FakeDivider orientation="vertical" flexItem="true" />
                <FakeFormControl>
                    <Select
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        style={{ border: "none !important" }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Liderazgo y Desarrollo</MenuItem>
                        <MenuItem value={20}>Desarrollo Gerencial</MenuItem>
                        <MenuItem value={30}>Finanzas</MenuItem>
                    </Select>
                </FakeFormControl>
            </SearchWrapper>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fbfbfb;
    height: 100px;
`;

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    background-color: #ffffff;
    padding: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const InputSearch = styled.input`
    border: none;
    outline: none;
    min-width: 300px;

    ::placeholder {
        color: #ababab;
    }
`;

const FakeDivider = styled(Divider)`
    width: 2px;
    border-radius: 5px;
`;

const FakeFormControl = styled(FormControl)`
    min-width: 200px;

    div:before,
    div:after,
    div:hover,
    div:focus {
        border-bottom: none !important;
        background-color: transparent;
    }
`;
