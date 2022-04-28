import React from "react";
import { Typography, Avatar } from "@mui/material";
import styled from "styled-components";

const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  justify-content: flex-start;
`;

const Column = styled.div`
  display: grid;
`;

export interface AvatarCardProps {
  user: any;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ user }) => {
  return (
    <Row>
      <Avatar sx={{ width: 70, height: 70 }}>{user?.name?.charAt(0)}</Avatar>
      <Column>
        <Typography variant="h4" component="span">
          {user?.name}
        </Typography>
        <Typography variant="subtitle1" component="span">
          {user?.email}
        </Typography>
      </Column>
    </Row>
  );
};

export default AvatarCard;
