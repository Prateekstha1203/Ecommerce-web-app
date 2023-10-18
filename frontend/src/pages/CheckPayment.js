import React from 'react'
import { Link } from 'react-router-dom';
const CheckPayment = () => {
    return (
        <>
          <div className="checkout-wrapper py-5 home-wrapper-2">
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <div className="left-data">
                    <h3 className="webiste-name">Oracle solution</h3>
                    <nav
                      style={{ "--bs-breadcrumb-divider": ">" }}
                      aria-label="breadcrumb"
                    >
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#home">Home</a>
                        </li>
                        &nbsp; /
                        <li className="breadcrumb-item active" aria-current="page">
                          Library
                        </li>
                      </ol>
                    </nav>
                    <h4 className="title">Conract Information</h4>
                    <p className="user-details">
                      Prateek shrestha (prateekshrestha1203@gmail.com)
                    </p>
                    <form
                      action=""
                      className="d-flex flex-column gap-15 justify-content-between"
                    >
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Email Address"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                      <div>
                        <Link to="/forget-password">Forget Password? </Link>
                        <div className="d-flex justify-content-center gap-15 align-items-center">
                          <button type="submit" className="button border-0">
                            Login
                          </button>
                          <Link to="/signup" className="button signup">
                            Sign Up
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-5"></div>
              </div>
            </div>
          </div>
        </>
      );
}

export default CheckPayment