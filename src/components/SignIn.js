import React from 'react';
import './SignIn.css';
const Signin = () => {
  // 1. create the form first
  return (
    <div className="signin">
      <form action="">
        <h1>Sign in</h1>
        <input type="email" />
        <input type="password" />
        <button>Sign in </button>
        <h6>
          Not yet register?
          <button className="signin__link">Sign up</button>
        </h6>
      </form>
    </div>
  );
};

export default Signin;
