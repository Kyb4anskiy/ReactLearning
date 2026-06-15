import { ChangeEvent, SubmitEvent, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/AuthSlice";

export const AuthForm = () => {
  const [userData, setUserData] = useState<{
    login: string;
    password: string;
    role: UserRole;
  }>({
    login: "",
    password: "",
    role: "user",
  });
  //const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      const response = await fetch(
        `https://e68a5f89ae16826a.mokky.dev/userData?login=${userData.login}`,
      );
      if (!response.ok) throw new Error("Ошибка подключения");
      const data = await response.json();
      //
    } catch (e) {
      console.log(e);
    }
    navigate("/");
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userData?.login) return;
    if (!userData?.password) return;
    await login(userData);
    //login(userData.login, userData.role);
    navigate("/profile");
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
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
            name="login"
            type="text"
            value={userData?.login}
            placeholder="Логин"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            value={userData?.password}
            placeholder="Пароль"
            onChange={handleChange}
          />
          <select name="role" value={userData?.role} onChange={handleChange}>
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
