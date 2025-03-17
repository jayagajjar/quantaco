import React from "react";
import { useCustomers } from "../context/CustomerContext";

const EmployeeList = () => {
  const { customers, loggedInCustomer } = useCustomers();
  const customer = customers.find((c) => c.id === loggedInCustomer?.id);

  if (!customer) {
    return <p style={styles.noEmployees}>No customer found.</p>;
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Employees</h3>
      <ul style={styles.list}>
        {customer.employees.map((emp) => (
          <li key={emp.id} style={styles.listItem}>
            <span style={styles.name}>{emp.name}</span> -
            <span style={styles.role}>{emp.role}</span> -
            <span style={styles.email}>{emp.email}</span>
          </li>
        ))}
      </ul>
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
  list: {
    listStyleType: "none",
    padding: 0,
    width: "100%",
  },
  listItem: {
    backgroundColor: "#f8f9fa",
    padding: "0.8rem",
    margin: "0.5rem 0",
    borderRadius: "5px",
    fontSize: "1rem",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
  name: {
    fontWeight: "bold",
    color: "rgb(19, 46, 75)",
  },
  role: {
    fontStyle: "italic",
    color: "#6c757d",
  },
  email: {
    color: "#333",
  },
};

export default EmployeeList;
