import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const { Title } = Typography;
const Settings = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
        Settings
      </p>
      <Link
        to={"/dashboard"}
        style={{
          color: "white",
          letterSpacing: "10px",
          textShadow: "0 0 20px red, 0 0 25px blue",
          cursor: "pointer",
          textDecoration: "none",
          fontSize: "3rem",
        }}
      >
        back to dashboard
      </Link>
    </div>
  );
};

export default Settings;
