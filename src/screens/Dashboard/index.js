import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoadingContext } from "../../components";

const Dashboard = () => {
  const { roles } = useContext(LoadingContext);
  return (
    <div style={{ width: "100vh", height: "100vh", color: "white" }}>
      <ul>
        {/* <li style={{ fontSize: "5rem", cursor: "pointer" }}>Settings</li> */}
      </ul>
      <Link
        style={{
          textAlign: "center",
          left: "0",
          width: "100vw",
          textShadow: "0 0 20px lightblue, 0 0 25px blue",
          letterSpacing: "5px",
          textDecoration: "none",
        }}
        to={"/"}
      >
        Logout
      </Link>
      <h1
        style={{
          textAlign: "center",
          left: "0",
          width: "100vw",
          textShadow: "0 0 20px lightblue, 0 0 25px blue",
          letterSpacing: "5px",
        }}
      >
        Login as{" "}
        {localStorage.getItem("roles") === "admin" ? "admin" : "client"}
      </h1>
      <h1
        style={{
          textAlign: "center",
          left: "0",
          width: "100vw",
          textShadow: "0 0 20px lightblue, 0 0 25px blue",
          letterSpacing: "5px",
        }}
      >
        {localStorage.getItem("roles") === "admin" && (
          <Link
            style={{
              textAlign: "center",
              left: "0",
              width: "100vw",
              textShadow: "0 0 20px lightblue, 0 0 25px blue",
              letterSpacing: "5px",
              textDecoration: "none",
            }}
            to={"/settings"}
          >
            Settings
          </Link>
        )}
      </h1>
      <p
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "20rem",
          fontWeight: "900",
          color: "white",
          letterSpacing: "20px",
          textShadow: "0 0 20px lightcoral, 0 0 25px lightgreen",
        }}
      >
        Hi
      </p>
    </div>
  );
};

export default Dashboard;
