import React, { useState } from "react";
import "./App.css";
import { Typography } from "@mui/material";
import styled from "styled-components";
import LoginForm from "./components/LoginForm";
import currencyA from "./assets/images/CurrencyA.png";
import currencyB from "./assets/images/CurrencyB.png";
import currencyC from "./assets/images/CurrencyC.png";
import AvatarCard from "./components/AvatarCard";
import CurrencyCard from "./components/CurrencyCard";
import GameCard from "./components/GameCard";
import GameA from "./assets/images/GameA.png";
import GameB from "./assets/images/GameB.png";

const Container = styled.div`
  padding: 5rem;
  max-width: 1200px;
  margin: auto;
`;

const SummaryContainer = styled.div`
  display: grid;
  grid-gap: 3rem;
`;

const CurrencyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  justify-content: space-evenly;
  grid-gap: 1rem;
`;

const GameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
`;

function App() {
  const [user, setUser] = useState<any>();

  console.log(JSON.stringify(user));

  return (
    <Container>
      {!user ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SummaryContainer>
          <AvatarCard user={user} />
          <div>
            <Typography variant="h4" component="span">
              Currencies:
            </Typography>
            <CurrencyContainer>
              <CurrencyCard
                imageUrl={currencyA}
                currencyName={"Currency A"}
                currencyAmount={user?.points?.currencyA || 1000}
              />

              <CurrencyCard
                imageUrl={currencyB}
                currencyName={"Currency B"}
                currencyAmount={user?.points?.currencyB || 2000}
              />

              <CurrencyCard
                imageUrl={currencyC}
                currencyName={"Currency C"}
                currencyAmount={user?.points?.currencyC || 4500}
              />
            </CurrencyContainer>
          </div>
          <div>
            <Typography variant="h4" component="span">
              Games Available:
            </Typography>
            <GameContainer>
              <a href={`https://incredible-daifuku-590c5b.netlify.app/?session=${user._id}`}>
                <GameCard
                  iconUrl={GameA}
                  name={"Blackjack"}
                  currencyAmount={1000}
                  link=""
                />
              </a>
              
              <a href={`https://inspiring-cobbler-81eda0.netlify.app/?session=${user._id}`}>
                <GameCard
                  iconUrl={GameB}
                  name={"Solitaire"}
                  currencyAmount={4000}
                  link=""
                />
              </a>
              
            </GameContainer>
          </div>
        </SummaryContainer>
      )}
    </Container>
  );
}

export default App;
