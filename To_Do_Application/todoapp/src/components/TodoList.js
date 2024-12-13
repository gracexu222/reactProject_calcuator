import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onRemoveTodo }) {
  if (todos.length === 0) {
    return <p>No todos yet. Add on above!</p>;
  }

  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={() => onRemoveTodo(todo.id)}
        />
      ))}
    </ul>
  );
}
export default TodoList;
