import React from "react";
import { MainContainer } from "./AppStyled";

import LoginForm from "./components/LoginForm/LoginForm";
import ChatApp from "./components/ChatApp";

export default function App() {
  const [logged_in] = React.useState(localStorage.getItem("username") ? true : false);

  if (!logged_in) {
    return (
      <MainContainer>
        <LoginForm />
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <ChatApp />
    </MainContainer>
  );
}