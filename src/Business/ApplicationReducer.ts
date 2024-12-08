import { combineReducers } from "redux";
import Customer from "./Customer/Customer";
import CustomerReducer from './Customer/CustomerReducer';


export const ApplicationReducer = combineReducers({
  customer: CustomerReducer
});

export interface ApplicationState {
  customers?: CustomerState;
}


export interface CustomerState {
  allCustomersList?: Array<Customer>;
  selectedCustomer?: Customer;
  isFetching?: boolean;
  isCustomerCreatedSuccessfully?: boolean;
  isCustomerFetchedSuccessfully?: boolean;
  isCustomerUpdatedtedSuccessfully?: boolean;
  isCustomerDeletedSuccessfully?: boolean;
  errorOnCreation?: string;
  errorOnUpdating?: string;
  errorOnDeleting?: string;
  errorOnFetching?: string;
}
