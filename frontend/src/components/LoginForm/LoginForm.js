import React from "react";
import { Container, Heading, LoginFormConatiner, Input, LoginButton } from "./LoginFormStyled";

class LoginForm extends React.Component {
    render() {
        return (
            <Container>
                <LoginFormConatiner>
                    <Heading>
                        Login Form
                    </Heading>
                    <form style={{ padding: "16px" }} autoComplete="off" method="POST">
                        <Input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            required
                        />
                        <br />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                        <br/>
                        <LoginButton>
                            Stat Chatting
                        </LoginButton>
                    </form>
                </LoginFormConatiner>
            </Container>
        );
    }
}

export default LoginForm;