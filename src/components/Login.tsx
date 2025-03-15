import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/utils";
import { StorageKeys } from "../utils/stogareKeys";
import Header from "./Header";

const Login = ({
  setIsLoggedIn,
}: {
  setIsLoggedIn: (value: boolean) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const customers = getFromLocalStorage(StorageKeys.CUSTOMERS);
    const foundCustomer = customers.find((c) => c.email === email);

    console.log("Login :: foundCustomer", foundCustomer);

    saveToLocalStorage(StorageKeys.LOGGED_IN_USER, foundCustomer);
    navigate("/dashboard");
  };
  return (
    <div>
      <Header />
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
