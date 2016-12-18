import React from 'react';
import { connect } from 'react-redux';

import Timer from './timer.js';

const TimerList = ({ timers }) => {
	const timerEls = timers.map(t => <Timer key={t.id} id={t.id} width={200} height={40} />);
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
