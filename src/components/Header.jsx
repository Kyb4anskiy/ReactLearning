import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div style={{ backgroundColor: "#26c35f", padding: 16, paddingBottom: 4 }}>
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
        <Link
          to="/about"
          style={{
            fontSize: 18,
            paddingBlock: 12,
            textDecoration: "none",
            color: "black",
          }}
        >
          О каталоге
        </Link>
      </nav>
    </div>
  );
};
