import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CustomerEditForm from '../../Components/Customers/CustomerEditForm'
import { useParams } from "react-router-dom";
type Props = {}

export default function EditCustomer({}: Props) {
  const { id } = useParams<{ id: string }>();
  const idCustomerString: string = id ?? ""; 
  const newIDCutomerString : string  = idCustomerString.substr(1,idCustomerString.length);
  const idCustomer : number = parseInt(newIDCutomerString) ?? 0;
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
