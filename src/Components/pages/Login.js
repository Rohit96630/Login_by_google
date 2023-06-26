import React, { useEffect } from "react";
import "../assets/css/Login.css";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log(response);
    if (response && response.accessToken) {
      navigate("/home");
    } else {
      navigate("/home");
    }
  };

  return (
    <>
      <div>
        <div className="login-page">
          <div className="image-container">
            <img src="/Images/login_page_image.png" alt="Login" />
          </div>
          <div className="form-container">
            <div className="login-title">WELCOME</div>
            <span>sign into your account.</span>
            <form>
              {/* <button
              onClick={() =>
                window.open(
                  `${"https://zefayar-uat.hutechweb.com"}/global-cms/api/v1/google/auth`,
                  "_self"
                )
              }
              >
                google
              </button> */}

              <GoogleLogin
                clientId={
                  "603601676685-4buvl1becp7igu7n87svplbc913q4bo6.apps.googleusercontent.com"
                }
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              >
                <span> Login with Google</span>
              </GoogleLogin>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
