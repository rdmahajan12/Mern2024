import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const { authToken, API } = useAuth();
  const [user, setUser] = useState([]);

  const getAllUsers = async () => {
    try {
      const res = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      });
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await fetch(`${API}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authToken,
        },
      });
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
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {user.map((curElem, i) => {
                const { username, email, phone, _id } = curElem;
                return (
                  <tr key={i}>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>
                      <Link to={`/admin/users/${_id}/edit`}>
                        <MdEdit />
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(_id)}>
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminUsers;
