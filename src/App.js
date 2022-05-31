import React from "react";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
