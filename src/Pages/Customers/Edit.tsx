import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CustomerEditForm from "../../Components/Customers/CustomerEditForm";
import { useNavigate, useParams } from "react-router";
import { Button } from "@mui/material";

export default function EditCustomer() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const ParseIdToInt = (id: string) => {
    return id ? parseInt(id?.slice(1, id.length)) : 0;
  };

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
            Edit Customer
          </Typography>
          <CustomerEditForm id={ParseIdToInt(id)} />
        </Container>
      </Box>
    </>
  );
}
