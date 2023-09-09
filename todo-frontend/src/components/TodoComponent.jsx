import React, { useEffect, useState } from "react";
import { addTodo, getTodo } from "../services/TodoService.js";
import { useNavigate, useParams } from "react-router-dom";

const TodoComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [todoData, setTodoData] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  function handleSave(e) {
    e.preventDefault();
    const todo = { title, description, completed };

    addTodo(todo)
        .then((data) => {
          console.log("Todo saved successfully:", data);
          navigate("/todos");
        })
        .catch((error) => {
          console.error("There was a problem saving the todo:", error);
        });
  }

  function pageTitle() {
    if (id) {
      return <h2 className="card-header text-center">Update Todo</h2>;
    } else {
      return <h2 className="card-header text-center">Add Todo</h2>;
    }
  }

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const data = await getTodo(id);
          setTitle(data.title);
          setDescription(data.description);
          setCompleted(data.completed);
        } catch (error) {
          console.error("There was a problem fetching data:", error);
        }
      };

      fetchData();
    }
  }, [id]);

  return (
      <div className="container">
        <div className="row mt-4">
          <div className="card col-md-6 offset-md-3">
            {pageTitle()}
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="title">Todo Title:</label>
                  <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Enter Todo Title"
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="description">Todo Description:</label>
                  <input
                      type="text"
                      className="form-control"
                      id="description"
                      placeholder="Enter Todo Description"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="completed">Todo Completed:</label>
                  <select
                      className="form-control"
                      id="completed"
                      value={completed}
                      onChange={(e) => setCompleted(e.target.value)}
                  >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select>
                </div>
                <button
                    className="btn btn-success"
                    onClick={(e) => handleSave(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TodoComponent;
