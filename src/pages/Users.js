import React from "react";
import styled from "styled-components";
import LayoutPage from "../components/layout/LayoutPage";

import Header from "../components/ui/organisms/users/Header";
import LicensesWidget from "../components/ui/organisms/users/LicensesWidget";
import Options from "../components/ui/organisms/users/Options";
import TableUsers from "../components/ui/organisms/users/TableUsers";

const Users = () => {
    return (
        <LayoutPage header={<Header />}>
            <UsersContainer>
                <WidgetWrapper>
                    <LicensesWidget
                        bgColor="#28a745"
                        text="Licencias disponibles"
                        number="15"
                    />
                    <LicensesWidget
                        bgColor="#dc3545"
                        text="Licencias usadas"
                        number="45"
                    />
                </WidgetWrapper>
                <TableWrapper>
                    <Options />
                    <TableUsers />
                </TableWrapper>
            </UsersContainer>
        </LayoutPage>
    );
};

export default Users;

const UsersContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 1rem;
    background-color: #ffffff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const WidgetWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    column-gap: 2rem;
`;
