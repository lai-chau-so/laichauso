import React, { useState } from "react";
import TodoList from "./TodoList";
import "./TodoApp.css";

function TodoApp() {
  const [selectedTodo, setSelectedTodo] = useState<any>(null); // Sử dụng any ở đây

  // Hàm xử lý khi mục được chọn
  const handleTodoSelect = (todo: any) => {
    setSelectedTodo(todo);
  };

  return (
    <div className="todo-app">
      <div className="todo-list">
        <h1>Todo List</h1>
        <TodoList onTodoSelect={handleTodoSelect} />
      </div>

      {selectedTodo && (
        <div className="todo-details">
          <h2>Todo Details</h2>
          <div>
            <h3>{selectedTodo.title}</h3>
            <p>{selectedTodo.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoApp;
