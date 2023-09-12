import {
  completeTodo,
  deleteTodo,
  getAllTodos,
  incompleteTodo,
} from "../services/TodoService.js";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const ListTodoComponent = () => {
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllTodos()
      .then((data) => setTodos(data))
      .catch((error) =>
        console.error("There was a problem listing the todos:", error)
      );
  }, [todos]); // Add todos as a dependency to re-run the effect when todos changes

  function addNewTodo() {
    navigate("/add-todo");
  }

  function handleUpdateClick(id) {
    console.log(id);
    navigate(`/update-todo/${id}`);
  }

  function removeTodo(id) {
    deleteTodo(id)
      .then((response) => {
        // Filter out the deleted todo from the todos array
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      })
      .catch((error) =>
        console.error("There was a problem deleting the todo:", error)
      );
  }

  function markCompleteTodo(id) {
    completeTodo(id)
      .then((response) => {
        // Find the completed todo in the todos array and update its completed status
        const updatedTodos = todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: true };
          } else {
            return todo;
          }
        });
        setTodos(updatedTodos);
      })
      .catch((error) =>
        console.error("There was a problem completing the todo:", error)
      );
  }

  function markInCompleteTodo(id) {
    incompleteTodo(id)
      .then((response) => {
        // Find the completed todo in the todos array and update its completed status
        const updatedTodos = todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: false };
          } else {
            return todo;
          }
        });
        setTodos(updatedTodos);
      })
      .catch((error) =>
        console.error("There was a problem completing the todo:", error)
      );
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
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                    onClick={() => removeTodo(todo.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success"
                    style={{ marginLeft: "10px" }}
                    onClick={() => markCompleteTodo(todo.id)}
                  >
                    Complete
                  </button>
                  <button
                    className="btn btn-info"
                    style={{ marginLeft: "10px" }}
                    onClick={() => markInCompleteTodo(todo.id)}
                  >
                    Incomplete
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
