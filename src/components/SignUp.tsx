import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage, saveInLocalStarage } from "../utils/utils";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!fullName || !email || !password) {
      alert("All fields are required");
      return;
    }

    const newCustomer = {
      id: Date.now().toString(),
      fullName,
      email,
      password,
    };

    const customers = getFromLocalStorage("customers") || [];
    customers.push(newCustomer);
    saveInLocalStarage("customers", customers);

    localStorage.setItem("currentUser", JSON.stringify(newCustomer));
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUp;
