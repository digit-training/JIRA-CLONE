import React from "react";
import SignUpForm from "./SignUpForm.js";
import './style.css'


function SignUp() {


  return (
    <div>
      <header className="header" style={{ height: "25vh" }}>
        <span className="flex flex-col items-center h-full justify-center">
          <h1 className="text-2xl font-semibold mb-1000">Welcome To Jira App</h1>
          <h2 className="text-2xl font-semibold  text-blue-500">Sign Up</h2>
        </span>
      </header>
      <SignUpForm />
    </div>
  );
}

export default SignUp;