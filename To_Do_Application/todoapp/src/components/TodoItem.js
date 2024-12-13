import React from "react";

function TodoItem({ todo, onRemove }) {
  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f3f3f3",
    padding: "10px",
    marginBottom: "5px",
    borderRadius: "4px",
  };

  return (
    <li style={itemStyle}>
      <span>{todo.text}</span>
      <button
        onClick={onRemove}
        style={{
          background: "red",
          color: "#fff",
          border: "none",
          padding: "5px 10px",
          borderRadius: "3px",
        }}
      >
        Remove
      </button>
    </li>
  );
}

export default TodoItem;
