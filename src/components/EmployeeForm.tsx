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
    <div style={styles.container}>
      <h3 style={styles.title}>Add Employee</h3>
      <form onSubmit={handleAddEmployee} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Add Employee
        </button>
      </form>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: " Helvetica, Arial, sans-serif",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    outline: "none",
  },
  button: {
    backgroundColor: "rgb(5,44,86)",
    color: "white",
    padding: "0.8rem",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
  },
};

export default EmployeeForm;
