import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MatchComponent from "./Match";
import CompetitionComponent from "./Competition";
import AchievementsComponent from "./achievements";
import EnhancedTable from "./Team";
import Divider from "@mui/material/Divider";

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

export default function BasicTabs() {
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
        minHeight: "667px",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} sx={{ fontFamily: "Play" }}>
          <Tab
            sx={{ fontFamily: "Play", justifyContent: "center" }}
            label="Jogos"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontFamily: "Play" }}
            label="Competições"
            {...a11yProps(1)}
          />
          <Tab sx={{ fontFamily: "Play" }} label="Elenco" {...a11yProps(2)} />
          <Tab
            sx={{ fontFamily: "Play" }}
            label="Conquistas"
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MatchComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            gap: "2",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CompetitionComponent
            titulo="Campeonato Brasileiro Série -A"
            posicao={1}
          />
          <Divider />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EnhancedTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box>
          <AchievementsComponent />
        </Box>
      </TabPanel>
    </Box>
  );
}
