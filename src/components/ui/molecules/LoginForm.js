import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";

export default function LoginForm() {
  return (
    <LoginFormContainer>
      <TextField
        placeholder="Usuario"
        type="email"
        variant="outlined"
        color="secondary"
        style={{ backgroundColor: "#ffffff", borderRadius: "5px" }}
      />
      <TextField
        placeholder="Contraseña"
        type="password"
        variant="outlined"
        color="secondary"
        style={{ backgroundColor: "#ffffff", borderRadius: "5px" }}
      />
      <LoginButton>Ingresar</LoginButton>
      <ForgotPassword to="/">Forgot password?</ForgotPassword>
    </LoginFormContainer>
  );
}

const LoginFormContainer = styled.form`
  display: grid;
  row-gap: 2rem;
  width: 100%;
`;

const LoginButton = styled.button`
  background-color: #b6241d;
  color: #ffffff;
  padding: 1rem 0;
  cursor: pointer;
`;

const ForgotPassword = styled(Link)`
  margin-left: auto;
  text-decoration: none;
  font-weight: 700;
  color: #b6241d;
`;
