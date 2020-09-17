export function parseQueryString(query) {
    if (query === null) {
        return null;
    } else {
        const tokens = query.split('?')[1].split('&').map(t => t.split('='));
        return tokens.reduce((p, [k, v]) => {
            if(v < 10) { v = `0${v}` }
            return Object.assign(p, { [k]: v });
        }, {});
    }
}