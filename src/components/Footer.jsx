import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#26c35f", padding: 16 }}>
      <div style={{ display: "flex" }}>
        <div>
          <Link
            to={"/"}
            style={{ display: "block", textDecoration: "none", color: "black" }}
          >
            Все фильмы
          </Link>
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
        </div>
        <div style={{ marginLeft: 28 }}>
          <Link
            to={"https://vk.com/kyb4anskiy"}
            style={{ display: "block", textDecoration: "none", color: "black" }}
          >
            Контакты
          </Link>
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
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <p>2026 React Learning</p>
      </div>
    </div>
  );
};
