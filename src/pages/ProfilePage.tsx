import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

type UserRole = "user" | "admin";

export const ProfilePage = () => {
  const { user, logout, switchRole } = useAuth();
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  const handleSwitchRole = (role: UserRole) => {
    switchRole(role);
  };

  return (
    <div
      style={{
        paddingBlock: 8,
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        style={{
          marginInline: 16,
          padding: 12,
          backgroundColor: "#e3e3e3",
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <h3>Профиль</h3>
        <p>ФИО: {user?.fio}</p>
        <p>Роль: {user?.role}</p>
        <select
          value={user?.role}
          onChange={(e) => {
            setRole(e.target.value);
            handleSwitchRole(e.target.value as UserRole);
          }}
          style={{ width: 150 }}
        >
          <option value={"user"}>Пользователь</option>
          <option value={"admin"}>Администратор</option>
        </select>
        <button onClick={handleLogout}>Выйти</button>
      </div>
    </div>
  );
};
