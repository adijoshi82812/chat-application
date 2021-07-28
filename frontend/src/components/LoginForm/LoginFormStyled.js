import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginFormConatiner = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    max-width: 400px;
    width: 90%;
`;

export const Heading = styled.h1`
    text-align: center;
    margin: 16px;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    outline: none;
    padding: 8px 16px;
    border-radius: 5px;
    text-align: center;
    transition: border 0.4s ease-in;

    &:hover, &:focus{
        border: 1px solid rgba(0, 0, 0, 0.7);
    }
`;

export const LoginButton = styled.button`
    border: none;
    display: block;
    width: 100%;
    text-align: center;
    padding: 12px 16px;
    background-image: linear-gradient(to right, #2193b0 25%, #6dd5ed 50%, #6dd5ed 75%, #2193b0 100%);
    background-size: 200% auto;
    background-position: center left;
    color: white;
    border-radius: 10px;
    font-size: 16px;
    outline: none;
    font-weight: bold;
    transition: all 0.4s ease-in;

    &:hover, &:focus{
        background-position: center right;
    }
`;