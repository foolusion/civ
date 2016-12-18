import { combineReducers } from 'redux';

const initialState = {
	start: 0,
	wall: 0,
	diff: 0,
	interval: 0,
	suspend: 0,
}

const gameTimer = (state=initialState, action) => {
	switch (action.type) {
	case 'START':
		return { ...state, start: action.wall, interval: action.interval };
	case 'TICK':
		return { ...state, diff: action.diff, wall: action.wall, interval: action.interval };
	case 'STOP':
		return { ...state, suspend: action.wall, interval: action.interval };
	default:
		return state;
	}
}

const timerState = {
	id: 0, 
	value: 0,
	maxValue: 5000,
}

const tick = (state=timerState, action) => {
	switch (action.type) {
	case 'NEW_TIMER':
		return { id: action.id, value: action.value, maxValue: action.maxValue };
	case 'TICK':
		const newVal = state.value + action.diff;
		if (newVal > state.maxValue) {
			return { ...state, value: state.maxValue };
		}
		return { ...state, value: newVal };
	case 'RESET':
		return { ...state, value: 0 };
	default:
		return state;
	}
}

const timers = (state=[], action) => {
	switch (action.type) {
	case 'NEW_TIMER':
		return [...state, tick(undefined, action)];
	case 'TICK':
		return state.map(t => tick(t, action));
	default:
		return state;
	}
}

export const getTimerByID = (state, id) => {
	return state.find(t => t.id === id)
}

const reducers = combineReducers({gameTimer, timers});

export default reducers;
