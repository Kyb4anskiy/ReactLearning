import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/AboutList.jsx";
import ToDoList from "./pages/ToDoList.jsx";
import { TaskPage } from "./pages/TaskPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { DefaultLayout } from "./Layouts/DefaultLayout.jsx";
import { FilmScreen } from "./pages/FilmPage.jsx";
import { AuthForm } from "./components/AuthForm.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { WishlistPage } from "./pages/WishlistPage.jsx";
import { AuthLayout } from "./Layouts/AuthLayout.jsx";
import { GuestLayout } from "./Layouts/GuestLayout.jsx";
import { RoleLayout } from "./Layouts/RoleLayout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/film/:id" element={<FilmScreen />} />
        <Route path="/wishlist" element={<WishlistPage />} />

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
