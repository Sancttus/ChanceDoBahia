import React, { useState } from "react";
import ArrowRed from "../assets/arrowred.png";
import ArrowBlue from "../assets/arrowblue.png";
import campeao from "../assets/trophy.png";
import libertadores from "../assets/libertadores.png";
import prelibertadores from "../assets/prelibertadoers.png";
import sulamericana from "../assets/sulamericana.png";
import meiodatabela from "../assets/meiodatabela.png";
import rebaixamento from "../assets/arrowred.png";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import campeonato from "../assets/Campeonato_Brasileiro_Série_A_logo.png";

import {
  Avatar,
  Box,
  Grid,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
interface Props {
  posicao: number;
  titulo: string;
}
const GeneralCompetitionComponent = ({ posicao, titulo }: Props) => {
  let icon = rebaixamento;

  return (
    <Paper
      sx={{
        display: "flex",
        minWidth: 355,
        width: 355,
        minHeight: 60,
        margin: 2,
      }}
    >
      <Grid
        container
        direction="row"
        sx={{
          alignContent: "center",
          justifyContent: "center",
          margin: "10px 8px",
        }}
      >
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            src={campeonato}
            variant="square"
            sx={{
              height: "60px",
              width: "60px",
            }}
          />
        </Grid>
        <Grid
          item
          sx={{
            minHeight: "100px",
            display: "flex",
            flexDirection: "column",
          }}
          xs={9}
        >
          <Stack direction="row" alignItems="center" justifyContent="center">
            <Typography
              fontFamily="Play"
              fontSize="16px"
              fontWeight={700}
              sx={{ borderBottom: "1px solid #e9e8e8", marginBottom: "8px" }}
            >
              {titulo}
            </Typography>
          </Stack>
          <Stack direction="column" gap={2}>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Typography
                sx={{ alignSelf: "center" }}
                fontFamily="OpenSans"
                fontSize="12px"
              >
                Posição Atual:
              </Typography>

              <Typography
                fontFamily="OpenSans"
                fontSize="14px"
                fontWeight={700}
                sx={{ marginLeft: "10px" }}
              >
                {posicao}ª Colocação
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GeneralCompetitionComponent;
