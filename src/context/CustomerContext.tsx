import React, { createContext, useContext, useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/utils";
import { StorageKeys } from "../utils/stogareKeys";
import { Customer, Employee } from "../types";

interface CustomerContextType {
  customers: Customer[];
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
  addEmployee: (customerId: string, newEmployee: Employee) => void;
  loggedInCustomer: Customer | null;
  setLoggedInCustomer: (customer: Customer | null) => void;
}

const CustomerContext = createContext<CustomerContextType | null>(null);

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loggedInCustomer, setLoggedInCustomer] = useState<Customer | null>(
    null
  );

  useEffect(() => {
    const storedCustomers = getFromLocalStorage(StorageKeys.CUSTOMERS) || [];
    setCustomers(storedCustomers);

    const storedLoggedInCustomer =
      getFromLocalStorage(StorageKeys.LOGGED_IN_USER) || null;
    setLoggedInCustomer(storedLoggedInCustomer);
  }, []);

  const addEmployee = (customerId: string, newEmployee: Employee) => {
    setCustomers((prev) => {
      const updated = prev.map((c) =>
        c.id === customerId
          ? { ...c, employees: [...c.employees, newEmployee] }
          : c
      );
      saveToLocalStorage(StorageKeys.CUSTOMERS, updated);
      return updated;
    });
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        setCustomers,
        addEmployee,
        loggedInCustomer,
        setLoggedInCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomers = () => {
  const context = useContext(CustomerContext);
  if (!context)
    throw new Error("useCustomers must be used within CustomerProvider");
  return context;
};
