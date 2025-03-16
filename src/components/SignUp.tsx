import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Customer } from "../types";
import { useCustomers } from "../context/CustomerContext";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { customers, setCustomers, setLoggedInCustomer } = useCustomers();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      alert("All fields are required");
      return;
    }

    const newCustomer: Customer = {
      id: Date.now().toString(),
      fullName,
      email,
      password,
      employees: [],
    };

    const customerExists = customers.find((c) => c.email === email);

    if (customerExists) {
      alert("Customer already exists. Redirecting to login.");
      navigate("/login");
    } else {
      customers.push(newCustomer);
      setCustomers(customers);
      setLoggedInCustomer(newCustomer);
      navigate("/dashboard");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Sign Up</h2>
        <form onSubmit={handleSignUp} style={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
        <p style={styles.loginMessage}>
          Already have an account?{"  "}
          <a href="/login" style={styles.link}>
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
    fontFamily: " Helvetica, Arial, sans-serif",
  },
  card: {
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "rgb(5,44,86)",
    color: "white",
    padding: "0.8rem",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  loginMessage: {
    color: "#333",
    fontSize: "0.9rem",
  },
};
export default SignUp;
