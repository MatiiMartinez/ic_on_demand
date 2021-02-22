import React from "react";
import styled from "styled-components";

import LayoutPage from "../components/layout/LayoutPage";
import SimpleHeader from "../components/common/SimpleHeader";
import FormAdmin from "../components/account/FormAdmin";
import FormCompany from "../components/account/FormCompany";

const Account = () => {
    return (
        <LayoutPage header={<SimpleHeader title="Cuenta" />}>
            <AccountContainer>
                <FormCompany />
                <FormAdmin />
            </AccountContainer>
        </LayoutPage>
    );
};

export default Account;

const AccountContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;
