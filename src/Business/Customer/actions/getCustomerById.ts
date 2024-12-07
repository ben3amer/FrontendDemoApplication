import { getCustomerbyId } from "../../../Api/Customers";
import { getCustomerReducer } from "../CustomerReducer";

export const getCustomerAction = function (data: number) {
  return async (dispatch) => {
    dispatch(
      getCustomerReducer({
        GetCustomerActionPayload: { status: "PENDING" },
      })
    );
    return getCustomerbyId(data)
      .then((result) => {
        dispatch(
          getCustomerReducer({
            GetCustomerActionPayload: {
              status: "SUCCESS",
              aggregate: result,
            },
          })
        );
      })
      .catch((error) => {
        dispatch(
          getCustomerReducer({
            GetCustomerActionPayload: {
              status: "FAILURE",
              aggregate: null,
              errorMessage: error,
            },
          })
        );
      });
  };
};
