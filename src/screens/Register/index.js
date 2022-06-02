import React from "react";
import { useState, useContext } from "react";
import { LoadingContext } from "../../components";
import Button from "../../components/Button";
import Input from "../../components/Input";
const Register = () => {
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [iconPw, setIconPw] = useState(false);
  const [iconPwCf, setIconPwCf] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const { setIsLoading, Register } = useContext(LoadingContext);
  const [isEveryThingOke, setIsEveryThingOke] = useState(false);

  const handleClick = () => {
    if (isEveryThingOke) {
      setIsLoading(true);
      Register();
      setTimeout(() => setIsMember(true), 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmpty = (e) => {
    if (!e.target.value) {
      e.target.className = "current";
      e.target.placeholder = "This field must be done!";
      e.target.classList.add("error__placeholder");
    } else {
      e.target.classList.remove("error__placeholder");
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
              <Input
                required="required"
                type="text"
                onBlur={(e) => {
                  handleEmpty(e);
                  setUsername(e.target.value);
                }}
                placeholder="Username"
                onFocus={() => {
                  setUsername("");
                }}
              />
              {username.length < 6 &&
                username.length > 0 &&
                setUsernameError("*username must longer than 8 characters")}
              {username.length < 6 && username.length > 0 && (
                <span className="error">
                  *username must longer than 8 characters
                </span>
              )}
            </div>
            <div className="input__wrapper">
              <Input
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
              <Input
                required="required"
                type="text"
                onBlur={(e) => {
                  handleEmpty(e);
                  if (username.length < 8) {
                    setUsernameError("Username must longer than 8 characters");
                  } else {
                    setUsernameError("");
                  }
                }}
                placeholder="Username"
                onFocus={(e) => {
                  e.target.classList.remove("current");
                  setUsername("");
                }}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className="error">{usernameError}</span>
            </div>
            <div className="input__wrapper">
              <Input
                required="required"
                type={iconPwCf ? "text" : "password"}
                onBlur={(e) => {
                  handleEmpty(e);
                  if (
                    !password.match(
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
                    )
                  ) {
                    setPasswordError(
                      "*Password must containing at least 8 characters, 1 number, 1upper and 1 lowercase"
                    );
                  } else {
                    setPasswordError("");
                  }
                }}
                placeholder="Password"
                onFocus={(e) => {
                  e.target.classList.remove("current");
                }}
                onChange={(e) => setPassword(e.target.value)}
              />

              <i
                onClick={() => setIconPwCf((prev) => !prev)}
                className={
                  iconPwCf ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
                }
              ></i>
              <span style={{ bottom: "-50%" }} className="error">
                {passwordError}
              </span>
            </div>
            <div className="input__wrapper">
              <Input
                required="required"
                type={iconPw ? "text" : "password"}
                onBlur={(e) => {
                  handleEmpty(e);
                  if (!confirmPassword.match(password)) {
                    setConfirmPasswordError("Password does not match");
                  } else {
                    setConfirmPasswordError("");
                  }
                }}
                placeholder="Confirm password"
                onFocus={(e) => {
                  e.target.classList.remove("current");
                  setConfirmPassword("");
                }}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <i
                onClick={() => setIconPw((prev) => !prev)}
                className={iconPw ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
              ></i>

              <span className="error">{confirmPasswordError}</span>
            </div>
            <div className="input__wrapper">
              <Input
                required="required"
                onBlur={(e) => {
                  handleEmpty(e);
                  if (
                    !email
                      .toLowerCase()
                      .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      )
                  ) {
                    setEmailError("Invalid email");
                  } else {
                    setEmailError("");
                    setIsEveryThingOke(true);
                  }
                }}
                type="text"
                placeholder="Email"
                onFocus={(e) => {
                  e.target.classList.remove("current");
                  setEmail("");
                }}
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className="error">{emailError}</span>
            </div>
            <Button handleClick={handleClick} text={"Register"} />
          </form>
        )}

        <div className="line">
          <div></div>
          <span>love you like a friend</span>
          <div></div>
        </div>
        <h1 className="signin">
          {isMember ? "Not a member? " : "Already a member? "}
          <button
            onClick={() => {
              setIsMember((prev) => !prev);
            }}
            className="link"
          >
            {isMember ? "Sign up" : "Login"}
          </button>
        </h1>
      </div>
      <div className="circle1 circle"></div>
      <div className="circle2 circle"></div>
    </section>
  );
};

export default Register;
