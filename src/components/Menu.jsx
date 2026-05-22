import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav>
      <Link to="/">Главная страница</Link>
      <Link to="/tasks">Задачи</Link>
      <Link to="/about">О программе</Link>
    </nav>
  );
};
