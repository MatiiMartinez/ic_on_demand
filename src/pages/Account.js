import React from "react";
import styled from "styled-components";
import LayoutPage from "../components/layout/LayoutPage";

import TitleInfo from "../components/ui/atoms/TitleInfo";
import FormAdmin from "../components/ui/organisms/account/FormAdmin";
import FormCompany from "../components/ui/organisms/account/FormCompany";

const Account = () => {
  return (
    <LayoutPage>
      <AccountContainer>
        <HeaderWrapper>
          <TitleInfo label="Empresa" />
        </HeaderWrapper>
        <FormCompany />
        <HeaderWrapper>
          <TitleInfo label="Administrador" />
        </HeaderWrapper>
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

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;
