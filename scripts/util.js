export function parseQueryString(query) {
    if (query === null) {
        return null;
    } else {
        const tokens = query.split('?')[1].split('&').map(t => t.split('='));
        return tokens.reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {});
    }
}