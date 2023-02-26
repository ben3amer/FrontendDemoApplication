import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import React, { useState, useEffect, Component } from 'react'
import CustomerEditForm from '../../Components/Customers/CustomerEditForm'
import { useParams } from "react-router-dom";
type Props = {}

export default function EditCustomer({}: Props) {
  //console.log(useParams<{ id: string }>())
  const { id } = useParams<{ id: string }>();
  const idCustomerString: string = id ?? ""; 
  const newIDCutomerString : string  = idCustomerString.substr(1,idCustomerString.length);
  //console.log(newIDCutomerString);
  const idCustomer : number = parseInt(newIDCutomerString) ?? 0;
  //console.log(idCustomer)
  // 14.16.1 node js
  return (
    <>
    <title> EditCustomer </title>
    <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
      }}>
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
            Edit Customer
        </Typography>
        <CustomerEditForm  id = {idCustomer}/>
      </Container>
    </Box>
  </>
  )
}
