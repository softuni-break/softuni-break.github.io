import {
    manageQueryString,
    setupEvents,
    appendPartnersElements,
    scrollToTheBottom
} from './utils.js';

import { setupModal } from './modal.js';

document.onload = (() => {

    setupEvents();

    appendPartnersElements();

    setupModal();

    manageQueryString(location.search);

    scrollToTheBottom();
})();