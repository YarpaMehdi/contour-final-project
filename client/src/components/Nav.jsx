import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

const Nav = () => {
  // const navigate = useNavigate()
  const [stateAuth, setStateAuth] = useState();
  const response = (res) => {
    setStateAuth(res);
  };
  return (
    <>
      <div className="nav_bar">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Health Care Management</h3>
            </div>
            <div className="col-md-8 text-end">
              <div className="auth_btns d-flex justify-content-end">
                {!stateAuth ? (
                  <Login response={response} />
                ) : (
                  <>
                    <div className="user_infor">
                      <div className="infor_details">
                        <h5>{stateAuth.data.name}</h5>
                        <p>{stateAuth.data.email}</p>
                      </div>
                      <figure>
                        <img src={stateAuth.data.picture} alt="" />
                      </figure>
                    </div>
                    <Logout response={response} />
                    {/* {navigate('/')} */}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard_menu">
        <div className="container">
          <ul>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={"/department"}>Department</NavLink>
            </li>
            <li>
              <NavLink to={"/doctors"}>Doctors</NavLink>
            </li>
            <li>
              <NavLink to={"/patients"}>Patients</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
