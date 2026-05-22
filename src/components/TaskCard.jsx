import { useEffect, useState } from "react";

const TaskCard = ({ obj, onDelete, onChangeComplite }) => {
  const [editValue, setEditValue] = useState(obj.name);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        border: "solid",
        width: 600,
        margin: 5,
        marginLeft: 0,
        color: "green",
      }}
    >
      <input
        type="checkbox"
        checked={obj.isComplited}
        onChange={(e) => {
          onChangeComplite(obj.id, !obj.isComplited);
        }}
      />
      {isEditing ? (
        <div display="flex">
          <input
            type="text"
            value={editValue}
            onChange={(e) => {
              setEditValue(e.target.value);
            }}
          />
          <button onClick={() => {}}>Сохранить</button>
          <button onClick={() => {}}>Отменить</button>
        </div>
      ) : (
        <div display="flex">
          <p
            style={{
              textDecoration: obj.isComplited ? "line-through" : "none",
              fontWeight: obj.isComplited ? 400 : 800,
              fontSize: 25,
              marginBlockEnd: 5,
              marginBlockStart: 5,
              color: obj.isComplited ? "grey" : "black",
              marginLeft: 5,
              marginRight: 20,
            }}
          >
            {obj.name}
          </p>
          <button onClick={() => setIsEditing(!isEditing)}>Изменить</button>
          <button onClick={() => onDelete(obj.id)}>Удалить</button>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
