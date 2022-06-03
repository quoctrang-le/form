import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loading, LoadingContext } from "../../components";
import Input from "../../components/Input";
const Login = () => {
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [iconPwCf, setIconPwCf] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const { setIsLoading, isLoading, getLoginInfo, setRoles } =
    useContext(LoadingContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = await getLoginInfo(username, password);
    localStorage.setItem("roles", data.type);
    data && navigate("/dashboard");
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
      {isLoading && <Loading />}
      <div style={{ minHeight: "65vh" }} className="form__wrapper">
        <div className="title">
          <h1>Hello Again</h1>
          <h3>Welcome back you've been missed!</h3>
        </div>
        <form
          style={{ height: "20rem", marginTop: "4rem" }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="input__wrapper">
            <Input
              required="required"
              type="text"
              onBlur={(e) => {
                handleEmpty(e);
                if (username.length < 5) {
                  setUsernameError("Username must longer than 5 characters");
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
              className={iconPwCf ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
            ></i>
            <span style={{ bottom: "-50%" }} className="error">
              {passwordError}
            </span>
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
        <div className="line">
          <div></div>
          <span>love you like a friend</span>
          <div></div>
        </div>
        <h1 className="signin">
          {isMember ? "Already a member? " : "Not a member? "}
          <Link
            style={{ textDecoration: "none", color: "blue" }}
            to="/register"
          >
            Register
          </Link>
        </h1>
      </div>
      <div className="circle1 circle"></div>
      <div className="circle2 circle"></div>
    </section>
  );
};

export default Login;
