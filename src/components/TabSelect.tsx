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
import LastGame from "./Lastgame";
import jacuipense from "../assets/jacuipense.png";
import camboriu from "../assets/camboriu.png";
import fluminense from "../assets/fluminense.png";
import CRB from "../assets/CRB.png";
import bahia from "../assets/bahia.svg";
import vasco from "../assets/vasco.png";
import santos from "../assets/santos.png";
import curitiba from "../assets/curitiba.png";
import bragantino from "../assets/red-bull-bragantino.svg";
import botafogo from "../assets/botafogo.png";
import voltaRedonda from "../assets/volta_redonda.png";
import bglogo from "../assets/logobgg.png";
import Predictions from "./predictions";
import GeneralCompetitionComponent from "./generalCompetition";

// Icons
import GroupsIcon from "@mui/icons-material/Groups";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsIcon from "@mui/icons-material/Sports";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import { Card } from "@mui/material";
import MenuProvider from "../context/global/MenuProvider";
import MenuContext from "../context/global/MenuContext";
import { useContext } from "react";
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
  let { aba, setAba }: any = useContext(MenuContext);
  const [value, setValue] = React.useState(aba);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    setValue(aba);
  }, [aba]);
  return (
    <MenuProvider>
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
          backgroundImage: `url(${bglogo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
          backgroundBlendMode: "color-burn",
          backgroundSize: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: 320, sm: 480 },
            color: "black",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab
              sx={{ fontFamily: "Play" }}
              label="Chances"
              {...a11yProps(0)}
              icon={<SwapVerticalCircleIcon />}
            />

            <Tab
              sx={{ fontFamily: "Play", justifyContent: "center" }}
              label="Partidas"
              {...a11yProps(1)}
              icon={<SportsSoccerIcon />}
            />
            <Tab
              sx={{ fontFamily: "Play" }}
              label="Competições"
              {...a11yProps(2)}
              icon={<SportsIcon />}
            />
            <Tab
              sx={{ fontFamily: "Play" }}
              icon={<GroupsIcon />}
              label="Elenco"
              {...a11yProps(3)}
            />

            <Tab
              icon={<EmojiEventsIcon />}
              sx={{ fontFamily: "Play" }}
              label="Conquistas"
              {...a11yProps(4)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Predictions />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                background: "#006cb5",
                borderRadius: "20px",
                width: "350px",
                margin: "40px",
              }}
            >
              <Typography
                fontFamily={"OpenSans"}
                fontWeight={700}
                sx={{
                  color: "white",
                  margin: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Próximos Jogos
              </Typography>
            </Box>
            <LastGame
              competicao="Campeonato Brasileiro"
              date="23-04-2023"
              hours="20:00"
              brasão1={bahia}
              brasão2={botafogo}
              sigla1="ECB"
              sigla2="BTF"
            />
            <LastGame
              competicao="Capa do Brasil"
              date="27-04-2023"
              hours="19:00"
              brasão1={bahia}
              brasão2={voltaRedonda}
              sigla1="ECB"
              sigla2="VRD"
            />
            <LastGame
              competicao="Campeonato Brasileiro"
              date="27-04-2023"
              hours="19:00"
              brasão1={vasco}
              brasão2={bahia}
              sigla1="VAS"
              sigla2="ECB"
            />
            <LastGame
              competicao="Campeonato Brasileiro"
              date="27-04-2023"
              hours="19:00"
              brasão1={bahia}
              brasão2={curitiba}
              sigla1="ECB"
              sigla2="CTB"
            />
            <LastGame
              competicao="Campeonato Brasileiro"
              date="27-04-2023"
              hours="19:00"
              brasão1={santos}
              brasão2={bahia}
              sigla1="ECS"
              sigla2="ECB"
            />
            <Divider />
            <Box
              sx={{
                background: "#006cb5",
                borderRadius: "20px",
                width: "350px",
                margin: "40px",
              }}
            >
              <Typography
                fontFamily={"OpenSans"}
                fontWeight={700}
                sx={{
                  color: "white",
                  margin: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                últimos Jogos
              </Typography>
            </Box>
            <Divider />
            <LastGame
              competicao="Campeonato Baiano"
              date="15-04-2023"
              hours="18:30"
              brasão1={bragantino}
              brasão2={bahia}
              sigla1="RRB"
              sigla2="ECB"
              placar1={2}
              placar2={1}
            />
            <LastGame
              competicao="Campeonato Baiano"
              date="02-04-2023"
              hours="18:00"
              brasão1={bahia}
              brasão2={jacuipense}
              sigla1="ECB"
              sigla2="JAC"
              placar1={3}
              placar2={0}
            />
            <LastGame
              competicao="Campeonato Baiano"
              date="22-03-2023"
              hours="21:30"
              brasão1={bahia}
              brasão2={CRB}
              sigla1="ECB"
              sigla2="CRB"
              placar1={3}
              placar2={0}
            />
            <LastGame
              competicao="Campeonato Baiano"
              date="14-03-2023"
              hours="21:30"
              brasão1={fluminense}
              brasão2={bahia}
              sigla1="ECB"
              sigla2="FLU"
              placar1={1}
              placar2={1}
            />
            <LastGame
              competicao="Campeonato Baiano"
              date="22-03-2023"
              hours="21:30"
              brasão1={CRB}
              brasão2={bahia}
              sigla1="CRB"
              sigla2="ECB"
              placar1={1}
              placar2={4}
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box
            sx={{
              gap: "2",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <GeneralCompetitionComponent
              titulo="Campeonato Brasileiro Série -A"
              posicao={18}
            />

            <Divider />
            <GeneralCompetitionComponent
              titulo="Campeonato Baiano"
              posicao={2}
            />

            <Divider />
            <GeneralCompetitionComponent titulo="Copa do Brasil" posicao={1} />

            <Divider />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <EnhancedTable />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Box>
            <AchievementsComponent />
          </Box>
        </TabPanel>
      </Box>
    </MenuProvider>
  );
}
