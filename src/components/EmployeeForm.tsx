import React, { useState } from "react";
import { Employee } from "../types";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/utils";
import { StorageKeys } from "../utils/stogareKeys";

const EmployeeForm = ({ customerId, refresh }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !role || !email.includes("@")) {
      alert("All fields are required");
      return;
    }

    const newEmployee: Employee = {
      id: Date.now().toString(),
      name,
      role,
      email,
    };

    const customers = getFromLocalStorage(StorageKeys.CUSTOMERS) || [];
    const customerIndex = customers.findIndex((c) => c.id === customerId);

    if (customerIndex !== -1) {
      customers[customerIndex].employees.push(newEmployee);
      saveToLocalStorage(StorageKeys.CUSTOMERS, customers);
      saveToLocalStorage(StorageKeys.LOGGED_IN_USER, customers[customerIndex]);
      console.log("Employee Added");
      refresh();
    }

    setName("");
    setRole("");
    setEmail("");
  };

  return (
    <div>
      <h3>Add Employee</h3>
      <form onSubmit={handleAddEmployee}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
