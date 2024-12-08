import { getCustomers } from "../../../Api/Customers";
import { getAllCustomersReducer } from "../CustomerReducer";
import mockedCustomers from "../../../mockData";

export const getAllCustomersAction = function () {
  return async (dispatch) => {
    dispatch(
      getAllCustomersReducer({
        GetAllCustomersActionPayload: { status: "PENDING" },
      })
    );
    return getCustomers()
      .then((result) => {
        dispatch(
          getAllCustomersReducer({
            GetAllCustomersActionPayload: {
              status: "SUCCESS",
              aggregate: mockedCustomers,
            },
          })
        );
      })
      .catch((error) => {
        dispatch(
          getAllCustomersReducer({
            GetAllCustomersActionPayload: {
              status: "FAILURE",
              aggregate: null,
              errorMessage: error,
            },
          })
        );
      });
  };
};
