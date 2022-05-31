import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [iconPw, setIconPw] = useState(false);
  const [iconPwCf, setIconPwCf] = useState(false);
  const [isMember, setIsMember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmpty = (e) => {
    if (!e.target.value) {
      e.target.className = "current";
      e.target.placeholder = "This field must be done!";
    }
  };

  return (
    <section className="container">
      <div className="form__wrapper">
        <div className="title">
          <h1>Hello Again</h1>
          <h3>Welcome back you've been missed!</h3>
        </div>

        {isMember ? (
          <form style={{ height: "20rem" }} onSubmit={(e) => handleSubmit(e)}>
            <div className="input__wrapper">
              <input
                required="required"
                name="username"
                type="text"
                onBlur={(e) => {
                  handleEmpty(e);
                  setUsername(e.target.value);
                }}
                placeholder="Username"
                onFocus={(e) => {
                  e.target.classList.remove("current");
                  setUsername("");
                }}
              />
              {username.length < 6 && username.length > 0 && (
                <span className="error">
                  *username must longer than 8 characters
                </span>
              )}
            </div>
            <div className="input__wrapper">
            <input
                required="required"
                type={iconPwCf ? "text" : "password"}
                onBlur={(e) => {
                  handleEmpty(e);
                }}
                placeholder="Password"
              />

              <i
                onClick={() => setIconPwCf((prev) => !prev)}
                className={
                  iconPwCf ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
                }
              ></i>
            </div>
            <button className="btn" type="submit">
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input__wrapper">
              <input
                required="required"
                name="username"
                type="text"
                onBlur={(e) => {
                  handleEmpty(e);
                  setUsername(e.target.value);
                }}
                placeholder="Username"
                onFocus={(e) => {
                  e.target.classList.remove("current");
                  setUsername("");
                }}
              />
              {username.length < 6 && username.length > 0 && (
                <span className="error">
                  *username must longer than 8 characters
                </span>
              )}
            </div>
            <div className="input__wrapper">
              <input
                required="required"
                type={iconPwCf ? "text" : "password"}
                onBlur={(e) => {
                  handleEmpty(e);
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                onFocus={(e) => {
                  e.target.classList.remove("current");
                  setPassword("");
                }}
              />

              <i
                onClick={() => setIconPwCf((prev) => !prev)}
                className={
                  iconPwCf ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
                }
              ></i>
              {!password.match(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
              ) &&
                password.length > 0 && (
                  <span className="error" style={{ bottom: "-51%" }}>
                    *Password must containing at least 8 characters, 1 number, 1
                    upper and 1 lowercase
                  </span>
                )}
            </div>
            <div className="input__wrapper">
              <input
                required="required"
                type={iconPw ? "text" : "password"}
                onBlur={(e) => {
                  handleEmpty(e);
                  setConfirmPassword(e.target.value);
                }}
                placeholder="Confirm password"
                onFocus={(e) => {
                  e.target.classList.remove("current");
                  setConfirmPassword("");
                }}
              />
              <i
                onClick={() => setIconPw((prev) => !prev)}
                className={iconPw ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
              ></i>

              {!confirmPassword !== password && confirmPassword.length > 0 && (
                <span className="error">*Password does not match</span>
              )}
            </div>
            <div className="input__wrapper">
              <input
                required="required"
                name="email"
                onBlur={(e) => {
                  handleEmpty(e);
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="Email"
                onFocus={(e) => {
                  e.target.classList.remove("current");
                  setEmail("");
                }}
              />
              {!email
                .toLowerCase()
                .match(
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ) &&
                email.length > 0 && (
                  <span className="error">*Invalid email address</span>
                )}
            </div>
            <button className="btn" type="submit">
              Register
            </button>
          </form>
        )}

        <div className="line">
          <div></div>
          <span>love you like a friend</span>
          <div></div>
        </div>
        <h1 className="signin">
          {isMember ? "Not a member? " : "Already a member? "}
          <Link
            onClick={() => {
              setIsMember((prev) => !prev);
            }}
            className="link"
            to="/"
          >
            {isMember ? "Sign up" : "Login"}
          </Link>
        </h1>
      </div>
      <div className="circle1 circle"></div>
      <div className="circle2 circle"></div>
    </section>
  );
};

export default Register;
