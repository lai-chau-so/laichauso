import React, { useState, useEffect } from "react";

function TodoList({ onTodoSelect }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10&_sort=id&_order=desc"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => onTodoSelect(todo)} // Gọi hàm xử lý sự kiện khi mục todo được chọn
            >
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
