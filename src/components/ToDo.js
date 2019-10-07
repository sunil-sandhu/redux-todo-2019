import React, { useState } from "react";
import ReactLogo from "../assets/react.png";
import ReduxLogo from "../assets/redux.png";
import ToDoItem from "./ToDoItem";

import { connect } from "react-redux";
import appActions from "../redux/actions/appActions";

const ToDo = (props) => {
  const { list, createNewToDoItem, deleteItem } = props;
  const [todo, setTodo] = useState("");
  const generateId = () => {
    return Math.max(...list.map((t) => t.id)) + 1;
  };
  const handleCreateNewToDoItem = () => {
    //validate todo
    if (!todo) {
      alert("Please enter a todo!");
      return;
    }
    const newId = generateId();
    createNewToDoItem({ id: newId, text: todo });
    setTodo("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCreateNewToDoItem();
    }
  };

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const handleDeleteItem = (todo) => {
    deleteItem(todo.id);
  };

  return (
    <div className="ToDo">
      <img className="Logo" src={ReduxLogo} alt="logo" />
      <h1 className="ToDo-Header">Redux To Do</h1>
      <div className="ToDo-Container">
        <div className="ToDo-Content">
          {list &&
            list.map((item) => {
              return <ToDoItem key={item.id} item={item} deleteItem={handleDeleteItem} />;
            })}
        </div>

        <div className="ToDoInput">
          <input type="text" value={todo} onChange={handleInput} onKeyPress={handleKeyPress} />
          <button className="ToDo-Add" onClick={handleCreateNewToDoItem}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  ...appActions
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    todo: state.appReducer.todo,
    list: state.appReducer.list
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
