import React, { useState, useEffect, Component } from 'react'
import { Box, Container, Typography } from "@mui/material";
import CustomerForm from '../../Components/Customers/CustomerForm';
type Props = {}

export default function AddCustomer({}: Props) {
  return (
    <>
    <title> AddCustomer </title>
    <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
      }}>
          <Container maxWidth="lg">
            <Typography sx={{ mb: 3 }} variant="h4">
                Add Customer
            </Typography>
            <CustomerForm />
          </Container>
        </Box>
      </>
  )
}