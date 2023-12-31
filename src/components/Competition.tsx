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
const CompetitionComponent = ({ posicao, titulo }: Props) => {
  let situacao = "Rebaixamento";
  let icon = rebaixamento;
  if (posicao === 1) {
    situacao = "Campeão";
    icon = campeao;
  }
  if (posicao < 5 && posicao != 1) {
    situacao = "Libertadores";
    icon = libertadores;
  }
  if (posicao < 7 && posicao > 4) {
    situacao = "Pré-Libertadores";
    icon = prelibertadores;
  }
  if (posicao < 13 && posicao > 6) {
    situacao = "Sulamericana";
    icon = sulamericana;
  }
  if (posicao <= 16 && posicao > 12) {
    situacao = "Meio da Tabela";
    icon = meiodatabela;
  }
  if (posicao > 16) {
    situacao = "Rebaixamento";
    icon = rebaixamento;
  }
  return (
    <Paper
      sx={{
        display: "flex",
        minWidth: 355,
        width: 355,
        minHeight: 160,
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
            <Typography
              sx={{ alignSelf: "center" }}
              fontFamily="OpenSans"
              fontSize="12px"
              fontWeight={700}
            >
              Previsão: {posicao}ª Colocação
            </Typography>
            <Paper
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                height: "70px",
                maxWidth: "80%",
                background: "#eeeeee",
                marginLeft: "24px",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-around"
                padding="0px 30px"
              >
                <Typography fontFamily="OpenSans" fontWeight={700}>
                  {" "}
                  {situacao}{" "}
                </Typography>

                <Avatar
                  src={icon}
                  sx={{
                    padding: "10px",
                    background: "#006cb5",

                    height: "20px",
                    width: "20px",
                    marginLeft: "10px",
                  }}
                />
              </Stack>
            </Paper>

            <Stack direction="row" alignItems="center" justifyContent="center">
              <Typography
                sx={{ alignSelf: "center" }}
                fontFamily="OpenSans"
                fontSize="12px"
              >
                Posição Atual:
              </Typography>
              <Typography fontFamily="OpenSans" fontSize="14px">
                1ª Colocação
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CompetitionComponent;
