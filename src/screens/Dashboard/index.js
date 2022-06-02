import { LoadingContext } from "../../components";
import { Typography } from "antd";
import React, { useContext } from "react";
const { Title } = Typography;
const Dashboard = () => {
  const { token } = useContext(LoadingContext);
  console.log(token);
  return (
    <div style={{ width: "100vh", height: "100vh" }}>
      <ul>
        {/* <li style={{ fontSize: "5rem", cursor: "pointer" }}>Settings</li> */}
      </ul>
      <Title
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "10rem",
        }}
      >
        Hi
      </Title>
    </div>
  );
};

export default Dashboard;
