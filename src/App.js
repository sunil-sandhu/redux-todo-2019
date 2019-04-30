import React from 'react';
import { connect } from 'react-redux'
import combineReducers from './redux/reducers'
import {increment, decrement, addFive} from "./redux/actionCreators/mathsActions";
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  console.log(props);
  return (
    <div className="App">
      <header className="">
        <h2>{props.msg}</h2>
        <button onClick={props.increment}>increment</button>
        <button onClick={props.decrement}>decrement</button>
        <button onClick={props.addFive}>add five</button>
        <h1>{props.number}</h1>
      </header>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
   msg: state.dummyReducer.msg,
   number: state.mathsReducer.number
  }
}



const mapDispatchToProps = {
  increment,
  decrement,
  addFive

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
