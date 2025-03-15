import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      <button onClick={() => localStorage.clear()} style={styles.button}>
        Clear Local Storage
      </button>
      <button onClick={() => navigate("/")} style={styles.button}>
        Home
      </button>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#eaeaea",
    width: "100%",
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

export default Header;
