import React, { useState } from "react";

const ListTodoComponent = () => {
  const dummyData = [
    {
      id: 1,
      title: "Learn Core Java",
      description: "Make projects for learning",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Typescipt",
      description: "Make projects for learning",
      completed: true,
    },
    {
      id: 3,
      title: "Learn Spring JPA",
      description: "Make projects for learning",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(dummyData);

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
