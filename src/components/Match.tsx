import React, { useState } from "react";
import ArrowRed from "../assets/arrowred.png";
import ArrowBlue from "../assets/arrowblue.png";
import logotimea from "../assets/red-bull-bragantino.svg";
import logotimeb from "../assets/bahia.svg";
import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";

interface Props {
  date: string;
  hour: string;
  sigla1: string;
  sigla2: string;
  score1: number;
  score2: number;
  prediction: number;
}
const MatchComponent = ({
  date,
  hour,
  sigla1,
  sigla2,
  score1,
  score2,
  prediction,
}: Props) => {
  return (
    <Paper
      sx={{
        display: "flex",
        maxWidth: "320px",
        minHeight: "140px",
        minWidth: "320px",
      }}
    >
      <Grid
        container
        direction="column"
        sx={{
          alignContent: "center",
          justifyContent: "center",
          margin: "10px 8px",
          gap: 1,
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography fontFamily="OpenSans" component="div" fontSize="14px">
            {date} - {hour}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          sx={{ minWidth: "280px" }}
        >
          <Typography fontFamily="OpenSans" fontWeight={700}>
            {sigla1}
          </Typography>
          <Avatar
            alt={sigla1}
            src={logotimeb}
            variant="square"
            sx={{ height: 48 }}
          />
          X
          <Avatar alt="EBC" src={logotimea} variant="square" />
          <Typography fontFamily="OpenSans" fontWeight={700}>
            {sigla2}
          </Typography>
        </Stack>
        <Typography
          sx={{ alignSelf: "center" }}
          fontFamily="OpenSans"
          fontSize="13px"
        >
          Chances de triunfo
        </Typography>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "#eeeeee",
            padding: "12px",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            sx={{ width: "40%" }}
          >
            <Typography fontFamily="OpenSans" fontWeight={700}>
              {prediction}%{" "}
            </Typography>{" "}
            <Avatar sx={{ background: "#d7edfc" }}>
              {prediction > 50 ? (
                <img src={ArrowBlue} height="20px"></img>
              ) : (
                <img src={ArrowRed} height="20px"></img>
              )}
            </Avatar>
          </Stack>
        </Paper>
      </Grid>
    </Paper>
  );
};

export default MatchComponent;
