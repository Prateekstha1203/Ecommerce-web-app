import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
const SignUp = () => {
  return (
    <>
      <Meta title="Create Account" />
      <BreadCrumb title="Create Account" />
      <div className="login-wrapper home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-1">Create Account</h3>
                <form action="" className="d-flex flex-column gap-15 mt-4">
                  <div className="form-group d-flex gap-20">
                  <label for="exampleInputName1">First name: </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="First name"
                    />
                  </div>
                  <div className="form-group d-flex gap-20">
                  <label for="exampleInputName1">Last name: </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName2"
                      placeholder="last name"
                    />
                  </div>
                  <div className="form-group d-flex gap-20">
                  <label for="exampleInputEmail1">Email: </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group d-flex gap-20">
                  <label for="exampleInputPassword1">Password: </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="d-flex  flex-column justify-content-center gap-15 align-items-center">
                    <button type="submit" className="button border-0">
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      F
    </>
  );
};

export default SignUp;
