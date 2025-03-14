import React, { useState } from "react";
const EmployeeForm: React.FC = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  const handleAddEmployee = () => {
    const newEmployee = { id: Date.now().toString(), name, role, email };

    localStorage.setItem("customers", JSON.stringify(newEmployee));
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
