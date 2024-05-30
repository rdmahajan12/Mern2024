import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [service, setService] = useState([]);
  const authToken = `Bearer ${token}`;
  const API = "http://localhost:3000";

  const setServerToken = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const logoutToken = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  let loggedIn = !!token;

  const userContactData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.log("user not fetching data");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error fetching issue");
    }
  };

  const serviceData = async () => {
    try {
      const res = await fetch(`${API}/api/data/service`, {
        method: "GET",
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data.msg);
        setService(data.msg);
      }
    } catch (error) {
      console.log("server error");
    }
  };

  useEffect(() => {
    serviceData();
    userContactData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        setServerToken,
        logoutToken,
        loggedIn,
        user,
        service,
        authToken,
        isLoading,
        API,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
