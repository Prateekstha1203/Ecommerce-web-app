import React from 'react'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ background: "#ffd333", minHeight: "100vh" }}
          >
            <div className="login-content col-12 col-md-4 text-center"> {/* Adjust the column size for medium screens */}
              <div className="my-2 bg-white rounded-3 mx-auto p-2">
                <div className="my-5 bg-white rounded-3 mx-auto p-4">
                  <h3 className="text-center title">Reset Password</h3>
                  <p className="text-center">
                    Please Enter your new password.
                  </p>
                  <form action="">
                    <CustomInput
                      type="password"
                      label="New Password"
                      id="password"
                    />

                    <CustomInput
                      type="password"
                      label="Confirm Password"
                      id="confirmpassword"
                    />

                    <button
                      className="border-0 mt-4 px-3 py-2 text-white fw-bold w-100"
                      style={{ background: "#ffd333" }}
                      type="submit"
                    >
                      Reset Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword;
