import React from "react";

const EmployeeList = ({ employees }) => {
  console.log("EmployeeList :: employees ", employees);
  return (
    <div>
      <h3>Employees</h3>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.role} - {emp.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
