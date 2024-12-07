import { getCustomers } from "../../../Api/Customers";
import { getAllCustomersReducer } from "../CustomerReducer";

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
              aggregate: result,
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
