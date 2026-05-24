import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/AboutList.jsx";
import ToDoList from "./pages/ToDoList.jsx";
import { TaskPage } from "./pages/TaskPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { Layout } from "./components/Layout.jsx";
import { FilmScreen } from "./pages/FilmScreen.jsx";

// GET - получение данных, без тела запроса
// 1 - все задачи - массив сущностей /tasks
// 2 - одна задача - один объект /tasks/1 /tasks/:id
// 3 - query - параметры /tasks?category=джинсы&size=45
// 4 - пагинация - номер страницы и количество элементов на странице

// POST - передача данных, создание новых данных на сервере
// PUT/PATCH - изменение существующих данных. PUT - передать все данные. PATCH - передать конкретные данные
// DELETE - удаление данных

// CRUD - операции

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tasks" element={<ToDoList />} />
        <Route path="/film/:id" element={<FilmScreen />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<h1>Страница не найдена</h1>} />
    </Routes>
  );
}

export default App;
