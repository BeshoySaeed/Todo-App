import "./App.css";
import TodoForm from "./components/todoForm";
import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  let [toDos, setTodo] = useState([]);

  const submitDo = (e) => {
    setTodo([e, ...toDos]);
  };

  const deletTodo = (id) => {
    setTodo(toDos.filter((todo) => todo.id !== id));
  };

  const toggleFinshed = (id) => {
    setTodo(
      toDos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            compelet: !todo.compelet,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="App-header">
      <TodoForm submitDo={submitDo} />
      {toDos.map((toDo) => (
        <Todo
          key={toDo.id}
          todo={toDo}
          onClick={() => deletTodo(toDo.id)}
          toggleEnd={() => {
            toggleFinshed(toDo.id);
          }}
        />
      ))}
    </div>
  );
}

export default App;
