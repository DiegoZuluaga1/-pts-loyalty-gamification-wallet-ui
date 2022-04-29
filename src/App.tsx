import React, { useEffect, useState } from "react";
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
  const [lpCurrencies, setLpCurrencies] = useState<any[]>([]);
  const [gameCurrencies, setGameCurrencies] = useState<any[]>([]);

  useEffect(() => {
    if (user) {
      let lps: any[] = [];
      let games: any[] = [];

      user.balances.forEach((balanceItem: any) => {
        const { target, balance, targetType } = balanceItem;

        if (targetType === "Game") {
          const { name, currencyName } = target;
          games.push({
            name,
            currencyName,
            balance,
          });
        } else {
          const { name } = target;
          lps.push({
            name,
            balance,
          });
        }
      });

      setLpCurrencies(lps);
      setGameCurrencies(games);
    }
  }, [user]);

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
              {lpCurrencies.map((entry) => {
                const { name, balance } = entry;
                return (
                  <CurrencyCard
                    imageUrl={currencyC}
                    currencyName={name}
                    currencyAmount={balance || 1000}
                  />
                );
              })}
            </CurrencyContainer>
          </div>
          <div>
            <Typography variant="h4" component="span">
              Games Available:
            </Typography>
            <GameContainer>
              <a
                href={`https://incredible-daifuku-590c5b.netlify.app/?session=${user._id}`}
              >
                <GameCard
                  iconUrl={GameA}
                  name={"Blackjack"}
                  currencyAmount={gameCurrencies[1]?.balance}
                  link=""
                />
              </a>

              <a
                href={`https://inspiring-cobbler-81eda0.netlify.app/?session=${user._id}`}
              >
                <GameCard
                  iconUrl={GameB}
                  name={"Solitaire"}
                  currencyAmount={gameCurrencies[0]?.balance}
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
