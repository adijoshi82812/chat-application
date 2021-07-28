import React from "react";
import { Container, Heading, LoginFormConatiner, Input, LoginButton } from "./LoginFormStyled";

class LoginForm extends React.Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                username: "",
                password: ""
            }
        };
        
        this.handleChange.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault();
        const cred = this.state.credentials;
        cred[e.target.name] = e.target.value;
        this.setState({ credentials: cred });
    };

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
                            value={this.state.credentials.username}
                            placeholder="Enter your username"
                            onChange={this.handleChange}
                            required
                        />
                        <br />
                        <Input
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            placeholder="Enter your password"
                            onChange={this.handleChange}
                            required
                        />
                        <br/>
                        <LoginButton type="submit">
                            Stat Chatting
                        </LoginButton>
                    </form>
                </LoginFormConatiner>
            </Container>
        );
    }
}

export default LoginForm;