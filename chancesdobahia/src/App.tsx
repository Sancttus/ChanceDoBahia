import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BasicTabs from "./components/TabSelect";
import { Box } from "@mui/material";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BasicTabs />
      <Footer />
    </div>
  );
}

export default App;
