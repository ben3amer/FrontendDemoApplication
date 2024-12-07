import { updateCustomer } from "../../../Api/Customers";
import Customer from "../Customer";
import { updateCustomerReducer } from "../CustomerReducer";

export const updateCustomerAction = function (data: Customer) {
  return async (dispatch) => {
    dispatch(
      updateCustomerReducer({
        UpdateCustomerActionPayload: { status: "PENDING" },
      })
    );
    return updateCustomer(data)
      .then((result) => {
        dispatch(
          updateCustomerReducer({
            UpdateCustomerActionPayload: {
              status: "SUCCESS",
              aggregate: result,
            },
          })
        );
      })
      .catch((error) => {
        dispatch(
          updateCustomerReducer({
            UpdateCustomerActionPayload: {
              status: "FAILURE",
              aggregate: null,
              errorMessage: error,
            },
          })
        );
      });
  };
};
