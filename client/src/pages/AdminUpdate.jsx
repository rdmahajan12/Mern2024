import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const initialData = {
  username: "",
  email: "",
  phone: "",
};

const AdminUpdate = () => {
  const [updateUser, setUpdateUser] = useState(initialData);
  const params = useParams();
  const { authToken, API } = useAuth();

  const getUserData = async () => {
    try {
      const res = await fetch(`${API}/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      });

      if (res.ok) {
        const updateUserData = await res.json();
        setUpdateUser(updateUserData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeUser = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUpdateUser({
      ...updateUser,
      [name]: value,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/api/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
        body: JSON.stringify(updateUser),
      });

      if (res.ok) {
        toast.success("Update Successfully");
      } else {
        toast.error("Not Updated");
      }
    } catch (error) {
      console.log("update", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <section className="section-contact">
        <div className="container contact-content">
          <h1 className="main-heading">Update User Data</h1>
        </div>
        <div className="container grid grid-two-cols">
          <section className="section-form">
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
                  value={updateUser.username}
                  onChange={onChangeUser}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  id="email"
                  autoComplete="off"
                  value={updateUser.email}
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
                  value={updateUser.phone}
                  onChange={onChangeUser}
                />
              </div>
              <div>
                <button type="submit">Update</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AdminUpdate;
