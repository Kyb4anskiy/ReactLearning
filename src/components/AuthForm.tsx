import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const AuthForm = () => {
  const [fio, setFio] = useState("");
  const [role, setRole] = useState<UserRole>("user");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      const response = await fetch(
        `https://e68a5f89ae16826a.mokky.dev/userData?login=${fio}`,
      );
      if (!response.ok) throw new Error("Ошибка подключения");
      const data = await response.json();
      //
    } catch (e) {
      console.log(e);
    }
    navigate("/");
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fio) return;
    login(fio, role);
    navigate("/profile");
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
        }}
      >
        <form onSubmit={handleSubmit}>
          <h3>Вход</h3>
          <input
            type="text"
            value={fio}
            placeholder="ФИО"
            onChange={(e) => setFio(e.target.value)}
          />
          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value as UserRole);
            }}
          >
            <option value={"user"}>Пользователь</option>
            <option value={"admin"}>Администратор</option>
          </select>
          <button type="submit" onClick={handleLogIn}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};
