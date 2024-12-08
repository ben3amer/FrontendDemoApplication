import appInitialState from "../../initialState";
import { CustomerState } from "../ApplicationReducer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer } from 'redux-persist';

const INITIAL_STATE: CustomerState = appInitialState.application.customers;

const customerSlice = createSlice({
  name: "customer",
  initialState: INITIAL_STATE,
  reducers: {
    createCustomerReducer: (
      state: CustomerState,
      action: PayloadAction<{ CreateCustomerActionPayload }>
    ): CustomerState => {
      const { status, aggregate, errorMessage } =
        action.payload.CreateCustomerActionPayload;
      return {
        ...state,
        selectedCustomer: status === "SUCCESS" ? aggregate : {},
        isFetching: status === "PENDING",
        errorOnCreation: errorMessage,
        isCustomerCreatedSuccessfully: status === "SUCCESS",
      };
    },
    updateCustomerReducer: (
      state: CustomerState,
      action: PayloadAction<{ UpdateCustomerActionPayload }>
    ): CustomerState => {
      const { status, aggregate, errorMessage } =
        action.payload.UpdateCustomerActionPayload;
      return {
        ...state,
        selectedCustomer: status === "SUCCESS" ? aggregate : {},
        isFetching: status === "PENDING",
        errorOnUpdating: errorMessage,
        isCustomerUpdatedtedSuccessfully: status === "SUCCESS",
      };
    },
    getAllCustomersReducer: (
      state: CustomerState,
      action: PayloadAction<{ GetAllCustomersActionPayload }>
    ): CustomerState => {
      const { status, aggregate, errorMessage } =
        action.payload.GetAllCustomersActionPayload;
      return {
        ...state,
        allCustomersList: status === "SUCCESS" ? aggregate : [],
        isFetching: status === "PENDING",
        errorOnFetching: errorMessage,
        isCustomerFetchedSuccessfully: status === "SUCCESS",
      };
    },
    deleteCustomerReducer: (
      state: CustomerState,
      action: PayloadAction<{ DeleteCustomerActionPayload }>
    ): CustomerState => {
      const { status, aggregate, errorMessage } =
        action.payload.DeleteCustomerActionPayload;
      return {
        ...state,
        selectedCustomer: status === "SUCCESS" ? aggregate : {},
        isFetching: status === "PENDING",
        errorOnDeleting: errorMessage,
        isCustomerDeletedSuccessfully: status === "SUCCESS",
      };
    },
    getCustomerReducer: (
      state: CustomerState,
      action: PayloadAction<{ GetCustomerActionPayload }>
    ): CustomerState => {
      const { status, aggregate, errorMessage } =
        action.payload.GetCustomerActionPayload;
      return {
        ...state,
        selectedCustomer: status === "SUCCESS" ? aggregate : {},
        isFetching: status === "PENDING",
        errorOnFetching: errorMessage,
        isCustomerFetchedSuccessfully: status === "SUCCESS",
      };
    },
  },
});

export const {
  createCustomerReducer,
  updateCustomerReducer,
  deleteCustomerReducer,
  getCustomerReducer,
  getAllCustomersReducer,
} = customerSlice.actions;

const persistConfig = {
    storage: storageSession,
    key: 'root',
  };
  
  export default persistReducer(persistConfig, customerSlice.reducer);
