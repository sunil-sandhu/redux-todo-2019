import React, { useState } from "react";
import ReduxLogo from "../assets/redux.png";
import ToDoItem from "./ToDoItem";
import "./ToDo.css";

const ToDo = (props) => {
  const { list, redux_add, redux_delete } = props;
  const [todo, setTodo] = useState("");

  const generateId = () => {
    if (list && list.length > 1) {
      return Math.max(...list.map((t) => t.id)) + 1;
    } else {
      return 1;
    }
  };

  const createNewToDoItem = () => {
    //validate todo
    if (!todo) {
      return alert("Please enter a todo!");
    }
    const newId = generateId();
    redux_add({ id: newId, text: todo });
    setTodo("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createNewToDoItem();
    }
  };

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const deleteItem = (todo) => {
    redux_delete(todo.id);
  };

  return (
    <div className="ToDo">
      <img className="Logo" src={ReduxLogo} alt="logo" />
      <h1 className="ToDo-Header">Redux To Do</h1>
      <div className="ToDo-Container">
        <div className="ToDo-Content">
          {list &&
            list.map((item) => {
              return <ToDoItem key={item.id} item={item} deleteItem={deleteItem} />;
            })}
        </div>

        <div className="ToDoInput">
          <input type="text" value={todo} onChange={handleInput} onKeyPress={handleKeyPress} />
          <button className="ToDo-Add" onClick={createNewToDoItem}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
