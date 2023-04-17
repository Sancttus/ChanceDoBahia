import React, { useState } from "react";
import "./navbar.css";
import TwitterIcon from "../assets/Icon-Twitter.svg";
import SpotifyIcon from "../assets/Icon-Spotify.svg";
import InstagramIcon from "../assets/Icon-Instagram.svg";
import FacebookIcon from "../assets/Icon-Facebook.svg";
import YouTubeIcon from "../assets/Icon-Youtube.svg";
import LinkedInIcon from "../assets/Icon-Linkedin.svg";
import logo from "../assets/logo2.png";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import TemporaryDrawer from "./TemporaryDrawer";

const Footer = () => {
  {
  }
  return (
    <Box sx={{ height: "100%", background: "#006cb5", padding: "20px" }}>
      {/* <Box>
        <Grid container xs={8}>
          <Grid xs={8}>
            <Stack direction="column">
              <Typography
                textAlign={"justify"}
                fontSize={"10px"}
                sx={{ color: "#FFF", paddingTop: "20px" }}
              >
                <b>Contatos</b>: +55 (71) 3333 - 3333
              </Typography>
            </Stack>
          </Grid>
          <Grid container xs={3}>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Typography
                sx={{ color: "#FFF", fontSize: "10px", paddingTop: "20px" }}
              >
                Rede
                <br /> Sociais
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ paddingTop: "20px" }}>
              <Stack direction="row" spacing={2}>
                <a href="https://www.instagram.com/vitainvestimentos/">
                  <img src={InstagramIcon}></img>
                </a>
                <a href="https://web.facebook.com/vitainvestimentos?_rdc=1&_rdr">
                  <img src={FacebookIcon}></img>
                </a>
                <a href="https://www.youtube.com/@vitainvestimentos499">
                  <img src={YouTubeIcon}></img>
                </a>
              </Stack>
              <br />
              <Stack direction="row" spacing={2}>
                <a href="https://www.linkedin.com/company/vitainvestimentos/mycompany/">
                  <img src={LinkedInIcon}></img>
                </a>
                <a href="https://open.spotify.com/show/4mEUhfLqrXacgw1qWiywee">
                  <img src={SpotifyIcon}></img>
                </a>
                <a href="https://twitter.com/vitainves">
                  <img src={TwitterIcon}></img>
                </a>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Box> */}
      <Divider
        variant="middle"
        sx={{ bgcolor: "#FFF", marginBottom: "20px" }}
      />
      <Typography textAlign={"justify"} fontSize={"10px"}>
        Nosso algoritmo usa estatísticas para prever resultados de jogos de
        futebol. No entanto, não garantimos a precisão ou a confiabilidade
        dessas previsões, e elas não devem ser usadas como base única para tomar
        decisões de apostas ou qualquer outra forma de investimento financeiro.
      </Typography>
    </Box>
  );
};

export default Footer;
