import React from "react";
import { useNavigate } from "react-router-dom";
import { useCustomers } from "../context/CustomerContext";

const Header = () => {
  const navigate = useNavigate();
  const { setCustomers, setLoggedInCustomer } = useCustomers();

  const handleClearStorage = () => {
    localStorage.clear();
    setCustomers([]);
    setLoggedInCustomer(null);
    navigate("/");
  };

  return (
    <header style={styles.header}>
      <div style={styles.headingContainer}>
        <h1 style={styles.heading}>QUANTACO</h1>
      </div>
      <div style={styles.buttonContainer}>
        <button onClick={handleClearStorage} style={styles.button}>
          Clear Local Storage
        </button>
        <button onClick={() => navigate("/")} style={styles.button}>
          Home
        </button>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "rgb(5,44,86)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    height: "60px",
  },
  buttonContainer: {
    display: "flex",
    gap: "1rem",
    flex: 1,
    zIndex: 1,
  },
  button: {
    backgroundColor: "white",
    color: "rgb(5,44,86)",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  headingContainer: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
    width: "100%",
  },
  heading: {
    fontFamily: "Helvetica, Arial, sans-serif",
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
};
export default Header;
