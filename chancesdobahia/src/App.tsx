import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BasicTabs from "./components/TabSelect";
import { Box } from "@mui/material";

function App() {
  const [showElenco, setShowElenco] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <BasicTabs />
    </div>
  );
}

export default App;
