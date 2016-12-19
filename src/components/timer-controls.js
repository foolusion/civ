import React from 'react';
import { connect } from 'react-redux';

import Timer from './timer.js';
import { timerStart, timerStop, timerReset } from '../actions/index.js';

const TimerControls = ({ id, dispatch }) => {
	return (
		<div>
			<Timer id={id} width={200} height={40} />
			<button onClick={() => dispatch(timerStart(id))}>Start</button>
			<button onClick={() => dispatch(timerStop(id))}>Stop</button>
			<button onClick={() => dispatch(timerReset(id))}>Reset</button>
		</div>
	)
}

TimerControls.propTypes = {
	id: React.PropTypes.number.isRequired,
}

export default connect()(TimerControls);
