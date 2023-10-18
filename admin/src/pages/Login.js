import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className=" d-flex align-items-center justify-content-center "
            style={{ background: "#ffd333", height: "100vh" }}
          >
            <div className="login-content col-12 col-md-5 text-center"> 
              <div className="my-5  bg-white rounded-3 mx-auto p-4">
                <h3 className="text-center title">Login</h3>
                <p className="text-center">
                  Login to your account to continue.
                </p>
                <form action="">
                  <CustomInput
                    type="text"
                    label="Email Address"
                    id="email"
                    name="email"
                    i_class="form-control"
                  />
                  <CustomInput
                    type="password"
                    label="Password"
                    id="pass"
                    name="password"
                  />
                  <div className="error mt-2"></div>
                  <div className="text-end d-flex align-items-center justify-content-between my-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link
                      to="forgotpassword"
                      className=" text-decoration-none text-secondary"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <button
                    className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
                    style={{ background: "#ffd333" }}
                    type="submit"
                  >
                    Login
                  </button>
                  <p className="mb-0 text-center mt-3">
                    Don't have an account?
                    <Link
                      to="signIn"
                      className="ms-2 text-decoration-none text-secondary"
                    >
                      Sign In
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
