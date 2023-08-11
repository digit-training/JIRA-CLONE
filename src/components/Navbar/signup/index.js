import React from "react";
import SignUpForm from "./SignUpForm.js";
import './style.css'


function SignUp() {
  return (
    <div>
      <header className="header" style={{ height: "25vh" }}>
        <span><h1 className="head">Welcome To Jira App</h1></span>
        <span>
          <h2 className="head">Sign Up</h2>
        </span>


      </header>
      <SignUpForm />
    </div>
  );

}

export default SignUp;