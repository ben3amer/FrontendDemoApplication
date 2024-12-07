import { createSelector } from "@reduxjs/toolkit";
import { applicationSelector } from "../applicationSelector";

export const customerSelector = createSelector(applicationSelector, application => application.customers);

export const currentCustomerSelector = createSelector(customerSelector, customers => customers.selectedCustomer);

export const allCustomersSelector = createSelector(customerSelector, customers => customers.allCustomersList);
