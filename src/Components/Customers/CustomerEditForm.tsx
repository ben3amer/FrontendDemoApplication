import { useState, useEffect } from "react";
import Customer from "../../Business/Customer/Customer";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppThunkDispatch } from "../../store";
import { getCustomerAction } from "../../Business/Customer/actions/getCustomerById";
import { updateCustomerAction } from "../../Business/Customer/actions/updateCustomer";

interface CustomerEditFormProps {
  id?: number;
}

export default function CustomerEditForm(
  props: Readonly<CustomerEditFormProps>
) {
  const navigate = useNavigate();
  const idCustomer: number = props.id;
  const [customer, setCustomer] = useState<Customer>();
  const dispatch = useAppThunkDispatch();
  const currentCustomer = useAppSelector(
    (x) => x.application.customer.selectedCustomer
  );

  useEffect(() => {
    dispatch(getCustomerAction(idCustomer));
  }, [idCustomer, dispatch]);

  useEffect(() => {
    setCustomer(currentCustomer);
  }, [currentCustomer]);

  const handleChange = (event: any) => {
    setCustomer({
      ...customer,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(updateCustomerAction(customer))
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Customer"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid size={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={customer?.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={customer?.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                onChange={handleChange}
                required
                value={customer?.phone}
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
  );
}
