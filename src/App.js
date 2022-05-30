import React from "react";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
