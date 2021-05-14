function getCurrentValue(move) {
    if (move < 0) { return 1; }
    if (move > 0) { return -1; }
}

function eventHandler(e) {
    const move = e.deltaY;
    const element = e.currentTarget;
    const time = Number(element.textContent);

    const changedTime = getCurrentValue(move) + time;

    const maxRange = 59;

    if (changedTime >= 0 && changedTime <= maxRange) {
        element.textContent = changedTime > 9 ? changedTime : `0${changedTime}`;
    }
}

export const timeHandlers = {
    minutes: eventHandler,
    seconds: eventHandler
};
