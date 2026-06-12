import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

export const Footer = () => {
  const { theme, switchTheme } = useTheme();
  const { isAuth, isAdmin } = useAuth();

  return (
    <div
      style={{
        backgroundColor: "#26c35f",
        paddingInline: 28,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <div style={{ display: "flex" }}>
        <div>
          <Link
            to={"/"}
            style={{ display: "block", textDecoration: "none", color: "black" }}
          >
            Все фильмы
          </Link>
          {isAdmin && (
            <Link
              to={"/about"}
              style={{
                display: "block",
                textDecoration: "none",
                marginTop: 12,
                color: "black",
              }}
            >
              О проекте
            </Link>
          )}
        </div>
        <div style={{ marginLeft: 40 }}>
          <Link
            to={"https://vk.com/kyb4anskiy"}
            style={{ display: "block", textDecoration: "none", color: "black" }}
          >
            Контакты
          </Link>
          {isAuth && (
            <Link
              to={"/tasks"}
              style={{
                display: "block",
                textDecoration: "none",
                marginTop: 12,
                color: "black",
              }}
            >
              ToDoList
            </Link>
          )}
        </div>
        <div style={{ marginLeft: "auto" }}>
          <p>Используется {theme} тема</p>
          <input
            checked={theme === "light"}
            type="radio"
            onChange={switchTheme}
          />
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <p>2026 React Learning</p>
      </div>
    </div>
  );
};
