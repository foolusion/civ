import React from 'react';

const start = (time, isRunning) => {
	if (isRunning) {
		return {}
	}
	return {
		type: 'START',
		start: time,
	}
};

const stop = (time, isRunning) => {
	if (!isRunning) {
		return {}
	}
	return {
		type: 'STOP',
		suspend: time,
		isRunning: false,
	}
};

const TimerControls = (props) => {
	return (
		<div>
			<Timer />
			<button onClick={() => start()}>Start</button>
			<button onClick={() => stop()}>Stop</button>
		</div>
	)
