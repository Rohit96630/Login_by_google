import React from "react";
import "../assets/css/Login.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    const accessToken = credentialResponse.credential;
    console.log(accessToken);

    Swal.fire({
      text: "Login successfully!",
      icon: "success",
      timer: 1000,
      position: "top-center",
      toast: true,
      showConfirmButton: false,
      timer: 2000,
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show",
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide",
      },
    });
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };
  const handleLoginFailure = (error) => {
    console.log("Login Failed:", error);
  };
  return (
    <>
      <div>
        <div className="login-page">
          <div className="image-container">
            <img src="/Images/login_page_image.png" alt="Login" />
          </div>
          <div className="form-container">
            <div>
              <div className="login-title">WELCOME</div>
              <span>sign into your account.</span>
            </div>
            <form>
              <GoogleLogin
                clientId="802148784345-1dqn0lkijcir14qooc3ssf301jvrc2un.apps.googleusercontent.com"
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
                className="custom-google-button"
              />
            </form>
            <div className="last_line">
              <span>All right reserved</span>
              <span>Terms of use Privacy policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
