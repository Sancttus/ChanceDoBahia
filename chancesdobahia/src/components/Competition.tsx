import React, { useState } from "react";
import "./navbar.css";
import ArrowRed from "../assets/arrowred.png";
import ArrowBlue from "../assets/arrowblue.png";
import logotimea from "../assets/red-bull-bragantino.svg";
import logotimeb from "../assets/avai.png";
import { Avatar, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

const CompetitionComponent = () => {
  const percent = 100;
  const data = "15/04/2023";
  const hora = "18:30";
  const siglatimea = "ECB";
  const siglatimeb = "RRB";
  // const logotimea = "../assets/avai.png";
  // const logotimeb = "../assets/red-bull-bragantino.svg";

  return (
    <Paper
      sx={{
        display: "flex",
        // maxWidth: "320px",
        maxHeight: "120px",
        minWidth: "820px",
      }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        sx={{
          alignContent: "center",
          justifyContent: "center",
          margin: "10px 8px",
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography fontFamily="OpenSans" component="div" fontSize="12px">
            Campeonato brasileiro -serie A
          </Typography>
        </Stack>
        <Divider />

        {/* <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          sx={{ minWidth: "280px" }}
        >
          <Typography fontFamily="OpenSans">{siglatimea}</Typography>
          <Avatar alt="RRB" src={logotimeb} />X
          <Avatar alt="EBC" src={logotimea} />
          <Typography fontFamily="OpenSans">{siglatimeb}</Typography>
        </Stack> */}
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography>Posição Atual:</Typography>
          <Typography>Primeiro colocado</Typography>
        </Stack>
        <Typography
          sx={{ alignSelf: "center" }}
          fontFamily="OpenSans"
          fontSize="10px"
        >
          Chances de triunfo
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography fontFamily="OpenSans">{percent}% </Typography>{" "}
          {percent > 50 ? (
            <img src={ArrowBlue} height="20px"></img>
          ) : (
            <img src={ArrowRed} height="20px"></img>
          )}
        </Stack>
      </Grid>
    </Paper>
  );
};

export default CompetitionComponent;
