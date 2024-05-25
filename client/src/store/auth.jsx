import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const URL = "http://localhost:3000/api/auth/user";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  const setServerToken = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  const logoutToken = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  let loggedIn = !!token;

  const userContactData = async () => {
    try {
      const res = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.userData);
      }
    } catch (error) {
      console.log("error fetching issue");
    }
  };

  useEffect(() => {
    userContactData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ setServerToken, logoutToken, loggedIn, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
