import React from 'react';
import { connect } from 'react-redux';

import TimerControls from './timer-controls.js';

const TimerList = ({ timers }) => {
	const timerEls = timers.map(t => <TimerControls key={t.id} id={t.id} />);
	return (
		<div>
			{timerEls}
		</div>
	);
};

const mapStateFromProps = (state, props) => ({
	timers: state.timers,
});

export default connect(mapStateFromProps)(TimerList);
