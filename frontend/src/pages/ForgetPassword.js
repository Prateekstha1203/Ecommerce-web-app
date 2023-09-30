import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
const ForgetPassword = () => {
  return (
    <>
      <Meta title="Forget Password" />
      <BreadCrumb title="Forget Password" />
      <div className="login-wrapper home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="reset-card">
                <h3 className="text-center mb-1">Reset your password</h3>
                <p className="text-center my-2">
                  We will send you email for reset password
                </p>
                <form action="" className="d-flex flex-column gap-15 mt-4">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="d-flex  flex-column justify-content-center gap-15 align-items-center">
                    <button type="submit" className="button border-0">
                      Submit
                    </button>
                    <Link to="/login" >
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
