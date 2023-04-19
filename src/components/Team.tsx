import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Avatar } from "@mui/material";

interface Elenco {
  Posicao: string;
  Nome: string;
  Numero: number;
  Titular: string;
  Avatar: any;
}
const elenco: Array<Elenco> = [
  {
    Posicao: "Goleiro",
    Nome: "Tiago Gomes",
    Numero: 12,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Goleiro",
    Nome: "Marcos Felipe",
    Numero: 22,
    Titular: "Titular",
    Avatar: "",
  },
  {
    Posicao: "Goleiro",
    Nome: "Mateus Claus",
    Numero: 77,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Goleiro",
    Nome: "Danilo Fernandes",
    Numero: 1,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Lateral",
    Nome: "Cicinho",
    Numero: 40,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Lateral",
    Nome: "André",
    Numero: 13,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Lateral",
    Nome: "Ryan",
    Numero: 66,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Lateral",
    Nome: "Jhoanner Chaves",
    Numero: 6,
    Titular: "Titular",
    Avatar: "",
  },
  {
    Posicao: "Lateral",
    Nome: "Matheus Bahia",
    Numero: 79,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Zagueiro",
    Nome: "David Duarte",
    Numero: 33,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Zagueiro",
    Nome: "Kanu",
    Numero: 4,
    Titular: "Titular",
    Avatar: "",
  },
  {
    Posicao: "Zagueiro",
    Nome: "Marcos Vitor",
    Numero: 44,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Zagueiro",
    Nome: "Raul Gustavo",
    Numero: 34,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Zagueiro",
    Nome: "Gabriel Xavier",
    Numero: 3,
    Titular: "Titular",
    Avatar: "",
  },
  {
    Posicao: "Meio-Campista",
    Nome: "Thaciano",
    Numero: 28,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Meio-Campista",
    Nome: "Yago Felipe",
    Numero: 20,
    Titular: "Titular",
    Avatar: "",
  },
  {
    Posicao: "Meio-Campista",
    Nome: "Cauly",
    Numero: 8,
    Titular: "Titular",
    Avatar: "",
  },
  {
    Posicao: "Meio-Campista",
    Nome: "Diego Rosa",
    Numero: 17,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Meio-Campista",
    Nome: "Ricardo Goulart",
    Numero: 16,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Meio-Campista",
    Nome: "Patrick Verhom",
    Numero: 23,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Meio-Campista",
    Nome: "Acevedo",
    Numero: 26,
    Titular: "Titular",
    Avatar: "",
  },
  {
    Posicao: "Meio-Campista",
    Nome: "Rezende",
    Numero: 5,
    Titular: "Titular",
    Avatar: "",
  },
  {
    Posicao: "Meio-Campista",
    Nome: "Daniel",
    Numero: 10,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Meio-Campista",
    Nome: "Lucas Mugni",
    Numero: 19,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Atacante",
    Nome: "Ademir",
    Numero: 7,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Atacante",
    Nome: "Arthur Sales",
    Numero: 14,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Atacante",
    Nome: "Kayky",
    Numero: 37,
    Titular: "Titular",
    Avatar: "",
  },
  {
    Posicao: "Atacante",
    Nome: "Everton",
    Numero: 18,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Atacante",
    Nome: "Biel",
    Numero: 11,
    Titular: "Reserva",
    Avatar: "",
  },
  {
    Posicao: "Atacante",
    Nome: "Everaldo",
    Numero: 9,
    Titular: "Titular",
    Avatar: "",
  },
  {
    Posicao: "Atacante",
    Nome: "Vitor Jacaré",
    Numero: 29,
    Titular: "Titular",
    Avatar: "",
  },
  {
    Posicao: "Atacante",
    Nome: "Kennedy",
    Numero: 71,
    Titular: "Reserva",
    Avatar: "",
  },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Elenco;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "Numero",
    numeric: false,
    disablePadding: true,
    label: "Número",
  },
  {
    id: "Avatar",
    numeric: false,
    disablePadding: false,
    label: "Foto",
  },
  {
    id: "Nome",
    numeric: true,
    disablePadding: false,
    label: "Nome",
  },
  {
    id: "Posicao",
    numeric: true,
    disablePadding: false,
    label: "Posição",
  },
  {
    id: "Titular",
    numeric: true,
    disablePadding: false,
    label: "Titular",
  },
];

const DEFAULT_ORDER = "asc";
const DEFAULT_ORDER_BY = "Numero";
const DEFAULT_ROWS_PER_PAGE = 5;

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    newOrderBy: keyof Elenco
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (newOrderBy: keyof Elenco) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, newOrderBy);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        color="inherit"
        variant="subtitle1"
        component="div"
      >
        Elenco
      </Typography>
    </Toolbar>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>(DEFAULT_ORDER);
  const [orderBy, setOrderBy] = React.useState<keyof Elenco>("Numero");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [visibleRows, setVisibleRows] = React.useState<Elenco[] | null>(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
  const [paddingHeight, setPaddingHeight] = React.useState(0);

  React.useEffect(() => {
    let rowsOnMount = stableSort(
      elenco,
      getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY)
    );
    rowsOnMount = rowsOnMount.slice(
      0 * DEFAULT_ROWS_PER_PAGE,
      0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE
    );

    setVisibleRows(rowsOnMount);
  }, []);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Elenco
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = elenco.map((n) => n.Nome);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer sx={{ padding: "10px" }}>
          <Table
            sx={{ minWidth: 375 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={elenco.length}
            />
            <TableBody>
              {elenco
                ? elenco.map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.Nome)}
                        role="checkbox"
                        tabIndex={-1}
                        key={row.Numero}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.Numero}
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          <Avatar>{}</Avatar>
                        </TableCell>

                        <TableCell align="right">{row.Nome}</TableCell>
                        <TableCell align="right">{row.Posicao}</TableCell>
                        <TableCell align="right">{row.Titular}</TableCell>
                      </TableRow>
                    );
                  })
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
