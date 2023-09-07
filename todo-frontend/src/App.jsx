import { useState } from "react";

import "./App.css";
import ListTodoComponent from "./components/ListTodoComponent.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ListTodoComponent />
    </div>
  );
}

export default App;
