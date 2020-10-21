import { elements } from './elements.js';

export function parseQueryString(query) {
    if (!query) {
        return null;
    } else {
        const tokens = query.split('?')[1].split('&').map(t => t.split('='));
        return tokens.reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {});
    }
}

export function extractTimeQuery(queryObj = {}) {
    return Object.keys(queryObj).reduce((acc, curr) => {
        if (curr === 'm' || curr === 's') {
            let value = queryObj[curr];
            if (value < 10) {
                value = `0${value}`
            } else if (value >= 59) {
                value = 59;
            }
            Object.assign(acc, { [curr]: value })
        }
        return acc;
    }, {});
}

export function manageQueryString(search) {

    const queries = parseQueryString(search);
    if (queries) {
        const { m, s } = extractTimeQuery(queries);
        elements.time.minutes().textContent = formatTimeContent(m);
        elements.time.seconds().textContent = formatTimeContent(s);

        if (queries.on === "true") { elements.info.timerState().click(); }
        if (queries.mod === "false") { elements.modal.closeButton().click(); }
    }
}

export function formatTimeContent(value) {
    return Number(value).toString().padStart(2, 0);
}

export function manageAudio() {
    const isPaused = elements.audio.audio().paused;

    if (isPaused) {
        elements.audio.audio().play();
    } else {
        elements.audio.audio().pause();
    }
}