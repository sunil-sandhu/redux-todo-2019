import React from "react";
import { connect } from "react-redux";
import appActions from "./redux/actions/appActions";
import ToDo from "./components/ToDo";
import "./App.css";

const App = (props) => {
  return <ToDo {...props} />;
};

const mapStateToProps = (state) => {
  return {
    list: state.appReducer.list
  };
};

const mapDispatchToProps = {
  ...appActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
