import Customer  from "../Models/Customer";
import api from "./Api";

export const createCustomer = (body: Customer) => {
    return api.post("/Customers/Create", body);
};

export const getCustomerbyId = (id : number) => {
  return api.get(`/Customers/GetById/${id}`);
}

export const getCustomers = () => {
  return api.get("/Customers/GetAll");
};

export const updateCustomer = (body :  Customer) => {
  return api.put(`/Customers/Update`, body);
};
  
export const deleteCustomer = (id : number) => {
  return api.delete(`/Customers/Delete/${id}`);
};