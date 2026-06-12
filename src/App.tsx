import { Route, Routes } from "react-router-dom";
import { About } from "./pages/AboutList";
import ToDoList from "./pages/ToDoList";
import { HomePage } from "./pages/HomePage";
import { DefaultLayout } from "./Layouts/DefaultLayout";
import { FilmScreen } from "./pages/FilmPage";
import { AuthForm } from "./components/AuthForm";
import { ProfilePage } from "./pages/ProfilePage";
import { AuthLayout } from "./Layouts/AuthLayout";
import { GuestLayout } from "./Layouts/GuestLayout";
import { RoleLayout } from "./Layouts/RoleLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/film/:id" element={<FilmScreen />} />

        <Route element={<GuestLayout />}>
          <Route path="/auth" element={<AuthForm />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/tasks" element={<ToDoList />} />

          <Route element={<RoleLayout />}>
            <Route path="/about" element={<About />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<h1>Страница не найдена</h1>} />
    </Routes>
  );
}

export default App;
