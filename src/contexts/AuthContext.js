import { createContext, useContext, useState } from "react";

const AuthContext = createContext({ theme: "light" });

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("Ошибка контекста");
  return auth;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const userInLocalstorage = localStorage.getItem("user");
    if (userInLocalstorage) return JSON.parse(userInLocalstorage);
    return null;
  });

  const login = (fio, role) => {
    const newUser = { fio, role };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const switchRole = (role) => {
    const newUser = { ...user, role };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isAuth = !!user;
  const isAdmin = user.role === "admin";

  return (
    <AuthContext.Provider
      value={{ user, isAuth, isAdmin, login, logout, switchRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};
