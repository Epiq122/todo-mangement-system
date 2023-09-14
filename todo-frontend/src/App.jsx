import "./App.css";
import ListTodoComponent from "./components/ListTodoComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TodoComponent from "./components/TodoComponent.jsx";
import RegisterComponent from "./components/RegisterComponent.jsx";
import LoginComponent from "./components/LoginComponent.jsx";
import { isUserLoggedIn } from "./services/AuthService.js";

function App() {
  function AuthenticatedRoute({ children }) {
    const isAuthenticated = isUserLoggedIn();
    if (isAuthenticated) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  }

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/*http://localhost:8080*/}
          <Route path="/" element={<LoginComponent />} />
          {/*http://localhost:8080/todos*/}
          <Route
            path="/todos"
            element={
              <AuthenticatedRoute>
                <ListTodoComponent />
              </AuthenticatedRoute>
            }
          />
          {/*http://localhost:8080/add-todo*/}
          <Route
            path="/add-todo"
            element={
              <AuthenticatedRoute>
                <TodoComponent />
              </AuthenticatedRoute>
            }
          />
          {/*http://localhost:8080/update-todo/1*/}
          <Route
            path="/update-todo/:id"
            element={
              <AuthenticatedRoute>
                <TodoComponent />
              </AuthenticatedRoute>
            }
          />
          {/*http://localhost:8080/register*/}
          <Route path="/register" element={<RegisterComponent />} />
          {/*http://localhost:8080/register*/}
          <Route path="/login" element={<LoginComponent />} />
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
