import React from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import { connect } from "react-redux";
import appActions from "./redux/actions/appActions";

const App = (props) => {
  return <ToDo {...props} />;
};

const mapDispatchToProps = {
  ...appActions
};

const mapStateToProps = (state) => {
  return {
    todo: state.appReducer.todo,
    list: state.appReducer.list
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
