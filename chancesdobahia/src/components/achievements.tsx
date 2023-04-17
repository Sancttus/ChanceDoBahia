import React, { useState } from "react";
import ArrowRed from "../assets/arrowred.png";
import ArrowBlue from "../assets/arrowblue.png";
import campeonato from "../assets/Campeonato_Brasileiro_Série_A_logo_adobe_express.svg";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import { Avatar, Grid, Paper, Stack, Typography } from "@mui/material";

const AchievementsComponent = () => {
  const titulos = 2;

  return (
    <Paper
      sx={{
        display: "flex",
        minWidth: 375,
        minHeight: 160,
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
              Campeonato brasileiro - Série A
            </Typography>
          </Stack>
          <Stack direction="column" gap={2}>
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
                  2 Títulos{" "}
                </Typography>

                <Avatar sx={{ padding: "10px", background: "#006cb5" }}>
                  <EmojiEventsIcon />{" "}
                </Avatar>
              </Stack>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AchievementsComponent;
