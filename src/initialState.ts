import mockedCustomers from "./mockData";
import { InstanceState } from "./reducers";

const appInitialState: InstanceState = {
  application: {
    customers: {
      isFetching: false,
      allCustomersList: mockedCustomers,
      selectedCustomer: {},
    },
  },
};

export default appInitialState;
