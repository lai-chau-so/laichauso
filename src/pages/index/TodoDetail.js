import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TodoDetail({ id }) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    // Thực hiện yêu cầu HTTP GET để lấy danh sách mục todo
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        setTodo(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu:", error);
      });
  }, [id]);

  return (
    <div>
      <h2>Todo Details</h2>
      {todo && (
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <Link to="/">Trang chủ</Link>
        </div>
      )}
    </div>
  );
}

export default TodoDetail;
