import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, Settings, Animals } from "./screens";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/settings"
        element={
          localStorage.getItem("roles") === "admin" ? (
            <Settings />
          ) : (
            <h1>404</h1>
          )
        }
      />
      <Route
        path="/animals"
        element={
          localStorage.getItem("roles") === "admin" ? <Animals /> : <h1>404</h1>
        }
      />
      <Route path="/register" element={<h1>Register</h1>} />
    </Routes>
  );
};

export default App;
