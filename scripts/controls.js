import { animationFrame } from './animations.js';
import { elements } from './elements.js';
import { toggleTimerState } from './modal.js';

let isStarted = false;
let { timerState } = elements.info;

export function controlCenter() {
    if (!isStarted) {
        animationFrame.startUpdateSeconds();
        elements.audio.audio().play();
    } else {
        animationFrame.stopUpdateSeconds();
        elements.audio.audio().pause();
    }

    toggleTimerState(timerState(), isStarted);
    isStarted = !isStarted;
}

export function isStartedYet(){
    return isStarted;
}