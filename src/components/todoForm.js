import React, { useState } from "react";
import uuid from "react-uuid";
import './todoForm.css'

const TodoForm = (props) => {
  const [TodoList, setTodoList] = useState("");

  const hanleClick = () => {
    props.submitDo({
      id: uuid(),
      text: TodoList,
      compelet: false,
    });
    setTodoList('')
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        className="input-field"
        type="text"
        onChange={(e) => setTodoList(e.target.value)}
        value={TodoList}
      ></input>
      <button className="btn-one" onClick={hanleClick}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
