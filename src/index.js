import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';
import reducers from './reducers';

let store = createStore(reducers);

const run = () => {
	const lastTime = store.getState().gameTimer.wall;
	const maxTick = 50;
	const now = performance.now()
	const diff = now - lastTime
	if (diff < maxTick) {
		store.dispatch({
			type: 'TICK',
			diff: diff,
			wall: now,
			interval: requestAnimationFrame(run),
		});
		return
	}
	store.dispatch({
		type: 'TICK',
		diff: maxTick,
		wall: now,
		interval: requestAnimationFrame(run),
	});
}

run();

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
