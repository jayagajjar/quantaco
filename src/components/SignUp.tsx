import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Customer } from "../types";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/utils";
import { StorageKeys } from "../utils/stogareKeys";
import Header from "./Header";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    console.log("e ", e);
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

    const customers = getFromLocalStorage(StorageKeys.CUSTOMERS) || [];

    const customerExists = customers.find((c) => c.email === email);
    console.log("isNewCustomerExists ", customerExists);

    if (customerExists) {
      console.log("Customer already exists");
      navigate("/login");
    } else {
      customers.push(newCustomer);
      saveToLocalStorage(StorageKeys.CUSTOMERS, customers);
      console.log("New Customer created", fullName);
      saveToLocalStorage(StorageKeys.LOGGED_IN_USER, newCustomer);
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <Header />
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  );
};

export default SignUp;
