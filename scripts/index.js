import { buttonHandlers } from './buttons.js';
import { timeHandlers } from './time.js';
import { e$ } from './elements.js';
import { partners } from './partners.js';
import { slider } from './slider.js';

document.onload = (() => {

    e$.time.container().addEventListener('mousemove', buttonHandlers.pause);
    e$.time.container().addEventListener('mouseleave', buttonHandlers.start);

    e$.time.minutes().addEventListener('wheel', timeHandlers.minutes);
    e$.time.seconds().addEventListener('wheel', timeHandlers.seconds);

    partners.forEach(slider.appendPartner);
})();