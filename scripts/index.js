import { buttonHandlers } from './buttons.js';
import { timeHandlers } from './time.js';
import { elements } from './elements.js';
import { partners } from './partners.js';
import { slider } from './slider.js';

document.onload = (() => {

    elements.time.time().addEventListener('mousemove', buttonHandlers.pause);
    elements.time.time().addEventListener('mouseleave', buttonHandlers.start);

    elements.time.minutes().addEventListener('wheel', timeHandlers.minutes);
    elements.time.seconds().addEventListener('wheel', timeHandlers.seconds);

    partners.forEach(slider.appendPartner);

    elements.footer.currentYear().textContent = new Date().getFullYear();
})();