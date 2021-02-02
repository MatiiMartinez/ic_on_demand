import React, { useState } from "react";
import styled from "styled-components";

import { Button, TextField } from "@material-ui/core";
import { GroupRounded, PersonRounded } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";

import Logo from "../../../../assets/Bantrab.jpg";
import TitleInfo from "../../atoms/TitleInfo";

import { personMock } from "../../../../mocks/personMock";
import { groupMock } from "../../../../mocks/groupMock";

const CartContainer = (props) => {
    const { items } = props;

    const [typeCheck, setTypeCheck] = useState(true);

    function setPerson() {
        setTypeCheck(true);
    }

    function setGroup() {
        setTypeCheck(false);
    }

    return (
        <CartContainerCollapse>
            <Column>
                <TitleInfo label="Payment Information" />
                <OptionsContainer>
                    <OptionsRow>
                        <Button
                            variant="outlined"
                            color={`${typeCheck ? "primary" : "secondary"}`}
                            onClick={setPerson}
                            startIcon={<PersonRounded />}
                        >
                            Persona
                        </Button>
                        <Button
                            variant="outlined"
                            color={`${!typeCheck ? "primary" : "secondary"}`}
                            onClick={setGroup}
                            startIcon={<GroupRounded />}
                        >
                            Equipo
                        </Button>
                    </OptionsRow>
                    <OptionsRow>
                        <Autocomplete
                            options={personMock}
                            getOptionLabel={(option) => option.email}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Personas"
                                    variant="outlined"
                                    size="small"
                                />
                            )}
                        />
                    </OptionsRow>
                </OptionsContainer>
            </Column>
            <Column>
                <TitleInfo label="Order Summary" />
                <LogoContainer>
                    <img src={Logo} alt="logo" width="200px" />
                </LogoContainer>
            </Column>
        </CartContainerCollapse>
    );
};

export default CartContainer;

const CartContainerCollapse = styled.div`
    display: grid;
    grid-template-columns: 8fr 4fr;
    padding: 1rem;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;

const OptionsContainer = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

const OptionsRow = styled.div`
    display: flex;
    column-gap: 1rem;
`;

const LogoContainer = styled.div`
    padding: 0.5rem;
    background-color: #b31d15;
`;
