import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper
} from "@mui/material";
import users from "../data/users";



const UserTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ width: "90%", margin: "40px auto", padding: 2 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>UseCase Category</b></TableCell>
              <TableCell><b>Prompts Submitted to GIGI</b></TableCell>
              <TableCell><b>Nov 1</b></TableCell>
              <TableCell><b>Nov 2</b></TableCell>
              <TableCell><b>Nov 3</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.usecase_category}</TableCell>
                  <TableCell>{user.Prompt_submitted_to_gigi}</TableCell>
                  <TableCell>{user.nov_1}</TableCell>
                  <TableCell>{user.nov_2}</TableCell>
                  <TableCell>{user.nov_3}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={users.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10]}
      />
    </Paper>
  );
};

export default UserTable;
