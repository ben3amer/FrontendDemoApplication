import React,{useState, useEffect} from 'react'
import { createCustomer } from '../../Api/Customers';
import Customer  from "../../Models/Customer";

export default function CustomerForm() {
  const [idCustomer, setIdCustomer] = useState<number>();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [customer,setCustomer] = useState<Customer>({
    id : -1,
    firstName : "",
    lastName : "",
    phone : ""
  });

  const handleChangeId = (event : any) => {
    setIdCustomer(event.target.value);
  };
  const handleChangeFirstName = (event : any) => {
    setFirstName(event.target.value);
  };
  const handleChangeLastNam = (event : any) => {
    setLastName(event.target.value);
  };
  const handleChangePhone = (event : any) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event : any) => {
    event.preventDefault();
    setCustomer({
      id : idCustomer,
      firstName : firstName,
      lastName :lastName ,
      phone : phone 
    });
    createCustomer(customer)
      .then((res) => {
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>CustomerForm</div>
  )
}