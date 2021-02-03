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
    const [personValue, setPersonValue] = useState(null);
    const [persons, setPersons] = useState([]);
    const [groupValue, setGroupValue] = useState(null);
    const [groups, setGroups] = useState([]);

    function setTypePerson() {
        setTypeCheck(true);
    }

    function setTypeGroup() {
        setTypeCheck(false);
    }

    function handleChangePerson(e, newValue) {
        setPersonValue(newValue);
    }

    function handleChangeGroup(e, newValue) {
        setGroupValue(newValue);
    }

    function addPerson() {
        setPersons([...persons, personValue]);
    }

    function addGroup() {
        setGroups([...groups, groupValue]);
    }

    function deletePerson(email) {
        const newList = persons.filter((x) => x.email !== email);
        setPersons(newList);
    }

    function deleteGroup(name) {
        const newList = groups.filter((x) => x.name !== name);
        setGroups(newList);
    }

    return (
        <>
            <TitleInfo label="Payment Information" group />
            <OptionsContainer>
                {/** User type */}
                <Subtitle>Tipo Usuario</Subtitle>
                <OptionsRow>
                    <Button
                        variant="outlined"
                        color={`${typeCheck ? "primary" : "secondary"}`}
                        onClick={setTypePerson}
                        startIcon={<PersonRounded />}
                    >
                        Personas
                    </Button>
                    <Button
                        variant="outlined"
                        color={`${!typeCheck ? "primary" : "secondary"}`}
                        onClick={setTypeGroup}
                        startIcon={<GroupRounded />}
                    >
                        Grupo
                    </Button>
                </OptionsRow>
                {/** Select */}
                <Subtitle>{typeCheck ? "Personas" : "Grupo"}</Subtitle>
                <OptionsRow>
                    {typeCheck ? (
                        <>
                            <Autocomplete
                                onChange={handleChangePerson}
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
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={addPerson}
                            >
                                Agregar
                            </Button>
                        </>
                    ) : (
                        <>
                            <Autocomplete
                                onChange={handleChangeGroup}
                                disableClearable
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
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={addGroup}
                            >
                                Agregar
                            </Button>
                        </>
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
                        : groups.length !== 0 &&
                          groups.map((group, index) => (
                              <Chip
                                  label={group.name}
                                  key={index}
                                  onDelete={() => deleteGroup(group.name)}
                              />
                          ))}
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
