import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TaskPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {}, [id]);

  const getTaskInfo = async (id) => {
    try {
      const response = await fetch(
        `https://e68a5f89ae16826a.mokky.dev/listTasks/${id}`,
      );
      if (!response.ok) throw new Error("Ошибка при получения данных");
      const data = await response.json();
      setTask(data);
    } catch (e) {}
  };

  console.log(task);

  return <div>Task {id}</div>;
};
