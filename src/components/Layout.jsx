import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div style={{ margin: 0 }}>
      <header>
        <Header />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
