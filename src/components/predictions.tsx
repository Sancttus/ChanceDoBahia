import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MatchComponent from "./Match";
import { Divider } from "@mui/material";
import CompetitionComponent from "./Competition";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Predictions() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        background: "#f8f8ff",
        fontFamily: "Play",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Jogos" {...a11yProps(0)} />
          <Tab label="Competições" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MatchComponent
          date="14/04/2023"
          hour="18:30"
          score1={2}
          score2={0}
          sigla1="ECB"
          sigla2="RBR"
          prediction={86}
        />
        <Divider />
        <MatchComponent
          date="14/04/2023"
          hour="18:30"
          score1={2}
          score2={0}
          sigla1="ECB"
          sigla2="FLA"
          prediction={22}
        />
        <Divider />
        <MatchComponent
          date="14/04/2023"
          hour="18:30"
          score1={2}
          score2={0}
          sigla1="ECB"
          sigla2="FLU"
          prediction={2}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CompetitionComponent
          titulo="Campeonato Brasileiro Série -A"
          posicao={1}
        />
        <Divider />
        <CompetitionComponent
          titulo="Campeonato Brasileiro Série -A"
          posicao={4}
        />
        <Divider />

        <CompetitionComponent
          titulo="Campeonato Brasileiro Série -A"
          posicao={8}
        />
        <Divider />

        <CompetitionComponent
          titulo="Campeonato Brasileiro Série -A"
          posicao={15}
        />
        <Divider />

        <CompetitionComponent
          titulo="Campeonato Brasileiro Série -A"
          posicao={20}
        />
        <Divider />
      </TabPanel>
    </Box>
  );
}
