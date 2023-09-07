import React, { useEffect, useState } from "react";
import { getAllTodos } from "../services/TodoService.js";
import { useNavigate, useParams } from "react-router-dom";

const ListTodoComponent = () => {
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllTodos()
      .then((data) => setTodos(data))
      .catch((error) =>
        console.error("There was a problem listing the todos:", error)
      );
  }, []);

  function addNewTodo() {
    navigate("/add-todo");
  }

  function handleUpdateClick(id) {
    console.log(id);
    navigate(`/update-todo/${id}`);
  }

  return (
    <div className="container">
      <h2 className="text-center mt-4">List of Todos</h2>
      <button className="btn btn-primary mb-2" onClick={addNewTodo}>
        Add Todo
      </button>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Todo Tile</th>
              <th>Todo Description</th>
              <th>Complete</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={(e) => handleUpdateClick(todo.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListTodoComponent;
