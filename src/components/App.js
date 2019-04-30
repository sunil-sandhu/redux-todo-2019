import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
// import {increment, decrement, addFive} from "./redux/actionCreators/mathsActions";
import mathsActions from '../redux/actions/mathsActions'
import messagesActions from '../redux/actions/messagesActions';
import './App.css';

const App = (props) => {
  console.info('<App> props', props);
  const { updateMessage, increment, decrement, addFive, message, number } = props;
  return (
    <div>
      <h2>{message}</h2>
      <input onChange={updateMessage}/>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addFive}>add five</button>
      <h1>{number}</h1>
    </div>
  );
}

App.propTypes = {
  message: PropTypes.string,
  number: PropTypes.number,
  updateMessage: PropTypes.func,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  addFive: PropTypes.func
}


const mapStateToProps = (state /*, ownProps*/) => {
  return {
   message: state.messagesReducer.message,
   number: state.mathsReducer.number
  }
}

/**
* This does the same as the mapDispatchToProps below that uses the spread operator
* Then it just depends on whether to use it this way or whether to bring each const in
* Separately in the import statement at the top - case of whether you want expressiveness
* Or an easier set up

const mapDispatchToProps = {
  increment,
  decrement,
  addFive
}

**/

 const mapDispatchToProps = {
  ...mathsActions,
  ...messagesActions
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
