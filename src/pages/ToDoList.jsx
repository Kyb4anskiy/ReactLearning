import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { useSearchParams } from "react-router-dom";

const ToDoList = () => {
  const [currentTaskList, setCurrentTaskList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);

  useEffect(() => {
    handleGetTask();
  }, [page]);

  useEffect(() => {
    localStorage.setItem("TaskList", JSON.stringify(currentTaskList));
  }, [currentTaskList]);

  useEffect(() => {
    console.log("totalPages:", totalPages);
  }, [totalPages]);

  const lengthList = currentTaskList.length;
  const countComplite = currentTaskList.filter(
    (obj) => obj.compliteStatus === true,
  ).length;
  const allPages = () => {};

  const handleGetTask = async () => {
    setIsLoading(true);

    const queryParams = new URLSearchParams();
    if (page) queryParams.set("page", page);
    if (limit) queryParams.set("limit", limit);

    try {
      const response = await fetch(
        `https://e68a5f89ae16826a.mokky.dev/listTasks?${queryParams.toString()}`,
      );
      if (!response.ok) throw new Error("Ошибка при получения данных");
      const data = await response.json();
      if (data.items) {
        setCurrentTaskList(data.items);
        if (data.meta && data.meta.total_pages)
          setTotalPages(data.meta.total_pages);
      } else if (Array.isArray(data)) {
        setCurrentTaskList(data);
        setTotalPages(1);
      } else {
        setCurrentTaskList([]);
        setTotalPages(1);
      }
    } catch (e) {
      console.log("Ошибка ", e);
    }
    setIsLoading(false);
  };

  const handlerAddTask = async () => {
    if (inputText === "") return;

    try {
      const response = await fetch(
        "https://e68a5f89ae16826a.mokky.dev/listTasks",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: inputText,
            compliteStatus: false,
          }),
        },
      );
      if (!response.ok) throw new Error();
      handleGetTask();
    } catch (e) {}

    setInputText("");
  };

  const handleUpdateTask = async (id, name, compliteStatus) => {
    try {
      const response = await fetch(
        `https://e68a5f89ae16826a.mokky.dev/listTasks/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name,
            compliteStatus: compliteStatus,
          }),
        },
      );
      if (!response.ok) throw new Error();
      handleGetTask();
    } catch (e) {}
  };

  const handleDeleteTask = async (id) => {
    try {
      const response = await fetch(
        `https://e68a5f89ae16826a.mokky.dev/listTasks/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        },
      );
      if (!response.ok) throw new Error();
      handleGetTask();
    } catch (e) {}
  };

  if (isLoading) return <p>Идет загрузка данных</p>;

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          <input
            value={inputText}
            style={{ fontSize: 25 }}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handlerAddTask}>Добавить</button>
        </div>
        {currentTaskList.map((obj) => (
          <TaskCard
            key={obj.id}
            obj={obj}
            onDelete={handleDeleteTask}
            onChangeTask={handleUpdateTask}
          />
        ))}
        <p>
          Выполненных задач: {countComplite} из {lengthList}
        </p>
        {[1, 2, 3, 4].map((item) => (
          <button key={item} onClick={() => setPage(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
