"use client";
import { ChangeEvent, Fragment, useState } from "react";
import style from "../css/loginSignupContainer.module.scss";
import { userDataType } from "@/types";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Transition } from "@headlessui/react";
const LoginSignup = () => {
  const [type, setType] = useState<string>("Login");
  const [userData, setUserData] = useState<userDataType>({
    email: "",
    password: "",
  });
  const [show, setShow] = useState<boolean>(false);
  const [agree, setAgree] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };
  const clearErrorWithTimeout = () => {
    setTimeout(() => {
      setErr("");
    }, 2500);
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (type === "Login") {
        const res = await fetch("http://localhost:4000/auth/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        const data = await res.json();
        if (!res.ok) {
          setErr(data?.err);
          clearErrorWithTimeout();
        } else {
          localStorage.setItem("auth-token", data?.token);
          router.push("/");
        }
      } else {
        const res = await fetch("http://localhost:4000/auth/sign-up", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        const data = await res.json();
        if (!res.ok) {
          setErr(data?.err);
          clearErrorWithTimeout();
        } else {
          localStorage.setItem("auth-token", data?.token);
          router.push("/");
        }
      }
    } catch (err: any) {
      setErr(err?.message);
      clearErrorWithTimeout();
    }
  };
  return (
    <section className={style.loginSignup}>
      {err && (
        <Transition
          show={err ? true : false}
          as={Fragment}
          enter={style.enter}
          enterFrom={style.enterFrom}
          enterTo={style.enterTo}
          leave={style.leave}
          leaveFrom={style.leaveFrom}
          leaveTo={style.leaveTo}
        >
          <div className={style.popup}>{err}</div>
        </Transition>
      )}
      <div className={style.loginSignupContainer}>
        <h1>{type}</h1>
        <form className={style.loginSignupFields} onSubmit={handleSubmit}>
          {type === "Sign Up" && (
            <div>
              {" "}
              <input
                type="text"
                placeholder="Your Name"
                value={userData?.name}
                name="name"
                onChange={handleChange}
              />
            </div>
          )}
          <div>
            {" "}
            <input
              type="email"
              placeholder="Email Address"
              value={userData?.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              value={userData?.password}
              name="password"
              onChange={handleChange}
            />
            {show ? (
              <FaEye size={20} onClick={() => setShow(false)} />
            ) : (
              <FaEyeSlash size={20} onClick={() => setShow(true)} />
            )}
          </div>
          <button disabled={!agree} type="submit">
            Continue
          </button>
        </form>
        <p className={style.loginSignupLogin}>
          {type === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setType("Login")}>Login here.</span>
            </>
          ) : (
            <>
              Create an account?{" "}
              <span onClick={() => setType("Sign Up")}>Sign Up here.</span>
            </>
          )}
        </p>
        <div className={style.loginSignupAgree}>
          <input
            type="checkbox"
            name="agree"
            id="agree"
            checked={agree}
            onChange={(e) => setAgree(e.currentTarget.checked)}
          />
          <label htmlFor="agree">
            By continuing, I agree to the terms of use & privacy policy
          </label>
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;
