import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CustomerEditForm from "../../Components/Customers/CustomerEditForm";

interface IEditCustomerProps {
  customerId?: string;
}

export default function EditCustomer(props: Readonly<IEditCustomerProps>) {
  const { customerId } = props;

  const ParseIdToInt = (id: string) => {
    return id ? parseInt(id?.slice(1, id.length)) : 0;
  };

  return (
    <>
      <Typography> EditCustomer </Typography>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Edit Customer
          </Typography>
          <CustomerEditForm id={ParseIdToInt(customerId)} />
        </Container>
      </Box>
    </>
  );
}
