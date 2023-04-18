import { Avatar, Grid, Paper, Stack, Typography } from "@mui/material";

interface LastGameProps {
  competicao: string;
  date: string;
  hours: string;
  brasão1: any;
  brasão2: any;
  sigla1: string;
  sigla2: string;
  placar1?: number;
  placar2?: number;
}

const LastGame = ({
  date,
  hours,
  sigla1,
  sigla2,
  placar1,
  placar2,
  brasão1,
  brasão2,
  competicao,
}: LastGameProps) => {
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          maxWidth: "320px",
          minHeight: "140px",
          minWidth: "320px",
          marginBottom: "20px",
        }}
      >
        <Grid
          container
          direction="column"
          sx={{
            alignContent: "center",
            justifyContent: "center",
            margin: "10px 8px",
            gap: 1,
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="center">
            <Typography fontFamily="OpenSans" component="div" fontSize="12px">
              Competição: {competicao}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="center">
            <Typography fontFamily="OpenSans" component="div" fontSize="12px">
              {date} - {hours}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            sx={{ minWidth: "280px" }}
          >
            <Typography fontFamily="OpenSans">{sigla1}</Typography>
            <Avatar
              alt={sigla1}
              src={brasão1}
              variant="square"
              sx={{ height: 48 }}
            />
            <h3>{placar1}</h3>X<h3>{placar2}</h3>
            <Avatar alt={sigla2} src={brasão2} variant="square" />
            <Typography fontFamily="OpenSans">{sigla2}</Typography>
          </Stack>
          <Typography
            sx={{ alignSelf: "center" }}
            fontFamily="OpenSans"
            fontSize="11px"
          ></Typography>
        </Grid>
      </Paper>
    </>
  );
};

export default LastGame;
