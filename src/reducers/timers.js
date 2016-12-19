import { GAMETIMER_TICK, TIMER_NEW, TIMER_START, TIMER_STOP, TIMER_RESET } from '../actions/types.js';
const timerState = {
	id: 0, 
	value: 0,
	maxValue: 5000,
	isRunning: false,
}

const timerTick = (state, action) => {
	if (!state.isRunning) {
		return state
	}
	if (state.value === state.maxValue) {
		return state
	}
	const newVal = state.value + action.diff;
	if (newVal > state.maxValue) {
		return { ...state, value: state.maxValue };
	}
	return { ...state, value: newVal };
}

const timer = (state=timerState, action) => {
	switch (action.type) {
	case TIMER_NEW:
		return { ...state, id: action.id, value: action.value, maxValue: action.maxValue };
	case TIMER_START:
		return { ...state, isRunning: true };
	case TIMER_STOP:
		return { ...state, isRunning: false };
	case GAMETIMER_TICK:
		return timerTick(state, action)
	case TIMER_RESET:
		return { ...state, value: 0 };
	default:
		return state;
	}
}

const timers = (state=[], action) => {
	switch (action.type) {
	case TIMER_NEW:
		return [...state, timer(undefined, action)];
	case GAMETIMER_TICK:
		return state.map(t => timer(t, action));
	case TIMER_START:
	case TIMER_STOP:
	case TIMER_RESET:
		return [...state.slice(0, action.id), timer(state[action.id], action), ...state.slice(action.id+1)];
	default:
		return state;
	}
}

export const getTimerByID = (state, id) => {
	return state.find(t => t.id === id)
}

export default timers;
