import { elements } from './elements.js';
// import { showProgress } from './progress-bars.js';

let timeInterval = null;
let countdownTime = 0;

function startTimeHandler(e) {

    countdownTime = (Number(elements.time.minutes().textContent) * 60) + Number(elements.time.seconds().textContent);

    timeInterval = setInterval(() => {

        const minutes = elements.time.minutes().textContent;
        const seconds = elements.time.seconds().textContent;

        if (seconds > 0) {
            const changedSeconds = seconds - 1;
            elements.time.seconds().textContent = changedSeconds > 9 ? changedSeconds : `0${changedSeconds}`;
        } else if (minutes > 0) {
            const changedMinutes = minutes - 1;
            elements.time.minutes().textContent = changedMinutes > 9 ? changedMinutes : `0${changedMinutes}`;
            elements.time.seconds().textContent = 59;
        } else {
            pauseTimeHandler();
        }

        // showProgress(minutes, seconds, countdownTime);

    }, 1000);

}

function pauseTimeHandler() {
    clearInterval(timeInterval);
    timeInterval = null;
}

export const buttonHandlers = {
    start: startTimeHandler,
    pause: pauseTimeHandler
};