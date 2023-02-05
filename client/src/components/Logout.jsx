import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

// Component Starts Here
const Logout = (props) => {
  const navigate = useNavigate()
  const logout = () => {
    console.log("log out successfull");
    props.response();
    navigate('/')
  };
  const clientId =
    "1024333231726-13hoct6vpfb693p7c7s0ac0uvtkc4hqr.apps.googleusercontent.com";
  return (
    <>
      <div className="auth logout">
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      </div>
    </>
  );
};

export default Logout;
