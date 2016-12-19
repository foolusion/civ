import { combineReducers } from 'redux';
import timers from './timers.js';
import { GAMETIMER_TICK,  GAMETIMER_STOP, GAMETIMER_START } from '../actions/types.js';

const initialState = {
	start: 0,
	wall: 0,
	diff: 0,
	interval: 0,
	suspend: 0,
}

const gameTimer = (state=initialState, action) => {
	switch (action.type) {
	case GAMETIMER_START:
		return { ...state, start: action.wall, interval: action.interval };
	case GAMETIMER_TICK:
		return { ...state, diff: action.diff, wall: action.wall, interval: action.interval };
	case GAMETIMER_STOP:
		return { ...state, suspend: action.wall, interval: action.interval };
	default:
		return state;
	}
}

const reducers = combineReducers({gameTimer, timers});

export default reducers;
