import { Box, Container, Typography } from "@mui/material";
import CustomerForm from '../../Components/Customers/CustomerForm';


export default function AddCustomer() {
  return (
    <>
    <Typography> AddCustomer </Typography>
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