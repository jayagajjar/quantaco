import React, { useState } from "react";
import { getFromLocalStorage } from "../utils/utils";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import { useNavigate } from "react-router-dom";
import { StorageKeys } from "../utils/stogareKeys";

const Dashboard = () => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(
    getFromLocalStorage(StorageKeys.LOGGED_IN_USER)
  );

  const refreshEmployees = () => {
    const updatedCustomer =
      getFromLocalStorage(StorageKeys.LOGGED_IN_USER) || [];
    setCustomer(updatedCustomer);
  };

  const handleSignOut = () => {
    localStorage.removeItem(StorageKeys.LOGGED_IN_USER);
    navigate("/login");
  };
  return (
    <div>
      <h2>Welcome, {customer?.fullName}</h2>
      {customer && (
        <>
          <EmployeeForm customerId={customer.id} refresh={refreshEmployees} />
          <EmployeeList employees={customer.employees} />
          <button type="submit" onClick={handleSignOut}>
            Sign Out
          </button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
