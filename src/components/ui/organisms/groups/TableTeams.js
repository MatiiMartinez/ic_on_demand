import React from "react";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { teamMock } from "../../../../mocks/teamMock";
import { AvatarGroup } from "@material-ui/lab";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const columns = [
  { label: "NOMBRE" },
  { label: "USUARIOS" },
  { label: "ÚLTIMA ACTUALIZACIÓN" },
];

export default function TableTeams() {
  let history = useHistory();

  return (
    <TableContainer style={{ border: "1px solid #e0e0e0" }}>
      <Table stickyHeader aria-label="sticky-table">
        {/** Head */}
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index} align="left" style={{ fontWeight: "700" }}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {/** Body */}
        <TableBody>
          {teamMock.map((team, index) => (
            <TableRowStyle
              onClick={() => history.push(`/teams/${team.name}`)}
              key={index}
            >
              <TableCell>{team.name}</TableCell>
              <TableCell>
                <AvatarGroup max={3}>
                  {team.team.map((user, index) => (
                    <Avatar alt={user.email} key={index} />
                  ))}
                </AvatarGroup>
              </TableCell>
              <TableCell>{team.date}</TableCell>
            </TableRowStyle>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const TableRowStyle = styled(TableRow)`
  cursor: pointer;
  background-color: #ffffff;

  :hover {
    background-color: #f4f4f4;
  }
`;
