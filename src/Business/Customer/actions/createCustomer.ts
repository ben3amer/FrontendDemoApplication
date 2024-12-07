import { createCustomer } from "../../../Api/Customers";
import Customer from "../Customer";
import { createCustomerReducer } from "../CustomerReducer";

export const createCustomerAction = function (data: Customer) {
  return async (dispatch) => {
    dispatch(
      createCustomerReducer({
        CreateCustomerActionPayload: { status: "PENDING" },
      })
    );
    return createCustomer(data)
      .then((result) => {
        dispatch(
          createCustomerReducer({
            CreateCustomerActionPayload: {
              status: "SUCCESS",
              aggregate: result,
            },
          })
        );
      })
      .catch((error) => {
        dispatch(
          createCustomerReducer({
            CreateCustomerActionPayload: {
              status: "FAILURE",
              aggregate: null,
              errorMessage: error,
            },
          })
        );
      });
  };
};
