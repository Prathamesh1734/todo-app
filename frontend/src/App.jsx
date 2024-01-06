import { useEffect, useState } from "react";

import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    setInterval(function () {
      fetch("http://localhost:3000/todos").then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 10000);
  }, []);

  return (
    <div>
      <h1>Todo APP</h1>
      <CreateTodo setTodos={setTodos}></CreateTodo>
      <Todos key={todos.id} todos={todos} setTodos={setTodos}></Todos>
    </div>
  );
}

export default App;
