import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";

const URL = "http://localhost:3000/api/admin/contacts";

const AdminContact = () => {
  const { authToken } = useAuth();
  const [userContact, setUserContact] = useState([]);

  const getAllUsers = async () => {
    try {
      const res = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      });
      const data = await res.json();
      console.log({ data });
      setUserContact(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authToken,
          },
        }
      );
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        getAllUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <section className="admin-contacts-section">
        <div className="container">
          <h1>Admin Contacts Data</h1>
        </div>
        <div className="container admin-users">
          {userContact.map((curElem, i) => {
            const { username, email, message, _id } = curElem;
            return (
              <div key={i}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{message}</p>
                <button className="btn" onClick={() => deleteUser(_id)}>
                  <MdDelete />
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AdminContact;
