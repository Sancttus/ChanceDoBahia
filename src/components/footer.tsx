import React, { useState } from "react";

import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const Footer = () => {
  {
  }
  return (
    <Box
      sx={{
        height: "100%",
        background: "#006cb5",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Divider sx={{ bgcolor: "#FFF", marginBottom: "20px" }} />
      <Typography textAlign={"justify"} fontSize={"10px"}>
        Nosso algoritmo usa estatísticas para prever resultados de jogos de
        futebol. No entanto, não garantimos a precisão ou a confiabilidade
        dessas previsões, e elas não devem ser usadas como base única para tomar
        decisões de apostas ou qualquer outra forma de investimento financeiro.
      </Typography>
      <Typography textAlign={"justify"} fontSize={"10px"}>
        Copyright © 2023 Chances do Bahia
      </Typography>
    </Box>
  );
};

export default Footer;
