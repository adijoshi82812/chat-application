import React from "react";
import { MainContainer } from "./AppStyled";

import LoginForm from "./components/LoginForm/LoginForm";

export default function App() {
  return (
    <MainContainer>
      <LoginForm />
    </MainContainer>
  );
}