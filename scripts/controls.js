import { animationFrame } from './animations.js';
import { elements } from './elements.js';
import { toggleTimerState } from './modal.js';

let isStarted = false;
let { timerState } = elements.info;

export function controlCenter() {
    if (!isStarted) {
        animationFrame.startUpdateSeconds();
    } else {
        animationFrame.stopUpdateSeconds();
    }

    isStarted = !isStarted;
    toggleTimerState(timerState(), isStarted);
};

export function isStartedYet() {
    return isStarted;
};

export function setTimerZeroReached() {
    isStarted = false;
    toggleTimerState(timerState(), isStarted);
}
