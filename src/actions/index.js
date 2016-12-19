import { GAMETIMER_START, GAMETIMER_STOP, GAMETIMER_TICK, TIMER_NEW, TIMER_START, TIMER_TICK, TIMER_STOP, TIMER_RESET } from './types.js';

export const gameTimerStart = (diff, wall, interval) => ({
	type: GAMETIMER_START,
	diff,
	wall,
	interval,
});

export const gameTimerStop = (diff, wall, interval) => ({
	type: GAMETIMER_STOP,
	wall,
	interval,
});

export const gameTimerTick = (diff, wall, interval) => ({
	type: GAMETIMER_TICK,
	diff,
	wall,
	interval,
});

export const timerNew = (id, maxValue) => ({
	type: TIMER_NEW,
	id,
	value: 0,
	maxValue,
});

export const timerStart = (id) => ({
	type: TIMER_START,
	id,
});

export const timerTick = (id, diff) => ({
	type: TIMER_TICK,
	id,
       	diff, 
});

export const timerStop = (id) => ({
	type: TIMER_STOP,
	id,
});

export const timerReset = (id) => ({
	type: TIMER_RESET,
	id,
});
