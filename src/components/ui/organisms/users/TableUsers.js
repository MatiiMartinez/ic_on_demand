import React, { useState } from "react";
import {
    IconButton,
    Menu,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";

import { teamMock } from "../../../../mocks/teamMock";
import styled from "styled-components";
import { MoreVertRounded } from "@material-ui/icons";

const columns = [
    { label: "NOMBRE" },
    { label: "CORREO ELECTRÓNICO" },
    { label: "REGISTRO" },
    { label: "ESTADO" },
];

const TableUsers = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    function handleOpen(e) {
        setAnchorEl(e.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <TableContainer style={{ border: "1px solid #e0e0e0" }}>
            <Table stickyHeader aria-label="sticky-table">
                {/** Head */}
                <TableHead>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableCell
                                key={index}
                                align="left"
                                style={{ fontWeight: "700" }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                        <TableCell align="right" style={{ fontWeight: "700" }}>
                            OPCIONES
                        </TableCell>
                    </TableRow>
                </TableHead>
                {/** Body */}
                <TableBody>
                    {teamMock[0].team.map((team, index) => (
                        <TableRowStyle key={index}>
                            <TableCell>{team.name}</TableCell>
                            <TableCell>{team.email}</TableCell>
                            <TableCell>{team.register}</TableCell>
                            <TableCell>
                                <Estado estado={team.estado}>
                                    {team.estado}
                                </Estado>
                            </TableCell>
                            <TableCell align="right">
                                <IconButton
                                    aria-label="more"
                                    aria-controls="long-menu"
                                    aria-haspopup="true"
                                    onClick={handleOpen}
                                    size="small"
                                >
                                    <MoreVertRounded fontSize="small" />
                                </IconButton>
                                <Menu
                                    id="long-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: {
                                            width: "20ch",
                                            boxShadow:
                                                "0 0 5px -2px rgba(0,0,0,0.2)",
                                        },
                                    }}
                                >
                                    <MenuItem>Borrar</MenuItem>
                                    <MenuItem>Editar</MenuItem>
                                    <MenuItem>Opción</MenuItem>
                                </Menu>
                            </TableCell>
                        </TableRowStyle>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableUsers;

const TableRowStyle = styled(TableRow)`
    background-color: #ffffff;
`;

const Estado = styled.span`
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 900;
    color: #ffffff;
    background-color: ${(props) =>
        props.estado === "activo"
            ? "#28a745"
            : props.estado === "inactivo"
            ? "#dc3545"
            : "#ffc107"};
    width: max-content;
    border-radius: 5px;
`;
