import { deleteCustomer } from "../../../Api/Customers";
import { deleteCustomerReducer } from "../CustomerReducer";

export const deleteCustomerAction = function (data: number) {
  return async (dispatch) => {
    dispatch(
      deleteCustomerReducer({
        DeleteCustomerActionPayload: { status: "PENDING" },
      })
    );
    return deleteCustomer(data)
      .then((result) => {
        dispatch(
          deleteCustomerReducer({
            DeleteCustomerActionPayload: {
              status: "SUCCESS",
              aggregate: result,
            },
          })
        );
      })
      .catch((error) => {
        dispatch(
          deleteCustomerReducer({
            DeleteCustomerActionPayload: {
              status: "FAILURE",
              aggregate: null,
              errorMessage: error,
            },
          })
        );
      });
  };
};
