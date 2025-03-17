import React from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import { useNavigate } from "react-router-dom";
import { StorageKeys } from "../utils/stogareKeys";
import { useCustomers } from "../context/CustomerContext";

const Dashboard = () => {
  const navigate = useNavigate();

  const { loggedInCustomer } = useCustomers();

  const handleSignOut = () => {
    localStorage.removeItem(StorageKeys.LOGGED_IN_USER);
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome {loggedInCustomer?.fullName}</h2>
      {loggedInCustomer && (
        <div style={styles.content}>
          <EmployeeForm customerId={loggedInCustomer.id} />
          <EmployeeList />
          <button type="submit" onClick={handleSignOut} style={styles.button}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "6rem",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    fontFamily: " Helvetica, Arial, sans-serif",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "1.5rem",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    width: "100%",
    maxWidth: "800px",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  button: {
    backgroundColor: "rgb(248,111,42)",
    color: "white",
    padding: "0.8rem 1.2rem",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s ease-in-out",
  },
};

export default Dashboard;
