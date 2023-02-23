import React,{useState, useEffect} from 'react'
import { createCustomer } from '../../Api/Customers';
import Customer  from "../../Models/Customer";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function CustomerForm() {
  const [customer,setCustomer] = useState<Customer>({
    id : -1,
    firstName : '',
    lastName : '',
    phone : ''
  });

  const handleChange = (event : any) => {
    setCustomer({
      ...customer,
      [event.target.name]: event.target.value
  });
}
  const handleSubmit = (event : any) => {
    event.preventDefault();
    createCustomer(customer)
      .then((res) => {
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <>
     <form autoComplete="off" onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Customrr" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                onChange={handleChange}
                required
                value={phone}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained" type="submit">
            Save
          </Button>
        </Box>
      </Card>
    </form>
    </>
  );
}