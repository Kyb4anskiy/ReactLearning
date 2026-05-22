import Card from "./components/Card";
import TaskList from "./components/TaskList.jsx";
import TaskCard from "./components/TaskCard.jsx";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/AboutList.jsx";
import ToDoList from "./pages/ToDoList.jsx";
import { TaskPage } from "./pages/TaskPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { Layout } from "./components/Layout.jsx";

// Иммуьабельный - всегда создается новая ссылка
// ... - spread оператор

// push/shift, pop/unshift - мутабельные
// slice, sort, reverse - мутабельные
// fill, copyWithin - мутабельные

// map, filter, reduce, slice - иммутабельные
// concat, toSliced, toSorted, toReverced
// flatMap, find

//Перебор
// 1. for (let i = 0; i < data.length; i++)
// 2. for (const obj of data)
// 3. data.forEach(obj => {})

// reduce
//const res = data.reduce((accumulator, currentValue) => {}, initialValue);

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
  // useEffect без массива зависимостей
  // useEffect(() => {
  //   console.log("Каждый раз при обновлении");
  // });

  // // useEffect с пустым массивом зависимостей (Mount)
  // useEffect(() => {
  //   console.log("Один раз при Mount");

  //   // clenup function
  //   return () => {
  //     console.log("Компонент разментирован");
  //   };
  // }, []);

  // // useEffect с массивом зависимостей - update()
  // useEffect(() => {
  //   console.log("Каждый раз при обновлении зависимостей ", count);
  // }, [count]);

  // useEffect(() => {
  //   console.log("Каждый раз при обновлении зависимостей ", text);
  // }, [text]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/tasks" element={<ToDoList />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks/:id" element={<TaskPage />} />
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
