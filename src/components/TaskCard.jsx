import { useEffect, useState } from "react";

const TaskCard = ({ obj, onDelete, onChangeTask }) => {
  const [editValue, setEditValue] = useState(obj.name);
  const [editStatus, setEditStatus] = useState(obj.compliteStatus);
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
        checked={isEditing ? editStatus : obj.compliteStatus}
        onChange={(e) => {
          isEditing
            ? setEditStatus(!editStatus)
            : onChangeTask(obj.id, obj.name, !obj.compliteStatus);
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
              await onChangeTask(obj.id, editValue, editStatus);
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
              textDecoration: obj.compliteStatus ? "line-through" : "none",
              fontWeight: obj.compliteStatus ? 400 : 800,
              fontSize: 25,
              marginBlockEnd: 5,
              marginBlockStart: 5,
              color: obj.compliteStatus ? "grey" : "black",
              marginLeft: 5,
              marginRight: 20,
            }}
          >
            {obj.name}
          </p>
          <div style={{ flexGrow: 1 }} />
          <button onClick={() => setIsEditing(true)}>Изменить</button>
          <button onClick={() => onDelete(obj.id)}>Удалить</button>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
