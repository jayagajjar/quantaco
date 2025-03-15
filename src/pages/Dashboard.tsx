import React, { useState, useEffect } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/utils";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import { useNavigate } from "react-router-dom";
import { StorageKeys } from "../utils/stogareKeys";

const Dashboard = () => {
  const navigate = useNavigate();
  const customer = getFromLocalStorage(StorageKeys.LOGGED_IN_USER);

  const handleSignOut = () => {
    localStorage.removeItem(StorageKeys.LOGGED_IN_USER);
    navigate("/login");
  };
  return (
    <div>
      <h2>Welcome, {customer?.fullName}</h2>
      {customer && (
        <>
          <EmployeeForm customerId={customer.id} />
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
