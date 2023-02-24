import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import React, { useState, useEffect, Component } from 'react'
import CustomerEditForm from '../../Components/Customers/CustomerEditForm'
import { useParams } from "react-router-dom";
type Props = {}

export default function EditCustomer({}: Props) {
  const { id } = useParams<{ id: string }>();
  const idCustomerString: string = id ?? ""; 
  const idCustomer : number = parseInt(idCustomerString) ?? 0;
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
            <CustomerEditForm  {{idCustomer: 88}}/>
          </Container>
        </Box>
      </>
  )
}
