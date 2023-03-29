import * as React from "react";
import '../styles/components/table.scss'

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { fromLowerToUpperCase } from "../utils/function";

const columns = [
    {  
        id: "firstName",
        label: "First Name",
        align: "center",
        minWidth: 100 
    },
    {
        id: "lastName",
        label: "Last Name",
        minWidth: 100,
        align: "center",
        format: (value) => fromLowerToUpperCase(value),
    },
    { 
        id: "startDate", 
        label: "Start Date", 
        align: "center", 
        minWidth: 100 
    },
    {
      id: "departement",
      label: "departement",
      minWidth: 100,
      align: "center",
    },
    {   
        id: "birthDate", 
        label: "Birth Date", 
        minWidth: 100, 
        align: "center" 
    },
    {
      id: "street",
      label: "Street",
      minWidth: 100,
      align: "center",
    },
    { 
        id: "city",
        label: "City", 
        minWidth: 100, 
        align: "center" 
    },
    { 
        id: "states", 
        label: "State", 
        minWidth: 100, 
        align: "center" 
    },
    {
        id: "zipCode",
        label: "Zip Code",
        minWidth: 100,
        align: "center",
    },
];

const createData = ( 
    _firstName,
    _lastName,
    _birthDate,
    _startDate,
    _street,
    _city,
    _states,
    _zipCode,
    _departement
) => {
   const firstName = _firstName;
   const lastName = _lastName;
   const birthDate = _birthDate;
   const startDate = _startDate;
   const street = _street;
   const city = _city;
   const zipCode = _zipCode;
   const departement = _departement;
   const states = _states;

  //  const states = etats.map((state) => {
  //   if (state.name.includes(_states)) {
  //     return state.abbreviation;
  //   }
  // });
  
  return {
    firstName,
    lastName,
    startDate,
    departement,
    birthDate,
    street,
    city,
    states,
    zipCode, 
  }
}
const rows = [];

export default function StickyHeadTable({ datas }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [isDatas, setIsDatas] = React.useState(false);
  
    React.useEffect(() => {
      if (datas.length > 0 && Array.isArray(datas)) {
        setIsDatas(true);
        rows.length = 0;
        for (let i = 0; i < datas.length; i++) {
          const {
            firstName,
            lastName,
            startDate,
            department,
            birthDate,
            street,
            city,
            states,
            zipCode,
          } = datas[i];
  
          rows.push(
            createData(
              firstName,
              lastName,
              startDate,
              department,
              birthDate,
              street,
              city,
              states,
              zipCode
            )
          );
        }
      } else {
        setIsDatas(false);
      }
    }, [datas, isDatas]);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, key) => (
                  <TableCell
                    key={key}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {fromLowerToUpperCase(column.label)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, key) => {
                  return (
                    <TableRow
                      hover
                      role="table"
                      tabIndex={-1}
                      key={key}
                      className={key % 2 === 0 ? "even" : ""}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
}

