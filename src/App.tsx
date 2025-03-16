import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "./utils/utils";
import { StorageKeys } from "./utils/stogareKeys";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import { CustomerProvider } from "./context/CustomerContext";

function App() {
  return (
    <CustomerProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </CustomerProvider>
  );
}

export default App;
