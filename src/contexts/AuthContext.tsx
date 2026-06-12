import { createContext, useContext, useState } from "react";

type AuthContextValue = {
  user: User | null;
  isAuth: boolean;
  isAdmin: boolean;
  login: (fio: string, role: UserRole) => void;
  logout: () => void;
  switchRole: (role: UserRole) => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("Ошибка контекста");
  return auth;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const userInLocalstorage = localStorage.getItem("user");
    if (userInLocalstorage) return JSON.parse(userInLocalstorage);
    return null;
  });

  const login = (fio: string, role: UserRole) => {
    const newUser = { fio, role };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const switchRole = (role: UserRole) => {
    const newUser = { ...user, role };
    setUser(newUser as User);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isAuth = !!user;
  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider
      value={{ user, isAuth, isAdmin, login, logout, switchRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};
