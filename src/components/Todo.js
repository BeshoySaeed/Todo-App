import React from "react";
import "./Todo.css";

const Todo = (props) => {


    
  return (
    <div className="box-todo">
      <div style={{textDecoration: props.todo.compelet ? 'line-through' : ''}} className="todo-text" onClick={props.toggleEnd}>{props.todo.text} </div>

      <button className="delet" onClick={props.onClick}>
        x
      </button>
    </div>
  );
};

export default Todo;
