import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../components/App';

it('renders without crashing', () => {
  mount(<App/>)
});


/*
it('renders without crashing', () => {
  // this can be used instead 
  // if you prefer CRAs default setup without enzyme
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/