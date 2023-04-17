import React, { useState } from "react";
import ArrowRed from "../assets/arrowred.png";
import ArrowBlue from "../assets/arrowblue.png";
import campeao from "../assets/arrowblue.png";
import libertadores from "../assets/libertadores.png";
import prelibertadores from "../assets/prelibertadoers.png";
import sulamericana from "../assets/sulamericana.png";
import meiodatabela from "../assets/meiodatabela.png";
import rebaixamento from "../assets/arrowred.png";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import campeonato from "../assets/Campeonato_Brasileiro_Série_A_logo_adobe_express.svg";

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
  return (
    <Paper
      sx={{
        display: "flex",
        minWidth: 375,
        width: 400,
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
            sx={{ height: "70px", width: "70px" }}
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
              fontFamily="OpenSans"
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
              fontSize="10px"
            >
              Previsão:
            </Typography>
            {posicao === 1 && (
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
                  padding="0px 20px"
                >
                  <Typography fontFamily="OpenSans" fontWeight={700}>
                    Campeão!{" "}
                  </Typography>

                  <Avatar sx={{ padding: "10px", background: "#006cb5" }}>
                    <EmojiEventsIcon />{" "}
                  </Avatar>
                </Stack>
              </Paper>
            )}
            {posicao < 5 && posicao != 1 && (
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
                  padding="0px 40px"
                >
                  <Typography fontFamily="OpenSans" fontWeight={700}>
                    {" "}
                    Libertadores{" "}
                  </Typography>

                  <Avatar
                    src={libertadores}
                    sx={{ padding: "10px", background: "#006cb5" }}
                  />
                </Stack>
              </Paper>
            )}
            {posicao < 7 && posicao > 4 && (
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
                    Pré-Libertadores{" "}
                  </Typography>

                  <Avatar
                    src={prelibertadores}
                    sx={{ padding: "10px", background: "#b9cfffeb" }}
                  />
                </Stack>
              </Paper>
            )}
            {posicao < 13 && posicao > 6 && (
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
                    Sulamericana{" "}
                  </Typography>

                  <Avatar
                    src={sulamericana}
                    sx={{ padding: "10px", background: "#b9cfffeb" }}
                  />
                </Stack>
              </Paper>
            )}
            {posicao <= 16 && posicao > 12 && (
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
                    Meio da Tabela{" "}
                  </Typography>

                  <Avatar
                    src={meiodatabela}
                    sx={{ padding: "10px", background: "#b9cfffeb" }}
                  />
                </Stack>
              </Paper>
            )}

            {posicao > 16 && (
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
                    Rebaixamento{" "}
                  </Typography>

                  <Avatar
                    src={rebaixamento}
                    sx={{ padding: "10px", background: "#006cb5" }}
                  />
                </Stack>
              </Paper>
            )}

            <Stack direction="row" alignItems="center" justifyContent="center">
              <Typography
                sx={{ alignSelf: "center" }}
                fontFamily="OpenSans"
                fontSize="10px"
              >
                Posição Atual:
              </Typography>
              <Typography fontFamily="OpenSans" fontSize="10px">
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
