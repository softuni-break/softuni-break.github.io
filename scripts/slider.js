import { e$ } from './elements.js';

export const slider = {

    appendPartner(partnerObj) {

        const wrapper = createHTMLElement('div', ['slide']);
        const imgWrapper = createHTMLElement('div', ['logo-wrapper']);
        const img = createHTMLElement('img', ['partner-company-logo'], null, [{ k: 'src', v: partnerObj.src }]);
        const div = createHTMLElement('div', ['partner-company-name'], partnerObj.name);

        imgWrapper.appendChild(img);
        wrapper.appendChild(imgWrapper);
        wrapper.appendChild(div);

        e$.slider.slider().appendChild(wrapper);
    },
}

function createHTMLElement(tagName, classNames, textContent, attributes) {
    let element = document.createElement(tagName);

    if (classNames) {
        element.classList.add(...classNames)
    }

    if (textContent) {
        element.textContent = textContent;
    }

    if (attributes) {
        attributes.forEach((attr) => {
            element.setAttribute(attr.k, attr.v);
        });
    }

    return element;
}