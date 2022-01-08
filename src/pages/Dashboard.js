import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Dasboard</h1>
      <button onClick={handleClick}>Logaut</button>
      <br />
      {/* CREAR UNA SUBRUTA DENTRO DE dASHBOARD */}
      <Link to="welcome"> say Welcome</Link>
      <br />
      <Link to="goodbay"> say Good bay</Link>
      <Outlet />
    </div>
  );
}
