import React from 'react';
import { connect } from 'react-redux';

import { getTimerByID } from '../reducers/timers.js';

const Timer = ({ width, height, value, maxValue }) => {
	const divStyle = {
		height,
		width: width * value/maxValue,
		backgroundColor: 'coral',
	};

	return (
		<div style={ {height, width, border: '1px solid black' } } >
			<div style={ divStyle }/>
		</div>
       );
};

Timer.propTypes = {
	id: React.PropTypes.number.isRequired,
	width: React.PropTypes.number.isRequired,
	height: React.PropTypes.number.isRequired,
};

const mapStateFromProps = (state, props) => {
	const timer = getTimerByID(state.timers, props.id);
	return {
		value: timer.value,
		maxValue: timer.maxValue,
	};
}

export default connect(mapStateFromProps)(Timer);
