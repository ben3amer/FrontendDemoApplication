import React, { useState, useEffect } from 'react'
import { getCustomers } from '../../Api/Customers';
import Customer  from "../../Models/Customer";
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import { Delete, Edit } from "@mui/icons-material";
import Checkbox from '@mui/material/Checkbox';

export default function Customers() {
  const [listCustomers, setListCustomers] = useState([])
  useEffect(() => {
      getCustomers()
          .then((response) => {
                  setListCustomers(response.data.customers)
                  console.log(response.data)
                  console.log(listCustomers)
          }
          )
          .catch((error) => {
            console.error(error)
          })

  },[]);

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
                  <Checkbox/>
                </TableCell>
          <TableCell> ID</TableCell>
          <TableCell align="right">First Name</TableCell>
          <TableCell align="right">Last Name</TableCell>
          <TableCell align="right">Phone</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {listCustomers.map((customer :  Customer) => (
          <TableRow
            key={customer.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell padding="checkbox">
                    <Checkbox
                      value="true"
                    />
                  </TableCell>
            <TableCell component="th" scope="row">
              {customer.id}
            </TableCell>
            <TableCell align="right">{customer.firstName}</TableCell>
            <TableCell align="right">{customer.lastName}</TableCell>
            <TableCell align="right">{customer.phone}</TableCell>
            <TableCell align="right">  
              <IconButton 
                    aria-label="edit" 
                    size="medium"
                    onClick={() => {
                    }}>
                <Edit />
              </IconButton>
              <IconButton
                    aria-label="delete"
                    size="medium"
                    onClick={async () => {
                      }}>
                   <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}