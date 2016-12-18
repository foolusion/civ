import React from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import TimerList from './components/TimerList.js'

let id = 0;

const newTimer = (id, maxValue) => ({
	type: 'NEW_TIMER',
	id,
	value: 0,
	maxValue,
});

const App = ({dispatch}) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={() => dispatch(newTimer(id++, 5000))} >New Timer</button>
      <TimerList />
    </div>
  );
}

export default connect()(App);
