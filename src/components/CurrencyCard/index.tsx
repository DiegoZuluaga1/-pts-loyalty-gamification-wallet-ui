import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";

const Column = styled.div`
  display: grid;
`;

const CurrencyRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 3px 4px 7px lightgrey;
  padding: 1rem;
`;

const ImageContainer = styled.img`
  height: 5rem;
  width: 5rem;
`;

export interface CurrencyCardProps {
  imageUrl: string;
  currencyName: string;
  currencyAmount: number;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  imageUrl,
  currencyName,
  currencyAmount,
}) => {
  return (
    <CurrencyRow>
      <ImageContainer src={imageUrl} />
      <Column>
        <Typography variant="subtitle1" component="span">
          {currencyName}:
        </Typography>
        <Typography variant="subtitle1" component="span">
          {currencyAmount}
        </Typography>
      </Column>
    </CurrencyRow>
  );
};

export default CurrencyCard;
