import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoMdContact, IoMdHome } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { useAuth } from "../../store/auth";

const AdminLayout = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (!user.isAdmin) {
    return <NavLink to="/" />;
  }

  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaRegUser />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <IoMdContact />
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  <MdDesignServices />
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <IoMdHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
