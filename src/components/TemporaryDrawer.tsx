import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
// icons
import GroupsIcon from "@mui/icons-material/Groups";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsIcon from "@mui/icons-material/Sports";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import MenuContext from "../context/global/MenuContext";
import { useContext } from "react";
import MenuProvider from "../context/global/MenuProvider";
type Anchor = "top" | "left" | "bottom" | "right";

const data = [
  {
    id: 0,
    name: "Chances",
    icon: <SwapVerticalCircleIcon />,
  },
  { id: 1, name: "Partidas", icon: <SportsSoccerIcon /> },
  { id: 2, name: "Competições", icon: <SportsIcon /> },
  { id: 3, name: "Elenco", icon: <GroupsIcon /> },
  { id: 4, name: "Conquistas", icon: <EmojiEventsIcon /> },
];
export default function TemporaryDrawer() {
  const { aba, setAba }: any = useContext(MenuContext);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
  const handleClick = (index: number) => {
    setAba(index);
  };
  const list = (anchor: Anchor) => (
    <MenuProvider>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Box
          display="flex"
          justifyContent={"space-between"}
          sx={{ padding: "20px" }}
        >
          <Typography fontWeight={700}>Menu</Typography>
          <CloseIcon sx={{ cursor: "pointer" }} />
        </Box>
        <List>
          {data.map((item, index) => (
            <ListItem
              sx={{ cursor: "pointer" }}
              key={index}
              onClick={() => handleClick(item.id)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </MenuProvider>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ color: "white", fontSize: 35 }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
