import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setServerToken, API } = useAuth();

  const onChangeUser = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const userData = await res.json();

      if (res.ok) {
        setServerToken(userData.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success("Register Successfully");
        navigate("/");
      } else {
        toast.error(
          userData.extraDetails ? userData.extraDetails : userData.message
        );
      }
    } catch (error) {
      console.log("register", error);
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
                  src="/images/register.png"
                  alt="registration page"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={onSubmitForm}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      autoComplete="off"
                      required
                      id="username"
                      value={user.username}
                      onChange={onChangeUser}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter a email"
                      autoComplete="off"
                      required
                      id="email"
                      value={user.email}
                      onChange={onChangeUser}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Enter a phone"
                      autoComplete="off"
                      required
                      id="phone"
                      value={user.phone}
                      onChange={onChangeUser}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter a password"
                      autoComplete="off"
                      required
                      id="password"
                      value={user.password}
                      onChange={onChangeUser}
                    />
                  </div>
                  <button type="submit" className="btn btn-submit">
                    Register Now
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

export default Register;
