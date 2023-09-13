import { useState } from "react";

import "./App.css";
import ListTodoComponent from "./components/ListTodoComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoComponent from "./components/TodoComponent.jsx";
import RegisterComponent from "./components/RegisterComponent.jsx";
import LoginComponent from "./components/LoginComponent.jsx";

function App() {


  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/*http://localhost:8080*/}
          <Route path="/" element={<ListTodoComponent />} />
          {/*http://localhost:8080/todos*/}
          <Route path="/todos" element={<ListTodoComponent />} />
          {/*http://localhost:8080/add-todo*/}
          <Route path="/add-todo" element={<TodoComponent />} />
          {/*http://localhost:8080/update-todo/1*/}
          <Route path="/update-todo/:id" element={<TodoComponent />} />
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
