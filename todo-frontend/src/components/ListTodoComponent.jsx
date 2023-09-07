import React, { useEffect, useState } from "react";
import { getAllTodos } from "../services/TodoService.js";

const ListTodoComponent = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos()
      .then((data) => setTodos(data))
      .catch((error) =>
        console.error("There was a problem listing the todos:", error)
      );
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mt-4">List of Todos</h2>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Todo Tile</th>
              <th>Todo Description</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListTodoComponent;
