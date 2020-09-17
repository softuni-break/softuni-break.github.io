import { controlCenter } from './controls.js';
import { timeHandlers } from './time.js';
import { elements } from './elements.js';
import { partners } from './partners.js';
import { slider } from './slider.js';
import { parseQueryString } from './util.js';

document.onload = (() => {
    if (location.search) {
        const { m, s } = parseQueryString(location.search);
        elements.time.minutes().textContent = m || '00';
        elements.time.seconds().textContent = s || '00';
    }

    elements.time.minutes().addEventListener('wheel', timeHandlers.minutes);
    elements.time.seconds().addEventListener('wheel', timeHandlers.seconds);
    elements.time.container().addEventListener('click', controlCenter);

    partners.forEach(slider.appendPartner);

    elements.footer.currentYear().textContent = new Date().getFullYear();
})();