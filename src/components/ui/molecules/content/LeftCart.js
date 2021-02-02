import React, { useState } from "react";
import styled from "styled-components";

import { Button, Chip, TextField } from "@material-ui/core";
import { GroupRounded, PersonRounded } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";

import TitleInfo from "../../atoms/TitleInfo";

import { personMock } from "../../../../mocks/personMock";
import { groupMock } from "../../../../mocks/groupMock";

const LeftCart = (props) => {
    const { items } = props;

    const [typeCheck, setTypeCheck] = useState(true);
    const [persons, setPersons] = useState([]);

    function setPerson() {
        setTypeCheck(true);
    }

    function setGroup() {
        setTypeCheck(false);
    }

    function addPerson(e, newValue) {
        setPersons([...persons, newValue]);
    }

    function deletePerson(email) {
        const newList = persons.filter((x) => x.email !== email);
        setPersons(newList);
    }

    return (
        <>
            <TitleInfo label="Payment Information" />
            <OptionsContainer>
                {/** User type */}
                <Subtitle>Tipo Usuario</Subtitle>
                <OptionsRow>
                    <Button
                        variant="outlined"
                        color={`${typeCheck ? "primary" : "secondary"}`}
                        onClick={setPerson}
                        startIcon={<PersonRounded />}
                    >
                        Personas
                    </Button>
                    <Button
                        variant="outlined"
                        color={`${!typeCheck ? "primary" : "secondary"}`}
                        onClick={setGroup}
                        startIcon={<GroupRounded />}
                    >
                        Grupo
                    </Button>
                </OptionsRow>
                {/** Select */}
                <Subtitle>{typeCheck ? "Personas" : "Grupo"}</Subtitle>
                <OptionsRow>
                    {typeCheck ? (
                        <Autocomplete
                            onChange={addPerson}
                            disableClearable
                            options={personMock}
                            getOptionLabel={(option) => option.email}
                            style={{ width: "100%" }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Persona"
                                    variant="outlined"
                                    size="small"
                                />
                            )}
                        />
                    ) : (
                        <Autocomplete
                            options={groupMock}
                            getOptionLabel={(option) => option.name}
                            style={{ width: "100%" }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Grupo"
                                    variant="outlined"
                                    size="small"
                                />
                            )}
                        />
                    )}
                </OptionsRow>
                <div>
                    {typeCheck
                        ? persons.length !== 0 &&
                          persons.map((person, index) => (
                              <Chip
                                  label={person.email}
                                  key={index}
                                  onDelete={() => deletePerson(person.email)}
                              />
                          ))
                        : ""}
                </div>
                <Button variant="contained" color="primary" size="medium">
                    Siguiente
                </Button>
            </OptionsContainer>
        </>
    );
};

export default LeftCart;

const OptionsContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    background-color: #ffffff;
    border-radius: 8px;
`;

const Subtitle = styled.h2`
    font-size: 0.9rem;
    color: #00000075;
    margin: 0;
`;

const OptionsRow = styled.div`
    display: flex;
    column-gap: 1rem;
`;
