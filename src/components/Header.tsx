import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const naigate = useNavigate();
  return (
    <div>
      <button onClick={() => localStorage.clear()}>Clear Local Storage</button>
      <button onClick={() => naigate("/")}>Home</button>
    </div>
  );
};
export default Header;
