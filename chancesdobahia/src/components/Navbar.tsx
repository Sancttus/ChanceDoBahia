import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo2.png";
import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import TemporaryDrawer from "./TemporaryDrawer";

const Navbar = () => {
  {
  }
  return (
    <AppBar position="static" sx={{ background: "#006cb5" }}>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <TemporaryDrawer />
          <Typography
            fontFamily="OpenSans"
            fontWeight="700"
            justifySelf={"center"}
            alignSelf={"center"}
          >
            Chances do Bahia
          </Typography>
          <img src={logo} height="40px"></img>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
