import { useState } from "react";

import "./App.css";
import ListTodoComponent from "./components/ListTodoComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoComponent from "./components/TodoComponent.jsx";

function App() {
  const [count, setCount] = useState(0);

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
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
