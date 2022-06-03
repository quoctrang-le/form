// "homepage": "https://quoctrang-le.github.io/react/",
// import React, { useContext } from 'react';
// import BoxModel from './components/BoxModel';
// import { LoadingContext } from './components/GlobalDataProvider';
// import Loading from './components/Loading';
// import {Dashboard ,Register} from './screens';
// import 'antd/dist/antd.min.css';
// import { Routes, Route } from 'react-router-dom';
// const App = () => {
//   const { isLoading } = useContext(LoadingContext);

//   return (

//     <Routes>
//       {isLoading && <Loading />}
//       <Route path='/' element={<Register />} />
//       <Route path='/dashboard' element={<Dashboard />} />
//       <BoxModel />
//     </Routes>

//   );
// };

// export default App;

import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingContext } from "./components";
import { Dashboard, Login, Settings } from "./screens";
const App = () => {
  const { rules } = useContext(LoadingContext);

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
      <Route path="/register" element={<h1>Register</h1>} />
    </Routes>
  );
};

export default App;
