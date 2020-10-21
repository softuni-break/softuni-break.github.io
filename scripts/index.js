import { controlCenter } from './controls.js';
import { timeHandlers } from './time.js';
import { elements } from './elements.js';
import { partners } from './partners.js';
import { slider } from './slider.js';
import { manageQueryString, manageAudio } from './utils.js';
import { setupModal } from './modal.js';

document.onload = (() => {

    elements.time.minutes().addEventListener('wheel', timeHandlers.minutes);
    elements.time.seconds().addEventListener('wheel', timeHandlers.seconds);
    elements.info.timerState().addEventListener('click', controlCenter);
    elements.audio.muteButton().addEventListener('click', manageAudio);
    
    partners.forEach(slider.appendPartner);

    setupModal();
    
    manageQueryString(location.search);
})();