import { useEffect } from "react";
import Customer from "../../Business/Customer/Customer";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { Delete, Edit } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppThunkDispatch } from "../../store";
import { getAllCustomersAction } from "../../Business/Customer/actions/getAllCustomers";
import { deleteCustomerAction } from "../../Business/Customer/actions/deleteCustomer";

export default function Customers() {
  const navigate = useNavigate();
  const dispatch = useAppThunkDispatch();
  const listCustomers = useAppSelector(
    (x) => x.application?.customer?.allCustomersList
  );

  useEffect(() => {
    dispatch(getAllCustomersAction);
  }, [dispatch]);

  const handleDelete = async (id: number) => {
    await dispatch(deleteCustomerAction(id));
  };

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          Customers
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              navigate("/addCutomer");
            }}
          >
            Add new customer
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell> ID</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listCustomers?.map((customer: Customer) => (
              <TableRow
                key={customer?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell padding="checkbox">
                  <Checkbox value="true" />
                </TableCell>
                <TableCell component="th" scope="row">
                  {customer?.id}
                </TableCell>
                <TableCell align="right">{customer?.firstName}</TableCell>
                <TableCell align="right">{customer?.lastName}</TableCell>
                <TableCell align="right">{customer?.phone}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="edit"
                    size="medium"
                    onClick={() => {
                      navigate(`/editCustomer/:${customer?.id}`);
                    }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="medium"
                    onClick={async () => {
                      await handleDelete(customer?.id);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
