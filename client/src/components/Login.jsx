import React from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Component Starts from here
const Login = (props) => {
  const navigate = useNavigate();
  const clientId =
    "1024333231726-13hoct6vpfb693p7c7s0ac0uvtkc4hqr.apps.googleusercontent.com";
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);

  const responseGoogle = (response) => {
    // console.log(response);
    axios.post("http://localhost:8000/", { idToken: response.tokenId })
      .then((response) => {
        console.log(response);
        props.response(response);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/dashboard");
  };
  return (
    <>
      <div className="auth">
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        
      </div>
    </>
  );
};

export default Login;
