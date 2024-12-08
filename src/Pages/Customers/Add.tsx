import { Box, Button, Container, Typography } from "@mui/material";
import CustomerForm from "../../Components/Customers/CustomerForm";
import { useNavigate } from "react-router";

export default function AddCustomer() {
  const navigate = useNavigate();

  const handleOnClickReturnButton = () => {
    navigate("/");
  };

  return (
    <>
      <Button onClick={handleOnClickReturnButton}> Return </Button>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Add Customer
          </Typography>
          <CustomerForm />
        </Container>
      </Box>
    </>
  );
}
