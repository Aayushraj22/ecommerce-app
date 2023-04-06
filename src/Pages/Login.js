import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-page bg-light">
        <h3>Log-In</h3>
        <form action="">
          <div className="my-2">
            <input type="email" name="email" placeholder="Email address" />
          </div>
          <div className="my-2">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="my-2">
            <input
              type="submit"
              value="Log in"
              className="bg-primary text-light"
            />
          </div>
          <Link to="/forgetPassword" className="mx-3">
            <h6>forgot password?</h6>
          </Link>
          <Link to="/signUp">
            <h6>sign up</h6>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
