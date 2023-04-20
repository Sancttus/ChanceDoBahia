import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BasicTabs from "./components/TabSelect";
import { Box } from "@mui/material";
import Footer from "./components/footer";
import MenuProvider from "./context/global/MenuProvider";

function App() {
  return (
    <MenuProvider>
      <div className="App">
        <Navbar />
        <BasicTabs />
        <Footer />
      </div>
    </MenuProvider>
  );
}

export default App;
