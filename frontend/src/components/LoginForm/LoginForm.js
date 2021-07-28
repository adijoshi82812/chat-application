import React from "react";
import { Container, Heading, LoginFormConatiner, Input, LoginButton } from "./LoginFormStyled";

import axios from "axios";

import swal from "sweetalert";

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
        this.handleLogin.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault();
        const cred = this.state.credentials;
        cred[e.target.name] = e.target.value;
        this.setState({ credentials: cred });
    };

    handleLogin = async () => {
        const authObject = {
            "Project-ID": "48222ef5-1267-49cb-93e4-989f8aa5bc03",
            "User-Name": this.state.credentials.username,
            "User-Secret": this.state.credentials.password
        };

        try{
            await axios("https://api.chatengine.io/chats", { headers: authObject });

            localStorage.setItem("username", this.state.credentials.username);
            localStorage.setItem("password", this.state.credentials.password);

            window.location.reload();
        } catch(err){
            swal({ title: "Error", text: `${err}`, icon: "error" })
        }
    };

    render() {
        return (
            <Container>
                <LoginFormConatiner>
                    <Heading>
                        Login Form
                    </Heading>
                    <form
                        style={{ padding: "16px" }} 
                        autoComplete="off" 
                        method="POST"
                        onSubmit={(e) => {
                            e.preventDefault();
                            this.handleLogin();
                        }}
                    >
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