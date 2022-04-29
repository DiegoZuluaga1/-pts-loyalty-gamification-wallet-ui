import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import styled from "styled-components";

const FormContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  justify-content: center;
  padding: 5rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export interface LoginFormProps {
  setUser: (user: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setUser }) => {
  const [email, setEmail] = useState<String>("");
  const [name, setName] = useState<String>("");
  const [showSignIn, setShowSignIn] = useState<boolean>(false);

  const logIn = async (email: String) => {
    if (email) {
      const url = "https://ancient-inlet-28196.herokuapp.com/users/login";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { user } = await response.json();
      if (user) {
        setUser(user);
      }
    }
  };

  const signUp = async (name: String, email: String) => {
    if (email) {
      const url = "https://ancient-inlet-28196.herokuapp.com/users/";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ name, email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { user } = await response.json();
      if (user) {
        setUser(user);
      }
    }
  };

  const switchScreens = (showSignIn: boolean) => {
    setEmail("");
    setName("");
    setShowSignIn(!showSignIn);
  };

  return (
    <>
      {!showSignIn ? (
        <FormContainer>
          <Typography variant="h4" gutterBottom component="div">
            Please Log In to Continue:
          </Typography>
          <TextField
            value={email}
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Row>
            <Button variant="text" onClick={() => logIn(email)}>
              Submit
            </Button>
            <Button variant="text" onClick={() => switchScreens(showSignIn)}>
              Sign Up
            </Button>
          </Row>
        </FormContainer>
      ) : (
        <FormContainer>
          <Typography variant="h4" gutterBottom component="div">
            Sign Up to Continue:
          </Typography>
          <TextField
            value={name}
            label="Name"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            value={email}
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Row>
            <Button variant="text" onClick={() => signUp(name, email)}>
              Submit
            </Button>
            <Button variant="text" onClick={() => switchScreens(showSignIn)}>
              Log In
            </Button>
          </Row>
        </FormContainer>
      )}
    </>
  );
};

export default LoginForm;
