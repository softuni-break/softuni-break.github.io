import { elements } from './elements.js';
// import { showProgress } from './progress-bars.js';

let animationId;
let countdownTime = 0;
let lastTimeCalled = 0;

function startUpdateSeconds(elapsedTime) {

    if ((elapsedTime - lastTimeCalled) >= 1000 || lastTimeCalled === 0) {

        lastTimeCalled = elapsedTime;
        countdownTime = (Number(elements.time.minutes().textContent) * 60) + Number(elements.time.seconds().textContent);

        const minutes = elements.time.minutes().textContent;
        const seconds = elements.time.seconds().textContent;

        if (seconds > 0) {
            const changedSeconds = seconds - 1;
            elements.time.seconds().textContent = changedSeconds > 9 ? changedSeconds : `0${changedSeconds}`;
        } else if (minutes > 0) {
            const changedMinutes = minutes - 1;
            elements.time.minutes().textContent = changedMinutes > 9 ? changedMinutes : `0${changedMinutes}`;
            elements.time.seconds().textContent = 59;
        }
        // showProgress(minutes, seconds, countdownTime);
    }
    animationId = requestAnimationFrame(startUpdateSeconds)
}

export const animationFrame = {
    startUpdateSeconds: () => requestAnimationFrame(startUpdateSeconds),
    stopUpdateSeconds: () => cancelAnimationFrame(animationId)
};