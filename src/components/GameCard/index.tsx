import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";

const Column = styled.div`
  display: grid;
`;

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 3px 4px 7px lightgrey;
  padding: 1rem;
`;

const ImageContainer = styled.img`
  height: 10rem;
  width: 10rem;
`;

export interface GameCardProps {
  iconUrl: string;
  name: string;
  currencyAmount: number;
  link: string;
}

const GameCard: React.FC<GameCardProps> = ({
  iconUrl,
  name,
  currencyAmount,
  link,
}) => {
  return (
    <Container>
      <ImageContainer src={iconUrl} />
      <Column>
        <Typography variant="h5" component="span">
          {name}
        </Typography>
        <Typography variant="subtitle1" component="span">
          Points: {currencyAmount}
        </Typography>
        <a href={link}>Game link</a>
      </Column>
    </Container>
  );
};

export default GameCard;
