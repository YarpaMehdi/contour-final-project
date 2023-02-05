import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Department from "./components/Department";
import Doctors from "./components/Doctors";
// import Login from "./components/Login";
import Nav from "./components/Nav";
import Patients from "./components/Patients";
// import { FcAcceptDatabase } from "react-icons/fc";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/login" element={<Login />} />
        </Routes> */}
        <Nav />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/department" element={<Department />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
        </Routes>
        {/* <Routes>
          
        </Routes>
        <Routes>
          
        </Routes>
        <Routes>
          
        </Routes>
        <Routes>
          <Route path="*" element={<Err />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
};

export default App;
