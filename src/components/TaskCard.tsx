import { useEffect, useState } from "react";

type TaskCardProps = {
  task: Task;
  onDelete: Function;
  onChangeTask: Function;
};

const TaskCard = ({ task, onDelete, onChangeTask }: TaskCardProps) => {
  const [editValue, setEditValue] = useState(task.name);
  const [editStatus, setEditStatus] = useState(task.compliteStatus);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        border: "solid",
        alignItems: "center",
        width: 400,
        margin: 5,
        marginLeft: 0,
        color: "green",
      }}
    >
      <input
        type="checkbox"
        checked={isEditing ? editStatus : task.compliteStatus}
        onChange={(e) => {
          isEditing
            ? setEditStatus(!editStatus)
            : onChangeTask(task.id, task.name, !task.compliteStatus);
        }}
      />
      {isEditing ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            minWidth: 0,
          }}
        >
          <input
            type="text"
            style={{ fontSize: 25, flexGrow: 1, minWidth: 0 }}
            value={editValue}
            onChange={(e) => {
              setEditValue(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              await onChangeTask(task.id, editValue, editStatus);
              setIsEditing(false);
            }}
          >
            Сохранить
          </button>
          <button onClick={() => setIsEditing(false)}>Отменить</button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            minWidth: 0,
          }}
        >
          <p
            style={{
              textDecoration: task.compliteStatus ? "line-through" : "none",
              fontWeight: task.compliteStatus ? 400 : 800,
              fontSize: 25,
              marginBlockEnd: 5,
              marginBlockStart: 5,
              color: task.compliteStatus ? "grey" : "black",
              marginLeft: 5,
              marginRight: 20,
            }}
          >
            {task.name}
          </p>
          <div style={{ flexGrow: 1 }} />
          <button onClick={() => setIsEditing(true)}>Изменить</button>
          <button onClick={() => onDelete(task.id)}>Удалить</button>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
