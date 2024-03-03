import React, { FC } from "react";
import style from "../css/loginSignupContainer.module.scss";

const LoginSignup: FC = () => {
  return (
    <section className={style.loginSignup}>
      <div className={style.loginSignupContainer}>
        <h1>Sign Up</h1>
        <div className={style.loginSignupFields}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className={style.loginSignupLogin}>Already have an account? <span>Login here</span></p>
        <div className={style.loginSignupAgree}>
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;
