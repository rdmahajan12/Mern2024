import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const URL = "http://localhost:3000/api/auth/login";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setServerToken } = useAuth();

  const onChangeUser = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      if (res.ok) {
        const userData = await res.json();
        setServerToken(userData.token);
        setLogin({ email: "", password: "" });
        navigate("/");
      }

      console.log({ res });
    } catch (error) {
      console.log("login", error);
    }
  };

  return (
    <div>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/login.png"
                  alt="login page"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />
                <form onSubmit={onSubmitForm}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      id="email"
                      autoComplete="off"
                      value={login.email}
                      onChange={onChangeUser}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      id="password"
                      autoComplete="off"
                      value={login.password}
                      onChange={onChangeUser}
                    />
                  </div>
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Login;
