import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const Header = () => {
  const { isAuth } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#26c35f",
        paddingInline: 28,
        paddingTop: 20,
        paddingBlock: 4,
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            paddingBlock: 12,
            textDecoration: "none",
            color: "black",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          Каталог фильмов
        </Link>
      </div>

      <nav style={{ display: "flex", gap: 12, marginTop: 8 }}>
        <Link
          to="/"
          style={{
            fontSize: 18,
            paddingBlock: 12,
            textDecoration: "none",
            color: "black",
          }}
        >
          Главная страница
        </Link>
        {isAuth ? (
          <Link
            to="/profile"
            style={{
              fontSize: 18,
              paddingBlock: 12,
              marginLeft: 16,
              textDecoration: "none",
              color: "black",
            }}
          >
            Профиль
          </Link>
        ) : (
          <Link
            to="/auth"
            style={{
              fontSize: 18,
              paddingBlock: 12,
              marginLeft: 16,
              textDecoration: "none",
              color: "black",
            }}
          >
            Войти
          </Link>
        )}
      </nav>
    </div>
  );
};
