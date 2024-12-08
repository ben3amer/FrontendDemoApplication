import Customers from "./Pages/Customers";
import AddCustomer from "./Pages/Customers/Add";
import EditCustomer from "./Pages/Customers/Edit";

export const routes = [
  {
    path: "/",
    element: <Customers />,
  },
  {
    path: "/addCutomer",
    element: <AddCustomer />,
  },
  {
    path: "/editCustomer/:id",
    element: <EditCustomer />,
  },
];
