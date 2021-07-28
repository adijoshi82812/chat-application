import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border: 1px solid red;
    display: block;
    width: 100%;
    margin: 20px 0;
    padding: 12px 16px;
    background-color: white;
    border-radius: 20px;
    color: red;

    &:hover{
        cursor: pointer;
    }
`;

export default function Logout(){
    return(
        <Button
            onClick={() => {
                localStorage.removeItem("username");
                localStorage.removeItem("password");

                window.location.reload();
            }}
        >
            Logout
        </Button>
    );
}